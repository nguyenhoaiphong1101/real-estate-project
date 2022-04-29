import React, {useState, useEffect, useRef } from "react";
import "./chat.scss";

function Chat() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [count, setCount] = useState(0);
  const mesRef = useRef(null);
  let dfMessenger;
  const returnUser = () => {
    if (user !== null) {
      return user;
    } else {
      return -1;
    }
  };
  useEffect(() => {
    setCount(-1);
  })

  useEffect(() => {
    dfMessenger = mesRef.current;
    dfMessenger.addEventListener('df-response-received', function (event) {
        setCount(-1);
      setTimeout(
        () => {
          const cards = dfMessenger.shadowRoot?.querySelector('.df-messenger-wrapper')
          ?.querySelector('df-messenger-chat')?.shadowRoot
          ?.querySelector('df-message-list')?.shadowRoot
          ?.querySelector('.message-list-wrapper')?.querySelector('#messageList')
          ?.querySelectorAll('df-card');
        if (cards === undefined && count < 10){
            console.log("plus");
            setCount(count +1);
        }
        if (cards !== undefined) {
          cards.forEach(card => {
              const tempImage = card?.shadowRoot?.querySelectorAll('df-list-element');
              if (tempImage !== undefined) {
                tempImage.forEach(element => {
                    const temp = element?.shadowRoot?.querySelector('.title-card-elements')?.querySelector('.image');
                    temp.style.maxHeight = "100%";
                    temp.style.maxWidth = "100%";
                    temp.style.paddingRight = "70px";
                    temp.style.marginRight = "10px";
                });
              }
          });
        }   
        },
        100
      );
       
  });

  }, [count])
  
  return (
    <div>
      <div className="test">
        test
      </div>
      <df-messenger
        intent="WELCOME"
        chat-title="Auto Smart Bot"
        agent-id="2bf67365-63ed-41d5-baba-281029162464"
        language-code="vi"
        user-id={returnUser()}
        chat-icon="https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png"
        ref={mesRef}
      ></df-messenger>
    </div>
  );
}

export default Chat;
