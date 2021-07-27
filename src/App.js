import React, {useState} from 'react';
import Tracker from './Components/Tracker';
import DisplayData from './Components/DispayData';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);
  
  const RecieveData = (dataValue) => {
    console.log(dataValue);
    setUserData((prevData) => {
      return [
        ...prevData,
        {data : dataValue[0].value, button : dataValue[0].button, time : dataValue[0].time},
      ];
    });
  }
  return (
    <div className="App">
      <h2>Expense Tracker - Basic</h2>
      <Tracker onData={RecieveData}/>
      <DisplayData onData={userData}/>
    </div>
  );
}

export default App;
