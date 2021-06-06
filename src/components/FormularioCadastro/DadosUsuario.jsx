import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";

import ValidacoesCadastro from "../../contexts/validacoesCadastro";

import useErrors from "../../Hooks/useErrors";

function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validation = useContext(ValidacoesCadastro);
  const [errors, validateField, canSend] = useErrors(validation);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) onSubmit({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validateField}
        error={!errors.password.valid}
        helperText={errors.password.text}
        id="senha"
        name="password"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button
        type="submit"
        disabled={!errors.password.valid}
        variant="contained"
        color="primary"
      >
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
