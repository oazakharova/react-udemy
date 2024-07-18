import Post from './Post';
import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
}

export default Posts;
