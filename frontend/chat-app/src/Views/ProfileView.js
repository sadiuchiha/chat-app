import React from "react";

export default function ProfileView() {
  return (
    <div className="center">
      <div className="edit row">
        <div className="propic-container medium">
          <img
            src="/frontend/chat-app/src/res/defaultpropic.jpg"
            alt="Profile Pic"
          ></img>
        </div>
        <button className="edit-btn">
          <i class="fa fa-edit"></i>
        </button>
      </div>

      <div className="edit row">
        <label>Name</label>

        <input type="text" value="Marcus Daviona"></input>
        <button className="edit-btn">
          <i class="fa fa-edit"></i>
        </button>
      </div>
      <div class="line"></div>

      <div className="edit row">
        <label>Email</label>
        <input type="text" value="marcus@gmailz.com"></input>
        <button className="edit-btn">
          <i class="fa fa-edit"></i>
        </button>
      </div>
      <div class="line"></div>

      <div className="edit row">
        <label>Password</label>
        <input type="password" value="password123" className="password-input"></input>
        <button className="edit-btn">
          <i class="fa fa-edit"></i>
        </button>
      </div>
      <div class="line"></div>
    </div>
  );
}
