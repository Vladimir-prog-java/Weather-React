import React from "react";
import styles from "./Home.module.scss";
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";

interface Props {}

function Home(props: Props) {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
      <ThisDay />
      <ThisDayInfo/>
      </div>
    </div>
  );
}

export default Home;
