export const fetchApi = async (url) => {
  const res = await fetch(url);
  return res.json();
};
