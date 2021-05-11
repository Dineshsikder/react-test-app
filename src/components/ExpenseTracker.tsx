import { Button, TextField, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React, { useEffect, useState } from 'react';
import { useStyles } from '../styles/ExpenseTrackerStyle';


let data = [
    {
        "date": "2021-03-10T15:04:02.072Z",
        "amount": 100,
        "type": "Add"
    },
    {
        "date": "2021-03-10T15:04:04.748Z",
        "amount": 500,
        "type": "Add"
    },
    {
        "date": "2021-03-10T15:04:07.443Z",
        "amount": 50,
        "type": "Remove"
    }
]

const ExpenseTracker = () => {
    
    const classes = useStyles();
    const [balance, setBalance] = useState(0);
    const [qty, setQty] = useState(0);
    const [transactionList, setTransactionList] = useState(data);

    const handleChange = (event:any) => {
        setQty(Number(event.target.value));
     }

    const addExpenses = () => {
        setBalance(balance+qty);
        let data:any[] = transactionList;
        let _data = {
            "date": new Date(),
            "amount": qty,
            "type": "Add"
        }
        data.push(_data);
        setTransactionList(JSON.parse(JSON.stringify(data)));
     }

    const removeExpenses = () => {
        setBalance(balance-qty);
        let data:any[] = transactionList;
        let _data = {
            "date": new Date(),
            "amount": qty,
            "type": "Remove"
        }
        data.push(_data);
        setTransactionList(JSON.parse(JSON.stringify(data)));
     }

    useEffect(() => {
        let addBalance: number = 0;
        data.forEach((element: any) => {
            if(element.type === "Add") {
                addBalance += element.amount;
            } else if(element.type === "Remove") {
                addBalance -= element.amount;
            }
        })
        setBalance(addBalance);
	}, [])

    return (
        <Paper className={classes.paper} elevation={2}>
            <Typography className={classes.header}>Expense Tracker - Basic</Typography>
            <Paper className={classes.childPaper} variant="outlined" elevation={1}>
                <Typography className={classes.textFileLabel}>Balance: {balance}</Typography>
                <TextField
                    id="standard-number"
                    type="number"
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div>
                    <Button variant='outlined' className={classes.button} onClick={addExpenses}>Add</Button>
                    <Button variant='outlined' className={classes.button} onClick={removeExpenses}>Remove</Button>
                </div>
            </Paper>
            <Paper className={classes.childPaper} variant="outlined" elevation={1}>
                <Typography className={classes.text}>Transaction:</Typography>
                {
                    transactionList.map((res: any) => {
                        return (
                            <div className={classes.displayMap} >
                                <Typography className={classes.mapText}>{res?.date} -</Typography>
                                <Typography className={classes.mapText}>{res?.amount} -</Typography>
                                <Typography className={classes.mapText}>{res?.type}</Typography>
                            </div>
                        )
                    })
                }
            </Paper>
        </Paper>
    );
}

export default ExpenseTracker;
