import { NextApiRequest, NextApiResponse } from "next";

import { User } from "next-auth";
import { getSession } from "next-auth/client";

interface ProtectedNextApiRequest extends NextApiRequest {
  user: User;
}

type protectedHandler = (
  req: ProtectedNextApiRequest,
  res: NextApiResponse
) => void;

const secret = process.env.SECRET;

export const protectRoute = (handler: protectedHandler) => async (
  req: ProtectedNextApiRequest,
  res: NextApiResponse
) => {
  if (secret) {
    const token = await getSession({
      req,
    });

    if (!token) {
      res.status(401);
      return res.end();
    }

    req.user = token.user;

    return handler(req, res);
  }

  res.end(501);
};
