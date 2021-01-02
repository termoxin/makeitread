import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { Article } from "src/db/schemas";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, slug } = req.query;

  const articleInMyReadlist = await Article.findOne({
    slug,
  }).where("email", email);

  if (!articleInMyReadlist) {
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
  } else {
    const data = {
      data: articleInMyReadlist,
    };

    return res.send(data);
  }
};

const deleteHandler = async (
  { query: { slug, email } }: NextApiRequest,
  res: NextApiResponse
) => {
  const article = await Article.findOne({ slug, email });

  await article.delete();

  return res.send({ success: true });
};

const handler = nc().get(getHandler).delete(deleteHandler);

export default handler;
