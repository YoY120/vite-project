import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './counter.css'

const Counter = () => {

  const [counter, setCounter] = useState(0)

  return (
    <div className='app'>
      <div className='buttonStyle'>
        <Button
          label='Прибавить 1'
          onClick={() => setCounter(counter+1)}
        />
        <Button
          label='Выяесть 1'
          onClick={() => setCounter(counter-1)}
        />
        <Button
          label='Обнулить'
          onClick={() => setCounter(0)}
          />
      </div>
      <div className='imputValue'>
        <p>
          Число: {counter}
        </p>
      </div>
    </div>
  )
}

export default Counter
