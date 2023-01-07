export const getComments = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${pageParam}&_limit=${24}`
  );
  const data = await res.json();
  return {
    comments: data,
    nextPage: pageParam + 1,
  };
};
