import React from 'react';

const TimesList = () => {
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
        <li>
          <div className="time-entry">
            Entry Title
            <code className="time">10 seconds</code>
          </div>
        </li>
        <li>
          <div className="time-entry">
            Entry Title
            <code className="time">10 seconds</code>
          </div>
        </li>
        <li>
          <div className="time-entry">
            Entry Title
            <code className="time">10 seconds</code>
          </div>
        </li>
        <li>
          <div className="time-entry">
            Entry Title
            <code className="time">10 seconds</code>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default TimesList;
