import React, { useState } from "react";
import styles from "./Profile.module.css";

const Profile = () => {

  //Состояние требуется только по месту, поэтому не вынесено в глобальный стор
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toogleProfileMenu = () => {
    if(isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  }

  return (
    <div className={styles.general}>
      <div className={styles.avatar} onClick={toogleProfileMenu}>
        <div className={styles.image}>
          <img
            src={require("../../img/ui/user-avatar.svg").default}
            alt="profile-ico"
          />
        </div>
        {isMenuActive ? (
          <div className={styles.button}>
            <img
              src={require("../../img/ui/open-menu.svg").default}
              alt="arrow-down"
            />
          </div>
        ) : (
          <div className={styles.button}>
            <img
              src={require("../../img/ui/close-menu.svg").default}
              alt="arrow-down"
            />
          </div>
        )}
      </div>
      <div className={styles.menu}>
        <div className={styles.cube}>
          <img
            src={require("../../img/ui/cube.svg").default}
            alt="cube"
          />
        </div>
        {isMenuActive ? (
          <ul className={styles.menuItems}>
            {/* Ссылки, чтобы реакт не ругался */}
            <li><a href="localhost:3000/profile">Profile</a></li>
            <li><a href="localhost:3000/logout">Log Out</a></li>
          </ul>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Profile;