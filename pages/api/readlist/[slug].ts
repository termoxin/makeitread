import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { getArticles } from ".";

const handler = nc().get(
  async ({ query }: NextApiRequest, res: NextApiResponse) => {
    const slug = query.slug;

    const article = getArticles().find((article) => article.slug === slug);

    if (article) {
      const data = {
        data: article,
      };

      res.send(data);
    } else {
      res.send({
        data: { error: true, message: `"${slug}" page doesn't found` },
      });
    }
  }
);

export default handler;
