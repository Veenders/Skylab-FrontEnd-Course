/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';

export default function NavBar (props) {
  const{ onChange, activeView } = props;
  return (
    <nav className="NavBar">
      <ul>
        <li className={activeView===1?'active':''} onClick={()=>{onChange(1);}}>All To Do's</li>
        <li className={activeView===2?'active':''} onClick={()=>{onChange(2);}}>Pending To Do's</li>
        <li className={activeView===3?'active':''} onClick={()=>{onChange(3);}}>Complete To Do's</li>
      </ul>
    </nav>
  );
}