import React, {useState} from "react";

function Chat() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const returnUser = () => {
    if (user !== null) {
      return user;
    } else {
      return -1;
    }
  };

  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="Auto Smart Bot"
        agent-id="2bf67365-63ed-41d5-baba-281029162464"
        language-code="vi"
        user-id={returnUser()}
        chat-icon="https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png"
      ></df-messenger>
    </div>
  );
}

export default Chat;
