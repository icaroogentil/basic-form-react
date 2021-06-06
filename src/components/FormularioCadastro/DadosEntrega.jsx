import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

// import { Container } from './styles';

function DadosEntrega({ onSubmit }) {
  const [zipCodeClient, setZipCodeClient] = useState(0);
  const [addressClient, setAddressClient] = useState("");
  const [numberAddressClient, setNumberAddressClient] = useState("");
  const [stateClient, setStateClient] = useState("");
  const [cityClient, setCityClient] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({
          zipCodeClient,
          addressClient,
          numberAddressClient,
          stateClient,
          cityClient,
        });
      }}
    >
      <TextField
        value={zipCodeClient}
        onChange={(event) => {
          setZipCodeClient(event.target.value);
        }}
        id="cep"
        name="cep"
        label="cep"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={addressClient}
        onChange={(event) => {
          setAddressClient(event.target.value);
        }}
        id="endereco"
        name="endereco"
        label="endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numberAddressClient}
        onChange={(event) => {
          setNumberAddressClient(event.target.value);
        }}
        id="numero"
        name="numero"
        label="número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={stateClient}
        onChange={(event) => {
          setStateClient(event.target.value);
        }}
        id="estado"
        name="estado"
        label="estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cityClient}
        onChange={(event) => {
          setCityClient(event.target.value);
        }}
        id="cidade"
        name="cidade"
        label="cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
