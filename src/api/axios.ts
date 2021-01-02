import Axios from "axios";

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
