import { useState } from 'react'
import { Collapse, Paper, Typography } from '@mui/material'
import InputAddCard from './InputAddCard'

function AddCard() {
    const [open] = useState(false)
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
