import React from 'react';

const TodosItem = ({ id, title, completed, userId }) => {
  return (
    <div className='my-2 rounded-md p-5 shadow-md relative border border-solid border-gray-500'>
      <h3 className='absolute top-2 right-2 italic text-sm text-slate-400'>
        ID: {id}
      </h3>
      <p>{title}</p>
      <p>UserId - {userId}</p>
      <p>{completed ? 'completed' : 'not completed'}</p>
    </div>
  );
};

export default TodosItem;
