import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25rem",
    },
  },
}));

const AddProducerForm = ({ handleCreateProducer }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateProducer(values);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        onChange={handleChange("name")}
      />
      <TextField
        id="email"
        label="e-mail"
        variant="outlined"
        onChange={handleChange("email")}
      />
      <TextField
        id="phone"
        label="Telefone"
        variant="outlined"
        onChange={handleChange("phone")}
        type="number"
      />
      <Button type="submit">Criar Produtor</Button>
    </form>
  );
};

export default AddProducerForm;
