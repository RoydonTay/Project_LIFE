import React from "react";
import Button from "@mui/material/Button";
import { TiAdjustBrightness } from "react-icons/ti";
import styles from "./Task.module.css";

function Task() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.head}>
            <TiAdjustBrightness
              size={70}
              style={{ color: "white", backgroundColor: "pink", top: 0 }}
            />
            <p>Reading challenge</p>
          </div>
          <h1>Ends in 4 Day(s)</h1>
          <hr />
          <Button variant="contained" color="success">
            Complete
          </Button>
        </div>

        <div className={styles.box}>
          <p>Reading challenge</p>
          <h1>Ends in 4 Day(s)</h1>
          <hr />
          <Button variant="contained" color="success">
            Complete
          </Button>
        </div>
      </div>
    </>
  );
}

export default Task;
