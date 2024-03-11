import React, { useState } from 'react';
import './myCalculate.css'

// type TaskType = {
//   namber1: string;
//   namber2: string;
// }

type ZnackType = '+' | '-' | '*' | '/';

export const MyCalculate = () => {

  const [numberValues, setNumberValues] = useState<number | null>(null);
  const [numberValues2, setNumberValues2] = useState<number | null>(null);
  const [znack, setZnack] = useState<ZnackType | null>(null);
  const [result, setResult] = useState<number | null>(null);

  const isBlockEquels = numberValues === null || numberValues2 === null || znack === null;

  function handlePlusClick() {
    setZnack('+')
  } 

  function handleMinusClick() {
    setZnack('-')
  }

  function handledivisionClick() {
    setZnack('/')
  }

  function handlemultiplicationClick() {
    setZnack('*')
  }

  function handlResultEqualsClick() {
    if(!isBlockEquels) {
      switch (znack) {
        case ('+'): {
          return setResult(numberValues + numberValues2);
        }
        case ('-'): {
          return setResult(numberValues - numberValues2);
        }
        case ('/'): {
          return setResult(numberValues / numberValues2);
        }
        case ('*'): {
          return setResult(numberValues * numberValues2);
        }
      }
    } else {
      console.log('error')
    }
    
  }


  return (
    <div className="calculator">
      <div className="wrapper box">
        <input type="number" value={numberValues === null ? '' : numberValues} onChange={e => setNumberValues(Number(e.target.value))}/>
        <div className="operation">
          <button onClick={handlePlusClick}>+</button>
          <button onClick={handleMinusClick}>-</button>+
          <button onClick={handledivisionClick}>÷</button>
          <button onClick={handlemultiplicationClick}>X</button>
        </div>
        <input type="number" value={numberValues2 === null ? '' : numberValues2} onChange={e => setNumberValues2(Number(e.target.value))}/>
        <button disabled={isBlockEquels} onClick={handlResultEqualsClick}>=</button> 
        <p className="result">{result}</p> 
      </div>
    </div>
  )
}
