import React from "react";

export default function MessageView() {
  return (
    <div className="messagebox row center">
      {sidePanel()}
      {messagePanel()}
    </div>
  );
}

var sidePanel = () => {
  return (
    <div className="sidepanel">
      <div className="friends-box-v2">
        <h2>Friends</h2>
        <div className="friends-list-holder-v2">
          <div className="friend">
            <div className="propic-container small">
              <img
                src="/frontend/chat-app/src/res/defaultpropic.jpg"
                alt="Profile Pic"
              ></img>
            </div>

            <div className="user-info">
              <h3>John</h3>
              <h4>Status</h4>
            </div>
          </div>
          <div class="line-v2"></div>

          <div className="friend">
            <div className="propic-container small">
              <img
                src="/frontend/chat-app/src/res/defaultpropic.jpg"
                alt="Profile Pic"
              ></img>
            </div>

            <div className="user-info">
              <h3>Dermy</h3>
              <h4>Status</h4>
            </div>
          </div>
          <div class="line-v2"></div>

          <div className="friend">
            <div className="propic-container small">
              <img
                src="/frontend/chat-app/src/res/defaultpropic.jpg"
                alt="Profile Pic"
              ></img>
            </div>

            <div className="user-info">
              <h3>Cass</h3>
              <h4>Status</h4>
            </div>
          </div>
          <div class="line-v2"></div>

          <div className="friend">
            <div className="propic-container small">
              <img
                src="/frontend/chat-app/src/res/defaultpropic.jpg"
                alt="Profile Pic"
              ></img>
            </div>

            <div className="user-info">
              <h3>Tom</h3>
              <h4>Status</h4>
            </div>
          </div>
          <div class="line-v2"></div>
        </div>
      </div>
    </div>
  );
};

var messagePanel = () => {
  return (
    <div className="messenger-container">
      <div className="messages-container"></div>
      <div className="message-lower-panel">
        <textarea className="message-input"></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

var message = (type) => {
  return type === "sender" ? (
    <div className="sender-message">

    </div>
  ) : (
    <div className="reciever-message">
        
    </div>
  );
};
