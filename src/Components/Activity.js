import React from "react";
import styles from "./Activity.module.css";

function Activity() {
  return (
    <div className={styles.flex_container}>
      <img
        className={styles.circular_photo}
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="react"
      />
      <div className="flex_container_text">
        <div>Mike completed Coding Challenge</div>
        <div>Wednesday, May 8 2024, 18:52</div>
      </div>
    </div>
  );
}

export default Activity;
