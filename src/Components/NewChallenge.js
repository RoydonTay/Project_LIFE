import React from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import styles from "./NewChallenge.module.css";

function NewChallenge() {
  return (
    <div className={styles.outer}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.box}
        sx={{ borderRadius: 2 }}
      >
        <div>
          <h2>What is your challenge name?</h2>
          <TextField required id="outlined-required" label="Challenge name" />
        </div>
        <div>
          <h2>Duration of challenge(Days).</h2>
          <TextField label="Number" type="number" InputProps={{inputProps:{min: 0 }}} />
        </div>
        <div>
          <h2>Short description of your challenge.</h2>
          <TextField id="outlined-helperText" label="Description" />
        </div>
        <div className={styles.submission}>
          <Button variant="outlined" color="inherit" startIcon={<DeleteIcon />}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="action"
            endIcon={<InsertEmoticonIcon />}
          >
            Create
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default NewChallenge;
