import React, { useContext, useState } from 'react';

import ValidacoesCadastro from '../contexts/validacoesCadastro';

function useErrors(validation) {
  const initialState = createInitialState(validation);
  const [errors, setErrors] = useState(initialState);
    function validateField(event) {
        const { name, value } = event.target;
        const newState = { ...errors };
        newState[name] = validation[name](value);
        setErrors(newState);
      }

      function canSend() {
        for(let i in errors) {
          if(!errors[i].valid) {
            return false;
          }
        }
        return true;
      }

      return [errors, validateField, canSend];
}

function createInitialState(validation) {
  const initialState = {};
  for(let i in validation) {
    initialState[i] = { valid: true, text: "" }
  }
  return initialState
}

export default useErrors;
