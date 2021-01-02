export const getArticleNotes = async (url: string, email: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/notes/${encodeURIComponent(
      url
    )}/${encodeURIComponent(email)}`
  );

  const { data } = await response.json();

  return data;
};
