import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";

const TableListFarms = ({ farms }) => {
  const [renderFarms, setRenderFarms] = useState([]);

  useEffect(() => {
    if (!farms) {
      return;
    }
    setRenderFarms(farms);
  }, [farms]);

  return renderFarms && renderFarms.length === 0 ? (
    <Typography>Não foi possivel localizar as propriedades</Typography>
  ) : (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderFarms &&
            renderFarms.map((row) => (
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
