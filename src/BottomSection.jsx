import react from 'react';
import { useState } from 'react';

function BottomSection({ value, setValue, handleSubmit }) {
  return (
    <div className='bottom-section'>
      <div className='input-container'>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button id='submit' onClick={handleSubmit}>➢</button>
      </div>
    </div>
  );
}
export default BottomSection;