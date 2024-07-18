import './Post.css';

function Post(props) {
  const { id, title, userId, body } = props;
  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>Body: {body}</p>
      <h4>User Id: {userId}</h4>
    </div>
  );
}

export default Post;
