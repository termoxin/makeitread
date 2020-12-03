import { NextApiRequest, NextApiResponse } from "next";

import nc from "next-connect";

import low from "lowdb";

import FileSync from "lowdb/adapters/FileSync";

import { CardProps } from "./../../../src/components/card/Card";
import { getPageMetadata } from "./../../../src/helpers/cheerio";

const adapter = new FileSync<{ articles: CardProps[] }>("db.json");
const db = low(adapter);

db.defaults({
  articles: [
    {
      cover:
        "https://media.nature.com/lw800/magazine-assets/d41586-020-01390-w/d41586-020-01390-w_17974388.jpg",
      description: "React-html-parser",
      marked: false,
      slug: "get-pieces-together",
      source: "medium.to",
      title: "React-html-parser",
      ttr: 5,
      original:
        "https://medium.com/better-programming/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7",
      text: "1",
    },
  ],
}).write();

export const getArticles = (): CardProps[] => db.get("articles").value();

const handler = nc()
  .get((_req: NextApiRequest, res: NextApiResponse) => {
    return res.send(getArticles());
  })
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { url } = req.body;

    const metaData = await getPageMetadata(url);

    db.get("articles").push(metaData).write();

    return res.send(metaData);
  })
  .delete(async (_req: NextApiRequest, res: NextApiResponse) => {
    db.set("articles", []).write();

    return res.send({ success: true });
  });

export default handler;
