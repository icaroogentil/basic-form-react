import "./App.css";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro onSubmit={onSubmitForm} validationRegisterNumber={validRegisterNumber}/>
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

function validRegisterNumber(registerNumber) {
  if(registerNumber.length !== 11) {
    return {valid: false, text:"CPF deve ter 11 digitos."}
  } else {
    return {valid: true, text:""}
  }
}

export default App;
