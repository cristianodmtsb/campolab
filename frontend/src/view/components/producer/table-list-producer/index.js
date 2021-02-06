import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, name, email, phone) {
  return { id, name, email, phone };
}

const rows = [
  createData(
    1,
    "Alexandre Joaquim Vieira",
    "alexandrejoaquim@vegacon.com.br",
    "62983766356"
  ),
  createData(
    2,
    "Heitor Cauã Luiz",
    "heitorcaualuiz@innovatis.com.br",
    "62993683935"
  ),
  createData(
    4,
    "Vinicius Edson Augusto",
    "viniciusedsona@arosacampinas.com.br",
    "62982487148"
  ),
  createData(
    5,
    "Felipe Marcos Severino",
    "felipemarcos@goldenhotel.com.br",
    "62992309007"
  ),
  createData(6, "Felipe Caleb Corte", "felipecaleb@bds.com.br", 16.0, 49, 3.9),
];

const TableListProducer = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Ver Mais</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableListProducer;
