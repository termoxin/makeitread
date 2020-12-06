import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { Note } from "src/db/schemas";

const getHandler = async (
  { query: { url } }: NextApiRequest,
  res: NextApiResponse
) => res.send({ data: await Note.find({ url }) });

const handler = nc().get(getHandler);

export default handler;
