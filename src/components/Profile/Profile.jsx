import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.general}>
      <div className={styles.image}>
        <img
          src={require("../../img/ui/user-avatar.svg").default}
          alt="profile-ico"
        />
      </div>
      <div className={styles.button}>
        <img
          src={require("../../img/ui/open-menu.svg").default}
          alt="arrow-down"
        />
      </div>
    </div>
  );
};

export default Profile;