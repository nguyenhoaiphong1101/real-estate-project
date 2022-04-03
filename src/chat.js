import React from "react";

function Chat() {
  return (
    <div>
      <div className="text-center">
        <h1>Chatbot Integration</h1>
      </div>
      <df-messenger
        intent="WELCOME"
        chat-title="Auto Smart Bot"
        agent-id="2bf67365-63ed-41d5-baba-281029162464"
        language-code="vi"
        chat-icon="https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png"
      ></df-messenger>
    </div>
  );
}

export default Chat;
