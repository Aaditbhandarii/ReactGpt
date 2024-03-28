import e from 'cors';
import react from 'react';
import { useState } from 'react';

function SideBar(createNewChat, uniqueTitles, handleClick) {
    return(
        <section className="sidebar">
        <button onClick={createNewChat}>+ New chat</button>
        <ul className='history'>
          {Array.isArray(uniqueTitles) && uniqueTitles.map((uniqueTitle, index) => (
            <li key={index} onClick={() => handleClick(uniqueTitle)}>
              {uniqueTitle}
            </li>
          ))}
        </ul>
      </section>
    )
}
export default SideBar;