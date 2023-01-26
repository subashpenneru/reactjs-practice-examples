import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';

import Posts from '../components/Posts';
import { getPosts } from '../util/api';

function BlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts.</p>}>
          {(loadedPosts) => <Posts blogPosts={loadedPosts} />}
        </Await>
      </Suspense>
      {/* <Posts blogPosts={loaderData} /> */}
    </>
  );
}

export default BlogPostsPage;

export function loader() {
  // return getPosts();
  return defer({ posts: getPosts() });
}
