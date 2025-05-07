import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function MessagePane(props) {

  //have: [{},{},{},{}]
  console.log(INITIAL_CHAT_LOG);

  //need: [<>,<>,<>]
  const messageItemArray = INITIAL_CHAT_LOG.map((msgObj) => {
    const transformed = (
      <MessageItem 
        key={msgObj.timestamp} 
        messageData={ msgObj } 
      />
    );
    return transformed;
  })


  // const messageItemArray = [
  //   <MessageItem messageData={ INITIAL_CHAT_LOG[0] } />,
  //   <MessageItem messageData={ INITIAL_CHAT_LOG[1] } />,
  //   <MessageItem messageData={ INITIAL_CHAT_LOG[2] } />,
  //   <MessageItem messageData={ INITIAL_CHAT_LOG[3] } />,
  //   <MessageItem messageData={ INITIAL_CHAT_LOG[4] } />,
  // ]

  const contentArray = [
    <li key={'a'}>1</li>,
    <li key={'b'}>2</li>,
    <li key={'c'}>3</li>,
  ];



  return (
    <div>
      {messageItemArray}
    </div>
  )
}

function MessageItem(props) {
  const { messageData } = props
  const { userName, text } = messageData;

  return (
    <div className="message d-flex">
      <div className="me-2">
        <img src={"/img/"+userName+".png"} alt={userName+"'s avatar"} />
      </div>
      <div>
        <p className="user-name">{userName}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}