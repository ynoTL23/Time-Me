import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

const SORT_OPTIONS = {
  TIME_ASC: { column: 'seconds', direction: 'asc' },
  TIME_DESC: { column: 'seconds', direction: 'desc' },
  TITLE_ASC: { column: 'title', direction: 'asc' },
  TITLE_DESC: { column: 'title', direction: 'desc' }
};

function useTimes(sortBy = 'TIME_ASC') {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('times')
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTimes(newTimes);
      });

    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

const TimesList = () => {
  const [sortBy, setSortBy] = useState('TIME_ASC');
  const times = useTimes(sortBy);

  return (
    <div>
      <label>Sort By: </label>
      <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
        <option value='TIME_ASC'>Time (fastest first)</option>
        <option value='TIME_DESC'>Time (longest first)</option>
        <option disabled>---</option>
        <option value='TITLE_ASC'>Title (A-Z)</option>
        <option value='TITLE_DESC'>Title (Z-A)</option>
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
