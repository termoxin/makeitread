import { NextApiRequest, NextApiResponse } from "next";

import nc from "next-connect";

import Article from "./../../../src/db/schemas";
import { getPageMetadata } from "./../../../src/helpers/cheerio";
import { initDb } from "../../../src/db";

initDb();

const handler = nc()
  .get(async (_req: NextApiRequest, res: NextApiResponse) => {
    return res.send(await Article.find());
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { url } = req.body;

    const metaData = await getPageMetadata(url);

    const article = new Article(metaData);

    await article.save();

    return res.send(article);
  })
  .put(async ({ body }: NextApiRequest, res: NextApiResponse) => {
    const { id } = body;

    const article = await Article.findById(id);

    article.marked = !article.marked;

    await article.save();

    res.send(article);
  });

export default handler;
