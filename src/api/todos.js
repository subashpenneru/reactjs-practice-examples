export const getTodos = async (page = 1, limit = 24) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );
  return res.json();
};
