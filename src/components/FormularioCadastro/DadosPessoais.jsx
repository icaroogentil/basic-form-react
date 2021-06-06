import React, { useState, useContext } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

import ValidacoesCadastro from "../../contexts/validacoesCadastro";

import "./styles.css";

import useErrors from "../../Hooks/useErrors";

function DadosPessoais({ onSubmit }) {
  const [nameClient, setNameClient] = useState("");
  const [lastNameClient, setLastNameClient] = useState("");
  const [registerNumberClient, setRegisterNumberClient] = useState("");
  const [isPromotionsClient, setIsPromotionsClient] = useState(true);
  const [isNewsClient, setIsNewsClient] = useState(true);
  const validation = useContext(ValidacoesCadastro);
  const [errors, validateField, canSend] = useErrors(validation);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend())
          onSubmit({
            nameClient,
            lastNameClient,
            registerNumberClient,
            isPromotionsClient,
            isNewsClient,
          });
      }}
    >
      <TextField
        onChange={(event) => {
          setNameClient(event.target.value);
        }}
        value={nameClient}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          setLastNameClient(event.target.value);
        }}
        value={lastNameClient}
        id="sobrenome"
        name="sobrenome"
        label="SobreNome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          setRegisterNumberClient(event.target.value);
        }}
        value={registerNumberClient}
        onBlur={validateField}
        error={!errors.registerNumber.valid}
        helperText={errors.registerNumber.text}
        id="cpf"
        name="registerNumber"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <div className="footer-form">
        <div>
          <FormControlLabel
            label="Promoções"
            control={
              <Switch
                onChange={(event) => {
                  setIsPromotionsClient(event.target.checked);
                }}
                checked={isPromotionsClient}
                type="checkbox"
                name="promocoes"
                color="primary"
              />
            }
          ></FormControlLabel>
          <FormControlLabel
            label="Novidades"
            control={
              <Switch
                onChange={(event) => {
                  setIsNewsClient(event.target.checked);
                }}
                checked={isNewsClient}
                type="checkbox"
                name="novidades"
                color="primary"
              />
            }
          ></FormControlLabel>
        </div>
        <Button
          type="submit"
          disabled={!errors.registerNumber.valid}
          variant="contained"
          color="primary"
        >
          Próximo
        </Button>
      </div>
    </form>
  );
}

export default DadosPessoais;
