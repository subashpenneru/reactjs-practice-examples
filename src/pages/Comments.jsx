import { useInfiniteQuery } from '@tanstack/react-query';
import React, { Fragment } from 'react';

import { getComments } from '../api';
import CommentsItem from '../components/CommentsItem';

const Comments = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: getComments,
    getNextPageParam: ({ nextPage }) => nextPage,
  });

  if (status === 'loading') {
    return <div>Loading ...</div>;
  }

  if (status === 'error') {
    return <div>{error?.message ?? 'Something went wrong!'}</div>;
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.comments.map(({ id, name, email, body }) => (
              <CommentsItem
                key={id}
                id={id}
                name={name}
                email={email}
                body={body}
              />
            ))}
          </Fragment>
        ))}
      </div>
      <div className='text-center my-4'>
        <button
          className='w-40 p-2 bg-green-500 text-white font-bold shadow-xl rounded-sm hover:bg-green-700'
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  );
};

export default Comments;
