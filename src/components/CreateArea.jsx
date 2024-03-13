import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [onForm, setOnForm] = useState(false);

  function handleChange(event) {
    //const name = event.target.name;
    //const newValue = event.target.value;
    const {name, value} = event.target;
    setNote(prevValue =>{
      return {
        ...prevValue, 
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "", 
      content: ""
    });
    event.preventDefault();
  }

  function showForm() {
    setOnForm(true);
  }

  return (
    <div onClick={showForm}>
      <form className="create-note">
        {onForm &&
        <input
          //style={onForm ? null : {display: 'none'}}  alternate solution to hide element
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />} 
        <textarea 
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={onForm ? "3" : "1"}
        />
        <Zoom in={onForm}>
          <Fab onClick={submitNote} >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
