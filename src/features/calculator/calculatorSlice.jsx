import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    displayValue: '0',
    answer: '0'

};


const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            const v = state.displayValue.slice(-1)
            const newCharacter = action.payload === '0' && (v === '+' || v === '-' || v === '*' || v === '/' || v === '.') ? '0.' : action.payload

            const newDisplayValue =
              state.displayValue === '0' || state.displayValue === 'null' ? newCharacter : state.displayValue + newCharacter;
            state.displayValue = newDisplayValue;
          },
          addOperator: (state, action) => {
            const v = state.displayValue.slice(-1)
            const newDisplayValue =
              v === '+' || v === '-' || v === '*' || v === '/' || v === '.' ? state.displayValue : state.displayValue + action.payload;
            state.displayValue = newDisplayValue;
          },
          calculateResult: (state) => {
             try {
                const newDisplayValue = state.displayValue === '' ? "0" : eval(state.displayValue).toString();
              state.displayValue = newDisplayValue
              } catch (error) {
                state.displayValue = "null"
              }
          },

          clearDisplay: (state) => {
            state.displayValue = '0'
            state.answer = '0';
          },
          deleteCharacter: (state) => {

            const newAnswer = state.displayValue.length === 1 || state.displayValue === 'null' ? "0" : state.displayValue.slice(0, -1)
            state.displayValue = newAnswer
          },

          calculateAnswer: (state) => {
            try {
              const newDisplayValue = state.displayValue === '' ? "0" : eval(state.displayValue).toString();
            state.answer = newDisplayValue
            } catch (error) {
              const newAnswerValue = state.displayValue === 'null' ? 'null' : state.answer
              state.answer = newAnswerValue

            }
            
          }

    },
});

export const { addNumber, addOperator, calculateResult, clearDisplay, deleteCharacter, calculateAnswer } = calculatorSlice.actions;
export default calculatorSlice.reducer;