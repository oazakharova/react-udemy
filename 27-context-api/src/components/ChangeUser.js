import { useContext, useState } from 'react';

import UserContext from '../context/UserContext';

const ChangeUser = () => {
  const [newUserName, setNewUserName] = useState('');
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <input
        type="text"
        value={newUserName}
        onChange={(event) => setNewUserName(event.target.value)}
      ></input>
      <button onClick={() => setUser(newUserName)}>change user</button>
    </>
  );
};

export default ChangeUser;
