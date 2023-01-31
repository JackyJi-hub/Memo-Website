import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {

  const [notes, setNotes] = useState([]);


  React.useEffect(() => {
    axios.get("http://localhost:4100/memories/").then(res => setNotes(res.data)
    );
  })

  

  function addNote(newNote) {
    console.log(newNote);
    axios.post("http://localhost:4100/memories/add", newNote).then(res => console.log(res.data));
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    axios.delete("http://localhost:4100/memories/" + id).then(res => console.log(res.data));
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            date={noteItem.date}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
