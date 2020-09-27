import React from 'react';
import './App.css';

import TimesList from './components/timesList';
import AddTimeEntryForm from './components/addTimeEntryForm';

function App() {
  return (
    <div className='App'>
      <h1>Time Me</h1>
      <TimesList />
      <AddTimeEntryForm />
    </div>
  );
}

export default App;
