import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import Article from "./../../../src/db/schemas";

const getHandler = async ({ query }: NextApiRequest, res: NextApiResponse) => {
  const slug = query.slug;

  const article = await Article.findOne({ slug });

  if (article) {
    const data = {
      data: article._doc,
    };

    res.send(data);
  } else {
    res.send({
      data: { error: true, message: `"${slug}" page doesn't found` },
    });
  }
};

const handler = nc().get(getHandler);

export default handler;
