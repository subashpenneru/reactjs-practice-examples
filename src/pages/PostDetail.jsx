import { useLoaderData } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getPost } from '../util/api';

function PostDetailPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <BlogPost title={loaderData.title} text={loaderData.body} />
    </>
  );
}

export default PostDetailPage;

export function loader(ctx) {
  return getPost(ctx.params.id);
}
