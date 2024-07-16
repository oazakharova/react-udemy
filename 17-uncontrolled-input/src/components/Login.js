function Login() {
  function handleFromSubmit(event) {
    event.preventDefault();

    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    alert(JSON.stringify(userData));
  }

  return (
    <>
      <h1>login form</h1>
      <form onSubmit={handleFromSubmit}>
        <label>
          username:
          <input type="text" name="username" />
        </label>
        <label>
          password:
          <input type="password" name="password" />
        </label>
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default Login;
