import React from 'react';

import { HeaderBar } from './HeaderBar.jsx';
import { ChannelNav } from './ChannelNav.jsx';
import { MessagePane } from './MessagePane.jsx';

function App(props) {
  return (
    <div> 
      <HeaderBar />  
      <div className="row">
        <div className="col-3">
          <ChannelNav />
        </div>
        <div className="col">
          <MessagePane />
        </div>
      </div>
    {/* 
      <MessagePane>
        <MessageList>      
          <MessageItem />
          <MessageItem />
          <MessageItem />
        <MessageList >
        <ChatBox /> 
      </ MessagePane>    
    */}

    </div>
  );
}

export default App;