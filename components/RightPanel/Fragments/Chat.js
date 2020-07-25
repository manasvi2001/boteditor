import React, {useState, useEffect} from 'react';
import {lighten} from '../../../utils/util';

const Chat = ({color}) => {
  const [chat, setChat] = useState([{
    user: "Bot",
    message: "Hello, I am Haldo your personal assistant, how can I help you today?"
  }, {
    user: "You",
    message: "Hello Haldo, I would like to know how to change my bank address."
  }, {
    user: "Bot",
    message: "Hello, I'll help you out."
  }]);
  const [message, setMessage] = useState("");
  const [colorrgb, setColorrgb] = useState(`rgba(${color.r},${color.g},${color.b},${color.a})`);

  useEffect(() => {
    setColorrgb(`rgba(${color.r},${color.g},${color.b},${color.a})`);
  }, [color]);
  const handleInputChange = (ev) => {
    setMessage(ev.target.value);
  }
  const detectKey = (ev) => {
    if (ev.keyCode === 13) {
      updateChat();
    }
  }
  const updateChat = () => {
    if (message.trim().length > 0) {
      setChat([
        ...chat,
        {
          user: "You",
          message: message.trim()
        }
      ]);
      setMessage("");
    }
  }
  useEffect(() => {
    if (chat[chat.length - 1].user !== "Bot") {
      setTimeout(() => {
        setChat([
          ...chat,
          {
            user: "Bot",
            message: "Do this then."
          }
        ]);
      },3000);
    }
  }, [chat])
  return (
    <div className="section__chat">
      <div className="chat__header" style={{backgroundColor: colorrgb}}>
        <div className="chat__avatar">
        </div>
        <div className="chat__title">
          <div className="heading__primary heading__primary--white">
            Your Personal Assistant
          </div>
          <div className="heading__secondary heading__secondary--white">
            Chat Test
          </div>
        </div>
      </div>
      <div className="chat__window">
        <div className="message__container">
          {chat.length && chat.map(message => {
            if (message.user === "Bot") {
              return (
                <>
                  <div style={{backgroundColor: lighten(color, 57)}} className="message message__right heading__secondary heading__secondary--black">
                    {message.message}
                  </div>
                  <div className="chat__avatar">
                  </div>
                </>
              )
            } else {
              return (
                <>
                  <div className="chat__avatar chat__avatar--small">
                  </div>
                  <div className="message message__left heading__secondary heading__secondary--black">
                    {message.message}
                  </div>
                </>
              )
            }
          })}
        </div>
        <div className="message__input-container">
          <input style={{backgroundColor: lighten(color, 87)}} className="message__input" placeholder="Type your message here..." value={message} onChange={handleInputChange} onKeyUp={detectKey}/>
        </div>
      </div>
    </div>
  )
}

export default Chat;