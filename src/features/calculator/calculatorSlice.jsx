import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    displayValue: '0',

};


const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            const v = state.displayValue.slice(-1)
            const newCharacter = action.payload === '0' && (v === '+' || v === '-' || v === '*' || v === '/' || v === '.') ? '0.' : action.payload

            const newDisplayValue =
              state.displayValue === '0' ? newCharacter : state.displayValue + newCharacter;
            state.displayValue = newDisplayValue;
          },
          addOperator: (state, action) => {
            const v = state.displayValue.slice(-1)
            const newDisplayValue =
              v === '+' || v === '-' || v === '*' || v === '/' || v === '.' ? state.displayValue : state.displayValue + action.payload;
            state.displayValue = newDisplayValue;
          },
          calculateResult: (state) => {
            const newDisplayValue = state.displayValue === '' ? "0" : eval(state.displayValue).toString();
            state.displayValue = newDisplayValue
          },
          clearDisplay: (state) => {
            state.displayValue = '0'
          },
          deleteCharacter: (state) => {
            state.displayValue = state.displayValue.slice(0, -1);
          }

    },
});

export const { addNumber, addOperator, calculateResult, clearDisplay, deleteCharacter } = calculatorSlice.actions;
export default calculatorSlice.reducer;