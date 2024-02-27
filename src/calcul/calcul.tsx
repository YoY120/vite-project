import React, { Children, useEffect, useState } from 'react';
import './calcul.css'

/*
** Типы знаков 
*/
type ZnackType = '+' | '-' | '*' | '/' | '(' | ')';

type Symbol = {
  znackType?: ZnackType | null,
  numberValue?: number | null,
};

type CalcItem = ZnackType | number | null;

const ttt: CalcItem[] = [12, '+', 16, '-', 22]

const item = ttt[0]

const isNumber = typeof ttt[0] === 'number'

export const Calcul = () => {
  const [arr, setArr] = useState<CalcItem[]>([]);
  const [result, setResult] = useState<number | null>(null);

  /*
  ** Расчет результата
  */
  function handleEqualsClick() {
    return
    // if (numberValues !== null && numberValues2 !== null && znack !== null) {
    //   switch (znack) {
    //     case ('+'): {
    //       setResult(numberValues + numberValues2);
    //       break
    //     }
    //     case ('-'): {
    //       setResult(numberValues - numberValues2);
    //       break;
    //     }
    //     case ('/'): {
    //       setResult(numberValues / numberValues2);
    //       break;
    //     }
    //     case ('*'): {
    //       setResult(numberValues * numberValues2);
    //       break;
    //     }
    //   }
    // }
    
    }
  
  /*
  ** Обнуление значений
  */
  function handleAczeroClick() {
    setNumberValues(null);
    setNumberValues2(null);
    setZnack(null);
    setResult(null);
  }

  /*
  ** Знак +
  */
  // function handlePlusClick() {
  //   // setZnack('+')
  //   setArr([...arr, {id: id++, ZnackType: '+'}])
  // }

  /*
  **Знак -
  */
  // function handleMinusClick() {
  //   // setZnack('-')
  //   setArr([...arr, {id: id++, ZnackType: '-'}])
  // }

  /*
  **Знак /
  */
  // function handleDivisionClick() {
  //   // setZnack('/')
  //   setArr([...arr, {id: id++, ZnackType: '/'}])
  // }

  /*
  ** Знак *
  */
  // function handleMultiplicationClick() {
  //   // setZnack('*')
  //   setArr([...arr, {id: id++, ZnackType: '*'}])
  // }

  /*
  ** Ввод значений для numberValues and namberValues2
  */
  // Тут используем каррирование
  // const handleNumberClick = (value: number) => () => {
  //   if(!znack) {
  //     setNumberValues((numberValues || 0) * 10 + value)
  //   } else {
  //     setNumberValues((numberValues2 || 0) * 10 + value)
  //   }
  // }

  /**
   * Ввод значений
   */
  const handleNumberClick = (value: CalcItem) => () => {
    // в рамках идеи
    // Если последний элемент массива ZnackType, то добавляем дополнительный элемент и записываем туда value number
    // Если последний элемент массива number, то мы дополняем этот элемент prevValue * 10 + value
    if(value === null) {
      return null;
    }

    if (typeof value === 'number') {
      const lastIndex = arr.length - 1;

      if(typeof arr[lastIndex] === 'number') {
        if(typeof arr[lastIndex] === 'number') {
          arr[lastIndex] = Number(arr[lastIndex]) * 10 + value;
              
          setArr(arr);

          return null;
        } 

        setArr([...arr, value])
        return null;
      }
      return null;
    }  
      
    setArr([...arr, value])
    return null;
  };


  // const factorial = (value: number): number => {
  //   if (value <= 1) {
  //     return 1
  //   }

  //   return value * factorial(value - 1);
  // }

  // useEffect(() => {
  //   console.log('factorial(100), ', factorial(1))
  // }, [])

  return (
    // <!--Форма-->
    <div className="calculator">
      {/* <!--Просто wrapper--> */}
      <div className="wrapper subsequence">
        <div className="head">КАЛЬКУЛЯТОР</div>
        {/* <!--Ввод цифр и ответ--> */}
        <p className="valuesStule">{numberValues}{` ${znack !== null ? znack : ''} `}{numberValues2}{result !== null ? ` = ${parseFloat(result.toFixed(5))}` : ''}</p>
        {/* <!--Поле цифр --> */}
        <div className="numbers">
          {/* <!--Знаки равно--> */}
          <div className="sigs">
            <button className="sigsButton withStyle" onClick={handleAczeroClick}>AC</button>
            <button className="sigsButton" onClick={handleNumberClick(0)}>0</button>
            {/* <button className="sigsButton withStyle" onClick={handleDivisionClick}>÷</button> */}
            <button className="sigsButton withStyle" onClick={handleNumberClick('/')}>÷</button>
            <button className="sigsButton withStyleOrange" onClick={handleEqualsClick}>=</button>
          </div>
          {/* <!--0, AC, +--> */}
          <div className="sigs">
            <button className="sigsButton" onClick={handleNumberClick(1)}>1</button>
            <button className="sigsButton" onClick={handleNumberClick(2)}>2</button>
            <button className="sigsButton" onClick={handleNumberClick(3)}>3</button>
            {/* <button className="sigsButton withStyle" onClick={handlePlusClick}>+</button> */}
            <button className="sigsButton withStyle" onClick={handleNumberClick('+')}>+</button>
          </div>
          {/* <!--1, 2, 3, /--> */}
          <div className="sigs">
            <button className="sigsButton" onClick={handleNumberClick(4)}>4</button>
            <button className="sigsButton" onClick={handleNumberClick(5)}>5</button>
            <button className="sigsButton" onClick={handleNumberClick(6)}>6</button>
            {/* <button className="sigsButton withStyle" onClick={handleMinusClick}>-</button> */}
            <button className="sigsButton withStyle" onClick={handleNumberClick('-')}>-</button>
          </div>
          {/* <!--4, 5, 6, x--> */}
          <div className="sigs">
            <button className="sigsButton" onClick={handleNumberClick(7)}>7</button>
            <button className="sigsButton" onClick={handleNumberClick(8)}>8</button>
            <button className="sigsButton" onClick={handleNumberClick(9)}>9</button>
            {/* <button className="sigsButton withStyle" onClick={handleMultiplicationClick}>x</button> */}
            <button className="sigsButton withStyle" onClick={handleNumberClick('*')}>x</button>
          </div>
          {/* <div className="sigs">
            <button className="sigsButton" onClick={handleBrackedClick}>7</button>
            <button className="sigsButton" onClick={handleBrackedClick}>8</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
