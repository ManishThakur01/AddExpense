import React, { useState } from 'react';

import Card from '../Card';
import classes from './Tracker.module.css';

const Tracker = (props) => {

let data = [];
const [balance, setBalance] = useState('');
const [enteredValue, setValue] = useState('');
const [error, setError] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

const valueHandler = event => {
    console.log(data);
    setValue(+event.target.value);
}

const addHandler = () => {
   
    if(validation(enteredValue)){
       return;
    }
    setBalance((prevBalance) => {
        return +(prevBalance + enteredValue);
    });
    var today = new Date();
    today = today.toISOString();
    setError(false);
    data.push({
        value : enteredValue,
        button : 'Add',
        time : today
    });

    props.onData(data);
    setValue('');
}
const validation = (numb) => {
    if(numb == "") {
        setError(true);
        setErrorMessage("Please enter amount");
        return true;
    }else if(numb <= 0) {
        setError(true);
        setErrorMessage("Please enter valid amount");
        return true;
    }
}
const removeHandler = () => {

    if(validation(enteredValue)){
        return;
     }

    setBalance((prevBalance) => {
        return +(prevBalance - enteredValue);
    });

    

    var today = new Date();
    today = today.toISOString()
    setError(false);
    data.push({
        value : enteredValue,
        button : 'Remove',
        time : today
    });
    props.onData(data);
    setValue('');
}

  return (
    <div className={classes.tracker}>
        <div className="innerSection">
            <h2>Balance : {balance}</h2>
            <input type="number" onChange={valueHandler} value={enteredValue}/>
            <div>
                <button className="button" type="button" onClick={addHandler}>Add</button>
                <button className="button"  type="button" onClick={removeHandler}>Remove</button>
            </div>
            {error && <h2 className="error">{errorMessage}</h2>}
        </div>
    </div>
  );
}

export default Tracker;