import React from 'react'
import Notes from '../Notes/Notes'
import './NoteContainer.css'
const NoteContainer = (props) => {

  const reverseArray = (arr) => {
    const array = []
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  }

  const notes = reverseArray(props.notes)
  return (
    <div className="notes-container">
      <h1>Notes App</h1>
      <div className="notes_container_note custom-scroll">
        {
          notes?.length > 0 ? notes.map((item) => (
            <Notes notes={item} key={item.id} 
            deleteNote={props.deleteNote}
            updateText={props.updateText}/>
          )): <h3>No Notes present</h3>}
      </div>
    </div>
  )
}

export default NoteContainer