import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <MainNavigation />
      <main className='error-content'>
        <h1>An Error occurred!</h1>
        <p>{error?.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;
