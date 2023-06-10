import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, addOperator, calculateResult, clearDisplay, deleteCharacter } from '../features/calculator/calculatorSlice'

const Calculator = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.displayValue);

  const handleNumberClick = (number) => {
    dispatch(addNumber(number));
  };

  const handleOperatorClick = (operator) => {
    dispatch(addOperator(operator));
  };

  const handleEqualsClick = () => {
    dispatch(calculateResult());
  };

  const handleClearClick = () => {
    dispatch(clearDisplay());
  };

  const handleDeleteClick = () => {
    dispatch(deleteCharacter());
  };

  return (
    <div>
      <input type="text" value={displayValue} readOnly />
      <div>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div>
      <button onClick={() => handleClearClick()}>AC</button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <button onClick={() => handleEqualsClick()}>=</button>
      <button onClick={() => handleOperatorClick('/')}>/</button>
      <button onClick={() => handleOperatorClick('.')}>.</button>
      <button onClick={() => handleDeleteClick()}>Del</button>
      </div>
      
    </div>
  );
};

export default Calculator;