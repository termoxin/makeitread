import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { Note } from "src/db/schemas";

const getHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  return res.send({ data: await Note.find({}) });
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { text, url },
  } = req;

  const note = new Note({ text, url });

  await note.save();

  return res.send(note);
};

const handler = nc().get(getHandler).post(postHandler);

export default handler;
