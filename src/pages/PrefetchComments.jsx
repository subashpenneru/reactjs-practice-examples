import { useInfiniteQuery } from '@tanstack/react-query';
import React, { Fragment, useEffect, useState } from 'react';

import { getComments } from '../api';
import CommentsItem from '../components/CommentsItem';

const PrefetchComments = () => {
  const [comments, setComments] = useState([]);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    getNextPageParam: ({ nextPage }) => nextPage,
  });

  useEffect(() => {
    if (data) {
      if (comments.length === 0) {
        const result = [];
        data.pages.forEach((res) => {
          result.push(...res.comments);
        });
        setComments(result);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (comments.length) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  const onLoadMore = () => {
    setComments((prev) => [...prev, ...data.pages.at(-1).comments]);
  };

  if (status === 'loading') {
    return <div>Loading ...</div>;
  }

  if (status === 'error') {
    return <div>{error?.message ?? 'Something went wrong!'}</div>;
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {comments.map(({ id, name, email, body }) => (
          <CommentsItem
            key={id}
            id={id}
            name={name}
            email={email}
            body={body}
          />
        ))}
      </div>
      <div className='text-center my-4'>
        <button
          className='w-40 p-2 bg-green-500 text-white font-bold shadow-xl rounded-sm hover:bg-green-700'
          onClick={onLoadMore}
          disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
    </>
  );
};

export default PrefetchComments;
