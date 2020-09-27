import React, { useState } from 'react';

import firebase from '../firebase';

const AddTimeEntryForm = () => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  function addTimeEntry(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection('times')
      .add({
        title,
        seconds: parseInt(time)
      })
      .then(() => {
        setTitle('');
        setTime('');
      });
  }

  return (
    <form onSubmit={addTimeEntry}>
      <h4>Add a Time</h4>
      <div>
        <label>Title</label>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Time</label>
        <input
          type='number'
          value={time}
          onChange={e => setTime(e.currentTarget.value)}
        />
      </div>
      <button>Add Time</button>
    </form>
  );
};

export default AddTimeEntryForm;
