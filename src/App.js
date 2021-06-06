import "./App.css";

import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

import { validRegisterNumber, validPassword } from "./models/cadastro";

import validacoesCadastro from "./contexts/validacoesCadastro";

import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <validacoesCadastro.Provider
        value={{ registerNumber: validRegisterNumber, password: validPassword }}
      >
        <FormularioCadastro onSubmit={onSubmitForm} />
      </validacoesCadastro.Provider>
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}

export default App;
