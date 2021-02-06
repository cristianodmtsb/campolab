import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25rem",
    },
  },
}));

const AddProducerForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="name" label="Nome" variant="outlined" />
      <TextField id="email" label="e-mail" variant="outlined" />
      <TextField id="phone" label="Telefone" variant="outlined" />
    </form>
  );
};

export default AddProducerForm;
