import React, { useState } from 'react';

import USERS from '../data/users.json';  

export function ComposeForm(props) {
  const { currentChannel, addMessageFunc } = props;

  const [typedText, setTypedText] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("posting", typedText);

    addMessageFunc(USERS[1], typedText, currentChannel)

    setTypedText(''); //clear the input
  }

  const handleChange = (event) => {
    const whatTheyTyped = event.target.value;
    console.log(whatTheyTyped);
    setTypedText(whatTheyTyped); //write it on the board, and refresh
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={typedText}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}