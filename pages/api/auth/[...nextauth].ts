import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { NextApiRequest, NextApiResponse } from "next";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  session: {
    jwt: true,
  },
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.SECRET,
    encryption: true,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
