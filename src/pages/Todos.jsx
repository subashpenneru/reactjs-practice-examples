import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import { getTodos } from '../api';
import TodosItem from '../components/TodosItem';

const TODOS_PER_PAGE = 24;

const Todos = () => {
  const [page, setPage] = useState(1);
  const [todos, setTodos] = useState([]);

  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery(
    ['todos', page],
    ({ queryKey }) => getTodos(queryKey[1], TODOS_PER_PAGE)
  );

  const prefetchTodos = async () => {
    // The results of this query will be cached like a normal query
    await queryClient.prefetchQuery({
      queryKey: ['todos', page + 1],
      queryFn: ({ queryKey }) => getTodos(queryKey[1], TODOS_PER_PAGE),
    });
  };

  useEffect(() => {
    if (data) {
      setTodos((prev) => [...prev, ...data]);
      prefetchTodos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const loadMore = async () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading && todos.length === 0) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>{error?.message ?? 'Something went wrong!'}</div>;
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {todos.map(({ id, userId, title, completed }) => (
          <TodosItem
            key={id}
            id={id}
            title={title}
            completed={completed}
            userId={userId}
          />
        ))}
      </div>
      {todos.length < 200 && (
        <div className='actions text-center my-4'>
          <button
            className='w-40 p-2 bg-blue-700 text-white rounded-sm shadow-lg'
            onClick={loadMore}>
            {isLoading ? 'Loading More...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Todos;
