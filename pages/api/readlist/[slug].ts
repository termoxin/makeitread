import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { Article } from "src/db/schemas";

const getHandler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  const { slug } = query;

  const article = await Article.findOne({
    slug,
  });

  if (!article) {
    return res.send({
      data: { error: true, message: `"${slug}" page doesn't found` },
    });
  }

  const data = {
    data: article,
  };

  return res.send(data);
};

const handler = nc().get(getHandler);

export default handler;
