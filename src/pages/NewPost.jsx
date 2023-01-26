import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const data = useActionData();
  const navigate = useNavigate();
  const { state } = useNavigation();

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={state === 'submitting'}
      />
    </>
  );
}

export default NewPostPage;

export async function action(ctx) {
  const formData = await ctx.request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  };
  try {
    await savePost(post);
  } catch (error) {
    if (error.status === 422) {
      return error;
    }
    return error;
  }

  return redirect('/blog');
}
