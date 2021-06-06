import React from "react";

const ValidacoesCadastro = React.createContext({
  registerNumber: notValidation,
  password: notValidation,
});

function notValidation(data) {
  return { valid: true, text: "" };
}

export default ValidacoesCadastro;
