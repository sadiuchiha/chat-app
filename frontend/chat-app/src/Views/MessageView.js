import React from "react";

export default function MessageView() {
  return (
    <div className="row">
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
      <h2>Name</h2>

      <div className="messages-container">
        {message("sender")}
        {message("receiver")}
        {message("sender")}
        {message("sender")}
        {message("receiver")}
        {message("receiver")}
        {message("sender")}
        {message("receiver")}
        {message("sender")}
        {message("sender")}
        {message("receiver")}
        {message("receiver")}
      </div>

      <div className="message-lower-panel">
        <textarea></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

var message = (type) => {
  return type === "sender" ? (
    <div className="sender-message">
      <p>Time</p>

      <div className="message-container sender">
        <p>This is a sender message</p>
      </div>
      <div className="arc-container s">
        <div className="arc s"></div>
      </div>
    </div>
  ) : (
    <div className="receiver-message">
      <div className="arc-container r">
        <div className="arc r"></div>
      </div>
      <div className="message-container receiver">
        <p>This is a receiver messageasfasfasfasfasfsdsdgasfhafhadfhdafhafdh</p>
      </div>
      <p>Time</p>
    </div>
  );
};
