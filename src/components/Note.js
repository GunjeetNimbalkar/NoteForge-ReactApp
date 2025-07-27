import React, { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Note({ id, text, date, handleDeleteNote, handleEditNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSaveClick = () => {
    if (editedText.trim().length > 0) {
      handleEditNote(id, editedText);
      setIsEditing(false);
    }
  };

  return (
<div className={`note ${isEditing ? 'editing' : ''}`}>      {isEditing ? (
        <textarea
          rows="8"
          cols="10"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{text}</span>
      )}
      <div className='note-footer'>
        <small>{date}</small>
        {isEditing ? (
          <button className='save' onClick={handleSaveClick}>Save</button>
        ) : (
  <div className='icon-controls'>
            <MdEdit
              onClick={() => setIsEditing(true)}
              className='edit-icon'
              size='1.3em'
            />
            <MdDeleteForever
              onClick={() => handleDeleteNote(id)}
              className='delete-icon'
              size='1.3em'
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Note;
