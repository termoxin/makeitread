import { IncomingMessage } from "http";
import { axios } from "./axios";

export const getArticleNotes = async (
  url: string,
  email: string,
  req?: IncomingMessage
) => {
  const {
    data: { data },
  } = await axios({
    method: "GET",
    url: `/api/notes/${encodeURIComponent(url)}/${encodeURIComponent(email)}`,
    headers: req ? { cookie: req.headers.cookie } : undefined,
  });

  return data;
};
