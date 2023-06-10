import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, addOperator, calculateResult, clearDisplay, deleteCharacter, calculateAnswer } from '../features/calculator/calculatorSlice'

const Calculator = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.displayValue);
  const answer = useSelector((state) => state.calculator.answer);


  useEffect(() => {
    dispatch(calculateAnswer());
  }, [displayValue, dispatch]);

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

  const styles = "p-3 transition duration-300 ease-in-out hover:bg-zinc-800 outline outline-offset-0 outline-1 outline-zinc-800"

  return (
    <div id='display' className='text-zinc-400  grid content-center bg-black h-screen w-screen mx-auto'>
      <div className='mx-auto p-2 w-screen h-screen flex flex-col justify-between  border border-zinc-700 rounded-sm 
      lg:w-80  lg:h-96 
      '>
      
      <div className='flex flex-col'>
        <input className='bg-black text-zinc-400 text-end p-1 pr-2' type="text" value={displayValue} readOnly />
        <p className='text-end text-2xl p-1 pr-2'>{answer}</p>
      </div>
      
     
      <div className='p-1 grid grid-cols-4 gap-0 lg:h-full rounded-sm '>
        <button className={styles} onClick={() => handleNumberClick('(')}>(</button> 
        <button className={styles} onClick={() => handleNumberClick(')')}>)</button>
        <button className={styles} id='del' onClick={() => handleDeleteClick()}>Del</button>
        <button className={styles} id='clear' onClick={() => handleClearClick()}>AC</button>

        <button className={styles} id='seven'  onClick={() => handleNumberClick('7')}>7</button>
        <button className={styles} id='eight' onClick={() => handleNumberClick('8')}>8</button>
        <button className={styles} id='nine' onClick={() => handleNumberClick('9')}>9</button>
        <button className={styles} id='divide' onClick={() => handleOperatorClick('/')}>/</button>

        <button className={styles} id='four' onClick={() => handleNumberClick('4')}>4</button>
        <button className={styles} id='five' onClick={() => handleNumberClick('5')}>5</button>
        <button className={styles} id='six' onClick={() => handleNumberClick('6')}>6</button>
        <button className={styles} id='multiply' onClick={() => handleOperatorClick('*')}>*</button>

        <button className={styles} id='one' onClick={() => handleNumberClick('1')}>1</button>
        <button className={styles} id='two' onClick={() => handleNumberClick('2')}>2</button>
        <button className={styles} id='three' onClick={() => handleNumberClick('3')}>3</button>
        <button className={styles} id='subtract' onClick={() => handleOperatorClick('-')}>-</button>
        <button className={styles} id='zero' onClick={() => handleNumberClick('0')}>0</button>
        <button className={styles} id='decimal' onClick={() => handleOperatorClick('.')}>.</button>
        <button className={styles} id='equals' onClick={() => handleEqualsClick()}>=</button>
        <button className={styles} id='add' onClick={() => handleOperatorClick('+')}>+</button>
      </div>
      </div>
      
    </div>
  );
};

export default Calculator;