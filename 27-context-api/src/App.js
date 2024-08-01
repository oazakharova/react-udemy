import { useState } from 'react';

import './App.css';
import UserContext from './context/UserContext';
import User from './components/User';
import ChangeUser from './components/ChangeUser';

// задача
// в компоненте App содержится компонент User, в котором содержится компонент UserInfo
// необходимо отобразить в компоненте UserInfo имя, которое содержится в состоянии компонента App

function App() {
  const [user, setUser] = useState('Olga');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  );
}

export default App;
