import './App.css';
import Buttons from './components/buttons';
import { useState } from 'react';

function App() {
  // Use State for calculation
  const [calculateScreen, setCalculateScreen] = useState('');

  // Use State for Result
  const [resultScreen, setResultScreen] = useState('');

  // Onclick function to display number buttons on screen
  const buttonClicked = (e) => {
    setCalculateScreen(calculateScreen.concat(e.target.name))
    console.log(calculateScreen);
  }

  // Clear Screen
  const allClear = () => {
    setCalculateScreen('')
    setResultScreen('')
  }

  // Delete last number
  const toDelete = () => {
    setCalculateScreen(calculateScreen.slice(0, calculateScreen.length - 1))
    console.log(calculateScreen.length);
  }

  // Display Result after Calculation, or show error (with error message) when there is syntax error
  const showResult = () => {
    try{
      //Runs this code when no error 
      setResultScreen(eval(calculateScreen));
  } catch(err) {
    //Runs this code when there an error
          console.log(err.message);
          setResultScreen(<p style={{color:'red', fontSize: 12}}>Syntax error: {err.message}</p>)
  }
  }
  return (
    <div className="App">
      <Buttons showResult = {showResult} resultScreen = {resultScreen} buttonClicked = {buttonClicked} calculateScreen = {calculateScreen} allClear = {allClear} toDelete = {toDelete} />
    </div>
  );
}

export default App;
