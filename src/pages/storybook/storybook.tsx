import React, { Component, useState }  from 'react'
import './storybook.css'
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField';
import { TextFieldSize } from '../../components/TextField/types';
import Radio from '../../components/Radio';
import { RadioSize, RadioViewType } from '../../components/Radio/types';
import { CheckboxSize, CheckboxViewType } from '../../components/Checkbox/types';
import Checkbox from '../../components/Checkbox';
import { SwitchSize, SwitchViewType } from '../../components/Switch/types';
import Text from '../../components/Text/Text';
import { Aling, Display, TextFont, TextViewType, Weight } from '../../components/Text/types';
import Switch from '../../components/Switch/Switch';
import TextPage from './componentsPage/TextPage/TextPage';
import ButtonPage from './componentsPage/ButtonPage/ButtonPage';
import TextFieldPage from './componentsPage/TextFieldPage/TextFieldPage';
import RadioPage from './componentsPage/RadioPage/RadioPage';
import CheckboxPage from './componentsPage/CheckboxPage/CheckboxPage';
import SwichPage from './componentsPage/SwichPage/SwichPage';
import ChipsPage from './componentsPage/ChipsPage/ChipsPage';
import {CollapsePage} from './componentsPage/CollapsePage/CollapsePage';
import TabsPage from './componentsPage/TabsPage/TabsPage';
import Collapse from '../../components/Collapse';
import ChoiseGroup from '../../components/ChoiseGroup';
import ChoiseGroupPage from './componentsPage/ChoiseGroupPage/ChoiseGroupPage';

type WindowTypeButton = 'Button' | 'Input' | 'Radio' | 'Checkbox' | 'Switch' | 'Chips' | 'Text' | 'Collapse' | 'Tabs' | 'ChoiseGroup'; 

export const Storybook = () => {
  /**
   *  Переключение компонентов
   */
  const [hidden, setHidden] = useState<WindowTypeButton>('Button');

  const [isOpenCollapse, setIsOpenCollapse] = useState(false);

  const [keyChose, setKeyChose] = useState<string | null>(null);

//  --------------------------------------------------------------------------------------------
  const renderInternalContent = () => {
    switch (hidden) {
      /**
       * BUTTON
       */
      case ('Button'): 
        return (
          <ButtonPage/>
        )
      /**
       *  INPUT
       */
      case ('Input'): 
        return (
          <TextFieldPage label=''/>
        )
      /**
       * Кнопка RADIO 
       */
      case ('Radio'): 
        return (
          <RadioPage/>
        )
      /**
       * CHECKBOX
       */
      case ('Checkbox'):
        return (
          <CheckboxPage/>
        )
      /**
       * Switch
       */
      case ('Switch'):
        return (
          <SwichPage/>
        );
      /**
       *  CHIPS
       */
      case ('Chips'):
        return (
          <ChipsPage label='' Chipslist = {[]}/>
        );
      /**
       * Text
       */
      case ('Text'):
        return (
          <TextPage/>
        )
      /**
       * Collapse
       */
      case ('Collapse'):
        return (
          <CollapsePage label=''/>
        )
      /**
       * Tabs
       */
      case ('Tabs'):
        return (
          <TabsPage/>
        )
      /**
       * ChoiseGroupPage
       */
      case ('ChoiseGroup'):
        return (
          <ChoiseGroupPage list = {[]} selectedItem='' onClick={() => null} />
        )
    }
  }
  /**
   *  Рендер Меню
   */
  const renderInternalMenu = () => (
    <div className="styleBlock">
      <Button
        label='Button'
        onClick={() => setHidden('Button')}
      />
      <Button
        label='Input'
        onClick={() => setHidden('Input')}
      />
      <Button
        label='Radio'
        onClick={() => setHidden('Radio')}
      />
      <Button
        label='Checbox'
        onClick={() => setHidden('Checkbox')}
      />
      <Button
        label='Switch'
        onClick={() => setHidden('Switch')}
      />
      <Button
        label='Chips'
        onClick={() => setHidden('Chips')}
      />
      <Button
        label='Text'
        onClick={() => setHidden('Text')}
      />
      <Button
        label='Collapse'
        onClick={() => setHidden('Collapse')}
      />
      <Button
        label='Tabs'
        onClick={() => setHidden('Tabs')}
      />
      <Button
        label='ChoiseGroupPage'
        onClick={() => setHidden('ChoiseGroup')}
      />
    </div>
  )

  /**
   * Рендер Меню и Контента
   */
  return (
    <>
      {renderInternalMenu()}
      {renderInternalContent()}
    </>
  )
}
