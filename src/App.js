import React from 'react';

// component
import MainPage from './component/page/MainPage'

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 style={{padding: '25px 50px', textAlign: 'center'}} >UserManagement</h1>
      <div className='main-page-container' style={{padding: '25px 50px'}}>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
