import React from "react";
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <img src='/portrait.png' alt="This is a picture of me" className={styles.portrait} />
      <span className={styles.text_typing_primary}>Rees<br />LaBree</span>
    </div>
  );
};
export default Profile;
