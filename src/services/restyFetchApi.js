export const getResponse = async (url) => {
  const response = await fetch(url);
  return response.json();
};
