import React from "react";
import { Grid, Container } from "@material-ui/core";
import { NavMenu } from "../nav-menu";

const HomeLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={4} md={3}>
        <NavMenu />
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        {children}
      </Grid>
    </Grid>
  );
};

export default HomeLayout;
