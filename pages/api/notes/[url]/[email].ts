import { ProtectedNextApiRequest } from "src/helpers/server/protectRoute";
import { NextApiResponse } from "next";
import nc from "next-connect";

import { Note } from "src/db/schemas";
import { protectRoute } from "src/helpers/server/protectRoute";

const getHandler = protectRoute(
  async (
    { query: { url, email }, user }: ProtectedNextApiRequest,
    res: NextApiResponse
  ) => {
    if (email !== user.email) {
      res.status(403);
      return res.end();
    }

    res.send({ data: await Note.find({ url, email }) });
  }
);

const handler = nc().get(getHandler);

export default handler;
