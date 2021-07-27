import React from 'react';
import Card from '../Card';
import classes from './DisplayData.module.css';

const DisplayData = props => {
    console.log(props);
    let dd = props.onData.time +"-"+ props.onData.value +"-"+ props.onData.type;
    return (
        <Card className={classes.dd}>
            <div className="innerSection">
                <h2>Transactions:</h2>
            <ul>
                {props.onData.map((expenses) => (
                    <li className={classes.displayList}>{expenses.time  +" - "+ expenses.data +" - "+ expenses.button}</li>
                ))}
            </ul>
            </div>
        </Card>
    )
}

export default DisplayData;