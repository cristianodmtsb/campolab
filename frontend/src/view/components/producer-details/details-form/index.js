import React, { useState, useEffect } from "react";
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

const FormDetailsProducer = ({ producer, handleUpdate }) => {
  const { name, email, phone } = producer;
  const [values, setValues] = useState({
    name,
    email,
    phone,
  });
  const classes = useStyles();

  useEffect(() => {
    setValues({ name, email, phone });
  }, [name, email, phone]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(values);
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
        value={values.name}
        onChange={handleChange("name")}
      />
      <TextField
        id="email"
        label="e-mail"
        variant="outlined"
        value={values.email}
        onChange={handleChange("email")}
      />
      <TextField
        id="phone"
        label="Telefone"
        variant="outlined"
        value={values.phone}
        onChange={handleChange("phone")}
      />
      <Button type="submit">Atualizar</Button>
    </form>
  );
};

export default FormDetailsProducer;
