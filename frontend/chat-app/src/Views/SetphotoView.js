import React from "react";

export default function SetphotoView() {
  return (
    <div className="center">
      <div className="set-photo center">
        <div className="propic-container medium">
          <img
            src="/frontend/chat-app/src/res/defaultpropic.jpg"
            alt="Profile Pic"
          ></img>
        </div>
        <label>Drag and drop photo</label>
        <label>Set up Profile Picture</label>
      <button>Complete Registration</button>
      </div>
    </div>
  );
}
