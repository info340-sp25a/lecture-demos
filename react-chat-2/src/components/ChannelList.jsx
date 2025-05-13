import React from 'react';

export function ChannelList(props) {
  const {channelNames, currentChannel, howToChangeChannel} = props;

  const handleClick = (event) => {
    event.preventDefault();
    console.log("you clicked on", event.target.name)

    //change to that channel
    howToChangeChannel(event.target.name);
  }

  
  const elemArray = channelNames.map((channelNameString) => {
    let classListString = "px-2";
    if(channelNameString === currentChannel) { //on current channel
      classListString += " bg-warning";
    }

    const transformed = (
      <li className={classListString} key={channelNameString}>
        <a name={channelNameString} href={"/"+channelNameString} 
           onClick={handleClick}>
          {channelNameString}
        </a>
      </li>
    );

    return transformed;
  })

  return (
    <nav className="channel-nav h-100 bg-secondary px-0 py-3">
      <ul className="px-0">
        {elemArray}
      </ul>
    </nav>
  )
}