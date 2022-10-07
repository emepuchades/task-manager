import React, { useState } from 'react'
import { Collapse, makeStyles, Paper, Typography } from '@mui/material';
import InputAddCard from './InputAddCard';

function AddCard() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Collapse in={open}>
        <InputAddCard />
      </Collapse>
      <Collapse in={!open}>
        <Paper>
          <Typography>Anade una card</Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

export default AddCard