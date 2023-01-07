import React from 'react';

const CommentsItem = ({ id, postId, name, email, body }) => {
  return (
    <div className='my-2 rounded-md py-10 px-5 shadow-md relative border border-solid border-green-500 shadow-green-300'>
      <h3 className='absolute top-2 right-2 italic text-sm text-slate-400'>
        ID: {id}
      </h3>
      <p className='font-bold mt-2'>{name}</p>
      <p className='mt-2 italic text-slate-700'>Email - {email}</p>
      <p className='mt-2'>{body}</p>
    </div>
  );
};

export default CommentsItem;
