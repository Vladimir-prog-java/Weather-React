import React from "react";
import GlobalSvgSelector from "../../../../assets/images/icons/global/GlobalSvgSelector";
import styles from "./ThisDay.module.scss";

interface Props {}

function ThisDay(props: Props) {
  return (
    <div className={styles.this_day}>
      <div className={styles.top_block}>
        <div className={styles.top_block_wrapper}>
          <div className={styles.this_temp}>20°</div>
          <div className={styles.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="sun" />
      </div>
      <div className={styles.bottom_block}>
        <div className={styles.this_time}>
          Время: <span>21:54</span>
        </div>
        <div className={styles.this_city}>
          <span>Санкт-Петербург</span>
        </div>
      </div>
    </div>
  );
}

export default ThisDay;
