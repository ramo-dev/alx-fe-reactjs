
import { useParams } from 'react-router-dom';

function Blog() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Displaying content for blog post ID: {postId}</p>
    </div>
  );
}

export default Blog;
