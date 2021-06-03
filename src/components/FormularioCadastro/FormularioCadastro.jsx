import React, { useState } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

import './styles.css';

function FormularioCadastro({ onSubmit, validationRegisterNumber }) {
  const [nameClient, setNameClient] = useState("");
  const [lastNameClient, setLastNameClient] = useState("");
  const [registerNumberClient, setRegisterNumberClient] = useState("");
  const [isPromotionsClient, setIsPromotionsClient] = useState(true);
  const [isNewsClient, setIsNewsClient] = useState(true);
  const [errors, setErrors] = useState({registerNumber:{valid: true, text:""}});
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
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
        onBlur={event => {
          const valid = validationRegisterNumber(registerNumberClient);
          setErrors({registerNumber: valid})
        }}
        error={!errors.registerNumber.valid}
        helperText={errors.registerNumber.text}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <div className='footer-form'>
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
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
      </div>
    </form>
  );
}

export default FormularioCadastro;
