import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function useTimes() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('times')
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTimes(newTimes);
      });

    return () => unsubscribe();
  }, []);

  return times;
}

const TimesList = () => {
  const times = useTimes();

  return (
    <div>
      <label>Sort By: </label>
      <select>
        <option>Time (fastest first)</option>
        <option>Time (longest first)</option>
        <option disabled>---</option>
        <option>Title (A-Z)</option>
        <option>Title (Z-A)</option>
      </select>

      <ol>
        {times.map(time => (
          <li key={times.id}>
            <div className='time-entry'>
              {time.title}
              <code className='time'>{time.seconds} seconds</code>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TimesList;
