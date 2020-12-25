import { getToken } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { Article } from "src/db/schemas";
import { getPageMetadata } from "src/helpers/cheerio";
import { initDb } from "src/db";

initDb();

interface DecryptedToken {
  email: string;
  picture: string;
  iat: number;
  exp: number;
}

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.SECRET;

  if (secret) {
    const token = (await getToken({
      req,
      secret,
      encryption: true,
    })) as DecryptedToken;

    if (!token) {
      res.status(401);
      res.end();
    }

    return res.send(await Article.find({ email: token.email }));
  }
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, email } = req.body;

  const metaData = await getPageMetadata(url);

  const article = new Article({ ...metaData, email });

  await article.save();

  return res.send(article);
};

const putHandler = async ({ body }: NextApiRequest, res: NextApiResponse) => {
  const { id, ...updates } = body;

  const article = await Article.findByIdAndUpdate(id, updates, {
    returnOriginal: false,
  });

  res.send(article);
};

const handler = nc().get(getHandler).post(postHandler).put(putHandler);

export default handler;
