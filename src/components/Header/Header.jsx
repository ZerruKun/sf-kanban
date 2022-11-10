import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Profile from "../Profile/Profile";

const Header = () => {
  return (
    <div className={styles.general}>
      <Logo />
      {/* На 480px в инструментах разработчика лисы появляется горизонтальная 
      полоса прокрутки. В хроме и на реальном устройстве этого нет. Если убрать
      Компонент профиль, то поласа пропадает. С чем это связано понять не удалось*/}
      <Profile />
    </div>
  );
};

export default Header;