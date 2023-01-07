import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import Header from './components/Header';
import Todos from './pages/Todos';
import Comments from './pages/Comments';
import PrefetchComments from './pages/PrefetchComments';
import { getComments } from './api';

const App = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const prefetchComments = async () => {
      await queryClient.prefetchInfiniteQuery(['comments'], () =>
        getComments({ pageParam: 1 })
      );
    };

    prefetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main className='mt-20 max-w-4xl mx-auto px-2 py-5'>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/prefetch-comments' element={<PrefetchComments />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
