import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Grid, Typography } from "@material-ui/core";

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
      <Typography variant="h4">Adicionar um produtor</Typography>
      <Grid>
        <TextField
          fullWidth
          id="name"
          label="Nome"
          variant="outlined"
          onChange={handleChange("name")}
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth
          id="email"
          label="e-mail"
          variant="outlined"
          onChange={handleChange("email")}
        />
      </Grid>
      <Grid>
        <TextField
          fullWidth
          id="phone"
          label="Telefone"
          variant="outlined"
          onChange={handleChange("phone")}
        />
      </Grid>
      <Grid>
        <Button fullWidth type="submit" variant="contained" color="primary">
          Atualizar
        </Button>
      </Grid>
    </form>
  );
};

export default AddProducerForm;
