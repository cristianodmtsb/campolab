import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const AddFarmForm = ({ handleCreateFarm }) => {
  const { id } = useParams();
  const classes = useStyles();
  const [values, setValues] = useState({
    producerId: "",
    nameFarm: "",
  });

  useEffect(() => {
    setValues({ ...values, producerId: id });
  }, [id]);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateFarm(values);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="producer"
        label="producer"
        variant="outlined"
        value={values.producerId}
      />
      <TextField
        id="name"
        label="Nome"
        variant="outlined"
        onChange={handleChange("nameFarm")}
      />
      <Button type="submit">Criar Fazenda</Button>
    </form>
  );
};

export default AddFarmForm;
