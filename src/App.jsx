import React from 'react';
import Users from './containers/UsersContainer';
import NewParticipant from './containers/NewPorticipant';
import Winner from './containers/Winner'
import './App.css';

const App = ()=>{
  return(
    <div className="name">
      <Users/>
      <div>
        <NewParticipant/>
        <Winner/>
      </div>
    </div>
  )
}

export default App;
