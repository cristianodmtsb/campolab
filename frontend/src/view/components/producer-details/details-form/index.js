import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, TextField, Grid } from "@material-ui/core";

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
      <Typography variant="h6">Dados do produtor</Typography>
      <Grid>
        <TextField
          fullWidth
          id="name"
          label="Nome"
          variant="outlined"
          value={values.name}
          onChange={handleChange("name")}
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth
          id="email"
          label="e-mail"
          variant="outlined"
          value={values.email}
          onChange={handleChange("email")}
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth
          id="phone"
          label="Telefone"
          variant="outlined"
          value={values.phone}
          onChange={handleChange("phone")}
        />
      </Grid>
      <Grid>
        <Button fullWidth type="submit" variant="contained" color="primary">
          Atualizar
        </Button>
      </Grid>
      <Grid>
        <Button fullWidth variant="contained" color="secondary">
          Deletar Produtor
        </Button>
      </Grid>
    </form>
  );
};

export default FormDetailsProducer;
