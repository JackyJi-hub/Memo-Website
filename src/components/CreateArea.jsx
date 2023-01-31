import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    date: (new Date()).toLocaleString("en-CA", { timeZone: "EST" })
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
        date: (new Date()).toLocaleString("en-CA", { timeZone: "EST" })
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    // send the note back to app.js
    props.onAdd(note);
    // set text box back to blank
    setNote({
      title: "",
      content: "",
      date: (new Date()).toLocaleString("en-CA", { timeZone: "EST" })
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">

        <input
          name="title"
          onClick={expand}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          rows={isExpanded ? 3 : 1}
        />


        {isExpanded && (<textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />)}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
