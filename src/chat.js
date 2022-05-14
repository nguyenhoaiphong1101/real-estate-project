import React, { useState, useEffect, useRef } from "react";
// import "./chat.scss";

function Chat() {
  const user = localStorage.getItem("user");
  const [count, setCount] = useState(0);
  const [countChips, setCountChips] = useState(0);
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
    setCountChips(-1);
  });

  useEffect(() => {
    dfMessenger = mesRef.current;
    dfMessenger.addEventListener("df-response-received", function (event) {
      setCount(-1);
      setCountChips(-1);
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

  useEffect(() => {
    dfMessenger = mesRef.current;
    dfMessenger.addEventListener("df-chip-clicked", function (event) {
      setCountChips(-1);
      setTimeout(() => {
        const chips = dfMessenger.shadowRoot
          ?.querySelector(".df-messenger-wrapper")
          ?.querySelector("df-messenger-chat")
          ?.shadowRoot?.querySelector("df-message-list")
          ?.shadowRoot?.querySelector(".message-list-wrapper")
          ?.querySelector("#messageList")
          ?.querySelectorAll("df-chips");
        if (chips === undefined && countChips < 10) {
          setCountChips(countChips + 1);
        }
        if (chips !== undefined) {
          chips.forEach((chip) => {
            const chipsWrapper = chip?.shadowRoot?.querySelectorAll(".df-chips-wrapper");
            if (chipsWrapper !== undefined) {
              chipsWrapper.forEach((element) => {
                element.style.color = "block";
              });
              }
            });
          }
      }, 100);
    });
  }, [countChips]);

  return (
    <div>
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
