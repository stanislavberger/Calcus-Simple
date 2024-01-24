import React, { useState } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

//create a React functional component
const App: React.FC = () => {
    //set input
  const [input, setInput] = useState<string>('');
  //set result
  const [result, setResult] = useState<number | string>(0);

    //OnClick arrow function
  const handleClick = (value: string | number) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(0);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '=', '+', 'C'].map((button, index) => (
          <Button className="btns-calc" variant="outline-light" size="lg" key={index} onClick={() => handleClick(button)}>{button}</Button>
          
        ))}
      </div>
    </div>
  );
};

export default App;