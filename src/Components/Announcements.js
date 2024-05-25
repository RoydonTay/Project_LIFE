import React from "react";
import styles from "./Announcements.module.css";
import Activity from "./Activity";

function Announcements() {
  return (
    <div className={styles.table}>
      <Activity />
      <Activity />
    </div>
  );
}

export default Announcements;
