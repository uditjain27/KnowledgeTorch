import classes from './ChatBot.module.css';
import svg from "../../images/chatbox-icon.svg";
import { useEffect, useState } from 'react';

const ChatBot = (props) => {

  const [showChat, setShowChat] = useState(true);
  let message0 = [];

  const fetchMsg = async (text1) => {
    const response = await fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: text1 }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    const msg = await response.json();
    return msg;
  }

  const toggleState = () => {
    setShowChat(!showChat);
    const chatbox = document.querySelector(`.${classes.chatbox__support}`);
    console.log(chatbox);

    // show or hides the box
    if (showChat) {
      chatbox.classList.add(`${classes.chatbox__active}`);
    } else {
      chatbox.classList.remove(`${classes.chatbox__active}`);
    }
  }

  const onSendButton = async () => {
    const chatbox = document.querySelector(`.${classes.chatbox__support}`);
    var textField = chatbox.querySelector('input');
    let text1 = textField.value;
    if (text1 === "") {
      return;
    }

    let msg1 = { name: "User", message: text1 }
    message0.push(msg1);
    try {
      //const msg = await fetchMsg(text1);
      const msg = {answer : 'Hi ! I am Chatbot here🍟🍔'};
      let msg2 = { name: "Sam", message: msg.answer };
      message0.push(msg2);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      updateChatText();
      textField.value = '';
    }
  }

  const updateChatText = () => {
    var html = '';
    message0.slice().reverse().forEach(function (item, index) {
      if (item.name === "Sam") {
        html += '<div class=' + `${classes.messages__item__visitor}` + ' >' + item.message + '</div>';
      }
      else {
        html += '<div class=' + `${classes.messages__item__operator}` + ' >' + item.message + '</div>';
      }
    });
    const chatmessage = document.querySelector(`.${classes.chatbox__support}`).querySelector(`.${classes.chatbox__message}`);
    chatmessage.innerHTML = html;
  }

  /* useEffect(() => {
    const chatbox = new Chatbox1();
    chatbox.display();
  }, []); */

  return (
    <div className={classes.chatbox}>
      <div className={`${classes.chatbox__support}`}>
        <div className={classes.chatbox__header}>
          <div className={classes.chatbox__image__header}>
            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
          </div>
          <div className={classes.chatbox__content__header}>
            <h4 className={classes.chatbox__heading__header}>Chat support</h4>
            <p className={classes.chatbox__description__header}>Hi. My name is Sam. How can I help you?</p>
          </div>
        </div>
        <div className={classes.chatbox__message}>
          <div></div>
        </div>
        <div className={classes.chatbox__footer}>
          <input type="text" placeholder="Write a message..."
            onKeyUp={({ key }) => {
              if (key === "Enter") {
                onSendButton();
              }
            }} />
          <button className={`${classes.chatbox__send__footer} ${classes.send__button}`} onClick={onSendButton}>Send</button>
        </div>
      </div>
      <div className={classes.chatbox__button} onClick={toggleState}>
        <button><img src={svg} /></button>
      </div>
    </div>
  )
}

export default ChatBot;
/* 


class Chatbox1 {
  constructor() {
    this.args = {
      openButton: document.querySelector('.chatbox__button'),
      chatBox: document.querySelector('.chatbox__support'),
      sendButton: document.querySelector('.send__button')
    }

  }

  display() {
    const { openButton, chatBox, sendButton } = this.args;
  }


  onSendButton(chatbox) {
    var textField = chatbox.querySelector('input');
    let text1 = textField.value
    if (text1 === "") {
      return;
    }

    let msg1 = { name: "User", message: text1 }
    this.messages.push(msg1);

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: JSON.stringify({ message: text1 }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(r => r.json())
      .then(r => {
        let msg2 = { name: "Sam", message: r.answer };
        this.messages.push(msg2);
        this.updateChatText(chatbox)
        textField.value = ''

      }).catch((error) => {
        console.error('Error:', error);
        this.updateChatText(chatbox)
        textField.value = ''
      });
  }

}
 */