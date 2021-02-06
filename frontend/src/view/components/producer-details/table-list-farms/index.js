import React, { useState, useEffect } from "react";
import { Maybe } from "../../../../utils/functors";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const TableListFarms = (props) => {
  const { farms } = Maybe.of(props).get({});
  const [renderFarms, setRenderFarms] = useState([]);

  useEffect(() => {
    setRenderFarms(farms);
  }, [farms]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderFarms.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nameFarm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableListFarms;
