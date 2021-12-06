import React from "react";
import Select from "react-select";
import GlobalSvgSelector from "../../../assets/images/icons/global/GlobalSvgSelector";
import styles from "./Header.module.scss";

interface Props {}
function Header(props: Props) {
  const options = [
    { value: "spb", label: "Санкт-Петербург" },
    { value: "msk", label: "Москва" },
    { value: "vld", label: "Владивосток" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={styles.title}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select defaultValue={options[0]} styles={colourStyles} options={options} />
      </div>
    </header>
  );
}

export default Header;
