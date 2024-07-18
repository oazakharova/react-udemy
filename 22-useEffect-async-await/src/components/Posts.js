import Post from './Post';
import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // useEffect должна возвращать либо undefined, либо другую функцию, и она не может возвращать промис
  // а асинх функция всегда возвращает промис, даже если внутри нее нет ключ слова return,

  // поэтому в useEffect нельзя передавать асинхронные функции первым аргументом,
  // потому что эта возвращенная функция будет вызвана,
  // когда реакт будет выполнять анмаунт этого компонента (убирать этот компонент из видимой части интерфейса),
  // то он вызовет то, что возвращается из колбэка

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const res = await fetch(API_URL);
    //     const posts = await res.json();
    //     setPosts(posts);
    //   } catch (error) {
    //     setError(error.message);
    //   }
    //   setIsLoading(false);
    // }
    // fetchData();

    // IIFE - Immediately Invoked Function Expression
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  // useEffect((API_URL) => {
  //   fetch()
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

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
