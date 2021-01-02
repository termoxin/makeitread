import { axios } from "./axios";
import { NextPageContext } from "next";

export const fetchReadList = async (context: NextPageContext) => {
  try {
    const { data } = await axios({
      method: "GET",
      url: `/api/readlist`,
      headers: context.req ? { cookie: context.req.headers.cookie } : undefined,
    });

    return data;
  } catch (err) {
    return [];
  }
};
