import React from "react";
import "./style/Profile.css";
import Portrait from "../media/portrait.png";

const Profile = () => {
  return (
    <div className="container">
      <img src={Portrait} alt="This is a picture of me" className="portrait" />
      <span className="text-typing-primary">Rees<br />LaBree</span>
    </div>
  );
};
export default Profile;
