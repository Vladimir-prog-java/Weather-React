import React from "react";
import GlobalSvgSelector from "../../../../assets/images/icons/global/GlobalSvgSelector";
import { Day } from "./Days";
import styles from "./Days.module.scss";

interface Props {
  day: Day;
}

function Card({ day }: Props) {
  // const { day_info, icon_id, temp_day, temp_night, info } = day;
  return (
    // <div className={styles.card}>
    //   <div className={styles.day}>{day}</div>
    //   <div className={styles.day_info}>{day_info}</div>
    //   <div className={styles.img}>
    //     <GlobalSvgSelector id={icon_id} />
    //   </div>
    //   <div className={styles.temp_day}>{temp_day}</div>
    //   <div className={styles.temp_night}>{temp_night}</div>
    //   <div className={styles.info}>{info}</div>
    // </div>
    <div className={styles.card}>
    <div className={styles.day}>{day.day}</div>
    <div className={styles.day_info}>{day.day_info}</div>
    <div className={styles.img}>
      <GlobalSvgSelector id={day.icon_id} />
    </div>
    <div className={styles.temp_day}>{day.temp_day}</div>
    <div className={styles.temp_night}>{day.temp_day}</div>
    <div className={styles.info}>{day.info}</div>
  </div>
  );
}

export default Card;
