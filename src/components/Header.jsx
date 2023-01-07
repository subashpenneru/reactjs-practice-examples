import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header bg-blue-500 text-white shadow-xl fixed w-full top-0 z-10'>
      <section className='max-w-4xl mx-auto flex items-center justify-between flex-1 py-3 px-2'>
        <Link to='/' className='logo px-4 py-2'>
          <h1>ReactQuery</h1>
        </Link>
        <ul className='flex items-center'>
          <li className='p-2'>
            <Link className='px-4 py-2' to='/todos'>
              Todos
            </Link>
          </li>
          <li className='p-2'>
            <Link className='px-4 py-2' to='/comments'>
              Comments
            </Link>
          </li>
          <li className='p-2'>
            <Link className='px-4 py-2' to='/prefetch-comments'>
              Prefetch Comments
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Header;
