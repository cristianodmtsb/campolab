import React from "react";
import { NavLink } from "react-router-dom";
import {
  MenuList,
  MenuItem,
  Typography,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import logo from "./logo-colorida.png";

export const NavMenu = () => {
  return (
    <MenuList>
      <img src={logo} alt="Logo" width="80%" />
      <Divider />
      <Typography variant="h6" align="center">
        Menu
      </Typography>
      <MenuItem component={NavLink} to="/">
        <ListItemIcon>
          <PeopleAltIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">Produtores</Typography>
      </MenuItem>
      <MenuItem component={NavLink} to="/produtor/adicionar">
        <ListItemIcon>
          <PersonAddIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">Adicionar Produtor</Typography>
      </MenuItem>
    </MenuList>
  );
};
