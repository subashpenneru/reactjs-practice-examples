import React, { useState } from 'react';

import Counter from './Counter';

const App = () => {
  const [counter, setCounter] = useState(0);

  const onAddHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1>App</h1>
      <Counter counter={counter} onAdd={onAddHandler} onSubtract={setCounter} />
    </div>
  );
};

export default App;
