import React from "react";
import { NavLink } from "react-router-dom";
import {
  MenuList,
  MenuItem,
  Typography,
  ListItemIcon,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

export const NavMenu = () => {
  return (
    <MenuList>
      <MenuItem component={NavLink} to="/">
        <ListItemIcon>
          <SendIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">Produtores</Typography>
      </MenuItem>
      <MenuItem component={NavLink} to="/produtor/adicionar">
        <ListItemIcon>
          <PriorityHighIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit">Adicionar Produtor</Typography>
      </MenuItem>
    </MenuList>
  );
};
