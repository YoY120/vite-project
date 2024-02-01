import React, { Children, useEffect, useState } from 'react';
import './calcul.css'

/*
** Типы знаков 
*/
type ZnackType = '+' | '-' | '*' | '/' | '';

export const Calcul = () => {

  /*
  ** Первое число
  */
  const [numberValues, setNumberValues] = useState<number | null>(null);

  /*
  ** Второе число
  */
  const [numberValues2, setNumberValues2] = useState<number | null>(null);

  /*
  ** Резельтат
  */
  const [result, setResult] = useState<number | null>(null);

  /*
  ** Знаки
  */
  const [znack, setZnack] = useState<ZnackType | null>(null);

  console.table({
    numberValues,
    numberValues2,
    znack,
  })

  /*
  ** Расчет результата
  */
  function handleEqualsClick() {
    if (numberValues !== null && numberValues2 !== null && znack !== null) {
      switch (znack) {
        case ('+'): {
          setResult(numberValues + numberValues2);
          break
        }
        case ('-'): {
          setResult(numberValues - numberValues2);
          break;
        }
        case ('/'): {
          setResult(numberValues / numberValues2);
          break;
        }
        case ('*'): {
          setResult(numberValues * numberValues2);
          break;
        }
      }
    }
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
  function handlePlusClick() {
    setZnack('+')
  }

  /*
  **Знак -
  */
  function handleMinusClick() {
    setZnack('-')
  }

  /*
  **Знак /
  */
  function handleDivisionClick() {
    setZnack('/')
  }

  /*
  ** Знак *
  */
  function handleMultiplicationClick() {
    setZnack('+')
  }

  /*
  ** Ввод значений для numberValues and namberValues2
  */
  // Тут используем каррирование
  const handleNumberClick = (value: number) => () =>  {
    // TODO: переработать на правильную перезапись значения (было записано 1, нажали 5, должно получится 15)
    // 1 * 10 + 5 = 15
    //setNumberValues(numberValues * 10 + value)
    if(!znack) {
      setNumberValues((numberValues || 0) * 10 + value)
    } else {
      setNumberValues2((numberValues2 || 0) * 10 + value)
    }
  }

  // const factorial = (value: number): number => {
  //   if (value <= 1) {
  //     return 1
  //   }

  //   return value * factorial(value - 1);
  // }

  // useEffect(() => {
  //   console.log('factorial(100), ', factorial(1))
  // }, [])


  // function Button(child, onClick) {
  //   return <button className="sigsButton" onClick={handleNumberClick}>{child}</button>
  // }

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
            <button className="sigsButton withStyle" onClick={handleDivisionClick}>÷</button>
            <button className="sigsButton withStyleOrange" onClick={handleEqualsClick}>=</button>
          </div>
          {/* <!--0, AC, +--> */}
          <div className="sigs">
            <button className="sigsButton" onClick={handleNumberClick(1)}>1</button>
            <button className="sigsButton" onClick={handleNumberClick(2)}>2</button>
            <button className="sigsButton" onClick={handleNumberClick(3)}>3</button>
            <button className="sigsButton withStyle" onClick={handlePlusClick}>+</button>
          </div>
          {/* <!--1, 2, 3, /--> */}
          <div className="sigs">
            <button className="sigsButton" onClick={handleNumberClick(4)}>4</button>
            <button className="sigsButton" onClick={handleNumberClick(5)}>5</button>
            <button className="sigsButton" onClick={handleNumberClick(6)}>6</button>
            <button className="sigsButton withStyle" onClick={handleMinusClick}>-</button>
          </div>
          {/* <!--4, 5, 6, x--> */}
          <div className="sigs">
            <button className="sigsButton" onClick={handleNumberClick(7)}>7</button>
            <button className="sigsButton" onClick={handleNumberClick(8)}>8</button>
            <button className="sigsButton" onClick={handleNumberClick(9)}>9</button>
            <button className="sigsButton withStyle" onClick={handleMultiplicationClick}>x</button>
          </div>
        </div>
      </div>
    </div>
  )

}