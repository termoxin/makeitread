import { NextApiRequest, NextApiResponse } from "next";

import nc from "next-connect";

const handler = nc()
  .get((_req: NextApiRequest, res: NextApiResponse) => {
    return res.send({ date: new Date() });
  })
  .post((_req: NextApiRequest, res: NextApiResponse) => {
    return res.send({ message: "It is POST method" });
  });

export default handler;
