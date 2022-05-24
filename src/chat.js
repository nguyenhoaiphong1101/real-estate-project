import React, { useState, useEffect, useRef } from "react";
import "./constants/Images"
import Images from "./constants/Images";

function Chat() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [count, setCount] = useState(0);
  const mesRef = useRef(null);
  let dfMessenger;
  useEffect(() => {
    setCount(-1);
  });
  useEffect(() => {
    dfMessenger = mesRef.current;
    dfMessenger.addEventListener("df-user-input-entered", function (event) {
      if (localStorage.getItem("user") !== null && localStorage.getItem("user") !== undefined){
        setUser(localStorage.getItem("user"));
      }else{
        setUser(-1);
      }
    });
  });

  useEffect(() => {
    dfMessenger = mesRef.current;
    dfMessenger.addEventListener("df-response-received", function (event) {
      setCount(-1);
      setTimeout(() => {
        const cards = dfMessenger.shadowRoot
          ?.querySelector(".df-messenger-wrapper")
          ?.querySelector("df-messenger-chat")
          ?.shadowRoot?.querySelector("df-message-list")
          ?.shadowRoot?.querySelector(".message-list-wrapper")
          ?.querySelector("#messageList")
          ?.querySelectorAll("df-card");
        if (cards === undefined && count < 10) {
          setCount(count + 1);
        }
        if (cards !== undefined) {
          cards.forEach((card) => {
            card.style.width = "85%"
            const tempImage =
              card?.shadowRoot?.querySelectorAll("df-title");
            if (tempImage !== undefined) {
              tempImage.forEach((element) => {
                const itemWrap = element?.shadowRoot
                  ?.querySelector(".title-card-elements");
                const img = itemWrap?.querySelector(".image");
                const title = itemWrap?.querySelector(".title");
                const subtitle = itemWrap?.querySelector(".subtitle");
                itemWrap.style.padding = "10px";
                img.style.maxHeight = "100%";
                img.style.maxWidth = "100%";
                img.style.paddingRight = "70px";
                img.style.marginRight = "10px";
                img.style.backgroundPosition = "center";
                img.style.backgroundSize = "cover";
                title.style.fontSize = "11px";
                title.style.fontWeight = "600";
                subtitle.style.paddingTop = "0px";
                subtitle.style.marginBottom = "-6px";
                subtitle.style.fontSize = "10px";
              });
            }
          });
        }
      }, 100);
    });
  }, [count]);

  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="Messenger"
        agent-id="2bf67365-63ed-41d5-baba-281029162464"
        language-code="vi"
        user-id={user}
        chat-icon= {Images.LOGO_BOT}
        ref={mesRef}
      ></df-messenger>
    </div>
  );
}

export default Chat;
