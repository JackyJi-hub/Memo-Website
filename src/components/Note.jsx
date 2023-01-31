import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete-button" onClick={handleClick}>
        <DeleteForeverIcon/>
      </button>
      <h5 className="date">{props.date}</h5>
    </div>
  );
}

export default Note;
