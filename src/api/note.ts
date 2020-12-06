export const getArticleNotes = async (url: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/notes/${encodeURIComponent(url)}`
  );
  const { data } = await response.json();

  return data;
};
