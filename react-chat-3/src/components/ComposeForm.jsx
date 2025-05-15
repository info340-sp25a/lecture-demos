import React, { useState } from 'react';

export function ComposeForm(props) {
  const { currentUser, addMessageFunction, currentChannel } = props;

  const [inputtedText, setInputtedText] = useState('');

  //typing
  const handleChange = (event) => {
    const typedValue = event.target.value;
    setInputtedText(typedValue);
  }

  //submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Parrot.png" }

    addMessageFunction(currentUser, inputtedText, currentChannel);   
    setInputtedText('');
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
    <div className="input-group">
        <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          onChange={handleChange}
          value={inputtedText}
        />
        {currentUser.userId  && 
          <button type="submit" className="btn btn-secondary">
            <span className="material-icons">send</span>
          </button>
        }
      </div>
    </form>
  );
}