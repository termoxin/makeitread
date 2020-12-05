import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import Article from "./../../../src/db/schemas";
import { getPageMetadata } from "./../../../src/helpers/cheerio";
import { initDb } from "../../../src/db";

initDb();

const getHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  return res.send(await Article.find());
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.body;

  const metaData = await getPageMetadata(url);

  const article = new Article(metaData);

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
