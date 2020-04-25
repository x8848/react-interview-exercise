import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Grid, IconButton } from "@material-ui/core";
import { FaMoon } from "react-icons/fa"
import { GiUbisoftSun } from "react-icons/gi"

const Navigation = () => {
  const [dark, setDark] = useState(!!document.body.className)

  function toggleDark() {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item>
              <Button component={Link} to="/" variant="contained">
                Home
              </Button>
              <IconButton onClick={() => toggleDark()}>
                {dark ? <GiUbisoftSun /> : <FaMoon />}
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navigation;