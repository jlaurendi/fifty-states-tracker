import React, { FC } from 'react';
import './App.css';
import UserMapComponent from './components/UserMapComponent';

const App: FC = () => {
  const userName = 'Joe';
  return (
    <>
      <UserMapComponent userName={userName} />
    </>
  );
};

export default App;
