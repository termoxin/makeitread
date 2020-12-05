import { CardProps } from "@components/card/Card";

const updateArticle = async (id: string, updates: Partial<CardProps>) => {
  const config = {
    body: JSON.stringify({ id, ...updates }),
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/readlist`,
    config
  );

  const data = await response.json();

  return data;
};

export const setMarkAsRead = (id: string, marked: boolean) =>
  updateArticle(id, { marked });

export const getArticle = async (slug: string | string[]) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/readlist/${slug}`
  );

  const { data } = await response.json();

  return data;
};
