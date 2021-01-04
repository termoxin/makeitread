import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

import { Note } from "src/db/schemas";
import { protectRoute } from "src/helpers/server/protectRoute";

const getHandler = protectRoute(async (req, res) =>
  res.send(await Note.find({ email: req.user.email }))
);

const postHandler = protectRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      body: { text, email, url },
    } = req;

    const note = new Note({ text, email, url });

    await note.save();

    return res.send(note);
  }
);

const handler = nc().get(getHandler).post(postHandler);

export default handler;
