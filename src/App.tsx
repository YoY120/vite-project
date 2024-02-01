import React, { useState } from 'react'
import './App.css'
import Storybook from './pages/storybook'
import Button from './components/Button/Button';
import Counter from './pages/counter/counter';
// import { MyCalculate } from './myCalculate/myCalculate';
import { Calcul } from './calcul/calcul';
import TaskPage from './pages/TaskPage/TaskPage';

type PageTypes = 'storybook' | 'counter' | 'calculate_(Button)' | 'myCalculate_(input)' | 'taskPage'

function App() {
  const [page, setPage] = useState<PageTypes>('storybook');
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const renderContent = () => {
    switch (page) {
      case 'storybook': return <Storybook/>;
      case 'counter': return <Counter/>;
      // case 'myCalculate (input)': return <MyCalculate/>;
      case 'calculate_(Button)': return <Calcul/>;
      case 'myCalculate_(input)': return null;
      case 'taskPage': return <TaskPage/>
    }
  }

  const renderNavigation = () => (
    <div className='navigation'>
      <Button label='storybook' onClick={() => setPage('storybook')}/>
      <Button label='counter' onClick={() => setPage('counter')}/>
      {/* <Button label='myCalculate (input)' onClick={() => setPage('myCalculate (input)')}/> */}
      <Button label='calculate (Button)' onClick={() => setPage('calculate_(Button)')}/>
      <Button label='Task page' onClick={() => setPage('taskPage')}/>
    </div>
  )

  return (
    <>
      {renderNavigation()}
      {renderContent()}
    </>
  )
}

export default App
