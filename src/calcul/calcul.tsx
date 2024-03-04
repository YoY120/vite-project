import React, { Children, useEffect, useState } from 'react';
import './calcul.css'
import classNames from 'classnames';

/*
** Типы знаков 
*/
type ZnackType = '+' | '-' | '*' | '/' | '(' | ')' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 ;

const ZnackTypeList: ZnackType[] = [
  1, 2, 3, '+',
  4, 5, 6, '-',
  7, 8, 9, '*',
  '(', 0, ')', '/',
]

// type Symbol = {
//   znackType?: ZnackType | null,
//   numberValue?: number | null,
// };

type CalcItem = ZnackType | number | null;

const CalcItemlist: CalcItem[] = [12, '+', 16, '-', 22]

const item = CalcItemlist[0]

const isNumber = typeof CalcItemlist[0] === 'number'

export const Calcul = () => {
  const [arr, setArr] = useState<CalcItem[]>([]);
  const [result, setResult] = useState<number | null>(null);

  /*
  ** Расчет результата
  */
  function handleEqualsClick() {
    return

    }
  
  /*
  ** Обнуление значений
  */
  function handleAczeroClick() {
    
  }

  console.table({arr})
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

    // setArr(CalcItemlist.map((index, value) => (
    //   (typeof arr[arr.length - 1] === 'number') ? setArr([Number(arr[arr.length - 1]) * 10 + value]) : setArr([...arr, value])
    // )))

    if (typeof value === 'number') {
      if(typeof arr[arr.length - 1] === 'number') {
        setArr([Number(arr[arr.length - 1]) * 10 + value])
        return null;
      }
    } 
    if (arr[0] !== null) {
      setArr([...arr, value])
      return null;
    }
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
      <div className="wrapper subsequence">
        <div className="head">КАЛЬКУЛЯТОР</div>
        {/* <p className="valuesStule">{numberValues}{` ${znack !== null ? znack : ''} `}{numberValues2}{result !== null ? ` = ${parseFloat(result.toFixed(5))}` : ''}</p> */}
        <p className="valuesStule">{arr}</p>
        <div className="sigs">
          <button className="sigsButton withStyle" onClick={handleAczeroClick}>C</button>
          <button className="sigsButton withStyleOrange" onClick={handleEqualsClick}>=</button>
        </div>
        <div className="numbers">
          {ZnackTypeList.map((item) => (
            <div className="sigs">
              <button className={classNames(
                "sigsButton", 
                typeof item === 'string' && 'withStyle',
                )} 
                onClick={handleNumberClick(item)}
                >
                  {item}
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
