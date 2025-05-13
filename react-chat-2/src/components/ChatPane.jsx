import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.jsx';

import INITIAL_CHAT_LOG from '../data/chat_log.json';
import USERS from '../data/users.json';  

export function ChatPane(props) {
  console.log("rendering chatpane")
  const { currentChannel } = props;

  const [msgObjArray, setMsgObjArray] = useState( INITIAL_CHAT_LOG )  
  //DEBUG STATE VARIABLES
  // const messageObjArray = stateResultArray[0];
  // const setMessageObjArray = stateResultArray[1];

  // //data: an array of message objects [{}, {}]
  // const messageObjArray = INITIAL_CHAT_LOG

  const handleClick = (event) => {
    console.log("You clicked me!");
    addMessage(USERS[1], "Hello react", "general")
  }

  // DATA MANAGEMENT: how do we change
  const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    //console.log(newMessage);
    const biggerArray = [...msgObjArray, newMessage];
    // messageObjArray.push(newMessage)

    setMsgObjArray(biggerArray); //1. write on the board
                                    //2. rerender component
    console.log(msgObjArray);
  }

  /* RENDERING: what do we look like */

  //Step 1. data processing
  //data: an array of message objects [{}, {}]
  //sorted and filtered
  const channelMessages = msgObjArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp) //reverse chron order
    .filter((msgObj) => { //channel messages only
      return msgObj.channel === currentChannel; //whether to keep
    })

  //Step 2. convert data to views
  //views: DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem messageData={chatObj} key={chatObj.timestamp} />
      return elem; //put it in the new array!
  });

  return (
    <>
      <div className="scrollable-pane pt-2 my-2">
        {/* button demo */}
        <div className="mb-2">
          {/* button.addEventListener('click', function()) */}
          <button className="btn btn-success" onClick={handleClick}>Add a message!</button>
        </div>
        <hr/>

        {/* conditional rendering */}
        { messageItemArray.length === 0 && 
          <p>No messages yet</p>
        }

        {/* Messages */}
        {messageItemArray}
      </div>

      <ComposeForm currentChannel={currentChannel} addMessageFunc={addMessage} />
      </>
  )
}

function MessageItem(props) {
  const msgObj = props.messageData;
  const {userName, userImg, text} = msgObj;

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button">
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}
