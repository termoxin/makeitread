import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { Article } from "src/db/schemas";
import { getPageMetadata } from "src/helpers/server/cheerio";
import { initDb } from "src/db";
import { protectRoute } from "src/helpers/server/protectRoute";

initDb();

const getHandler = protectRoute(async (req, res) =>
  res.send(await Article.find({ email: req.user.email }))
);

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
