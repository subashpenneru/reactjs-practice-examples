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

export const getTodos = async (page = 1, limit = 24) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );
  return await res.json();
};

export const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  return await res.json();
};
