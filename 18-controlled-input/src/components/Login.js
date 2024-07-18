import { useState } from 'react';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [data, setData] = useState({ username: '', password: '' });

  function handleFromSubmit(event) {
    event.preventDefault();

    const userData = {
      username: data.username,
      password: data.password,
    };

    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>login form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          username:
          <input
            type="text"
            value={data.username}
            onChange={(event) =>
              setData({ ...data, username: event.target.value })
            }
          />
        </label>
        <label>
          password:
          <input
            type="password"
            value={data.password}
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
          />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default Login;
