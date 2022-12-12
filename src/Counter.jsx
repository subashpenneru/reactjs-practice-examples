import React, { useRef } from 'react';

const Counter = (props) => {
  const { counter, onAdd, onSubtract } = props;
  const inputRef = useRef();

  return (
    <>
      <div className='text-center'>Counter: {counter}</div>
      <button className='btn btn-primary mx-4' onClick={onAdd}>
        Add
      </button>

      <hr />
      <input type='number' placeholder='Enter number' ref={inputRef} />
      <button
        className='btn btn-secondary mx-4'
        onClick={() =>
          onSubtract((prev) => prev - (+inputRef.current.value || 1))
        }>
        Subtract
      </button>
    </>
  );
};

export default Counter;
