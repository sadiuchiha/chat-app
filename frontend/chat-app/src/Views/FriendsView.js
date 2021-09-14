import React from "react";

export default function FriendsView() {
  return (
    <div className="row center">
            
      <div className="friends-box">
        <h2>Added Friends</h2>
        <div className="friends-list-holder">
          
          <div className="friend">
            <div className="propic-container-small">
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
          <div className="friend">
            <div className="propic-container-small">
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
          <div className="friend">
            <div className="propic-container-small">
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
          <div className="friend">
            <div className="propic-container-small">
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
        </div>
        
        <div className="friend-buttons">
          <button className="friend-button">Remove</button>
          <button className="friend-button">Send Message</button>
        </div>
      </div>
      <div className="friends-box">
        <h2>Find Friends</h2>
        <div className="friends-list-holder">

          <div className="friend">
            <div className="propic-container-small">
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
          <div className="friend">
            <div className="propic-container-small">
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
          <div className="friend">
            <div className="propic-container-small">
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
          <div className="friend">
            <div className="propic-container-small">
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
        </div>
        
        <div className="friend-buttons">
          <button className="friend-button find-friend-button">Add</button>
          <button className="friend-button find-friend-button">Search</button>
          <input type="text"></input>  
        </div>
      </div>
    </div>
  );
}
