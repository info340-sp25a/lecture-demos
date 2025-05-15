import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import DEFAULT_USERS from '../data/users.json';

export function HeaderBar(props) {
  const { currentUser, changeUserFunc } = props;

  //event handler
  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    console.log(selectedUserObj);
    //do something with userObj!
    //change the currentUser state variable
    changeUserFunc(selectedUserObj);
  }

  //for convenience
  const userButtons = DEFAULT_USERS.map((userObj) => {
    let classListString = "btn user-icon"

    if(userObj.userId === currentUser.userId) {
      classListString += " active";
    }

      // <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    return (
      <Dropdown.Item className={classListString} key={userObj.userName} 
        name={userObj.userId} onClick={handleClick}
      >
        <img className="pe-2" src={userObj.userImg} alt={userObj.userName + " avatar"} />
        {userObj.userName}
      </Dropdown.Item>
    )
  })

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat</h1>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {userButtons}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}