import React from 'react';

const AddTimeEntryForm = () => {
  return (
    <form>
      <h4>Add a Time</h4>
      <div>
        <label>Title</label>
        <input type='text' />
      </div>
      <div>
        <label>Time</label>
        <input type='number' />
      </div>
      <button>Add Time</button>
    </form>
  );
};

export default AddTimeEntryForm;
