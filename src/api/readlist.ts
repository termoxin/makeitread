export const fetchReadList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/api/readlist`);
  const list = await response.json();

  return list;
};
