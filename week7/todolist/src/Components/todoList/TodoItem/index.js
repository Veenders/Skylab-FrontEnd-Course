/* eslint-disable react/prop-types */
import React from 'react';

export default function TodoItem (props) {
  const{ id , name , done , onChangeStatus, onDelete } = props;
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={(event)=>{onChangeStatus(id,event.target.checked);}}
      />
      <span>{name}</span>
      <button onClick={()=>{onDelete(id);}}><i className="fa fa-trash" aria-hidden="true"></i></button>
    </div>
  );
}
