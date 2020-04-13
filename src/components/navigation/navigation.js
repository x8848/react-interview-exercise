import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Grid, IconButton } from "@material-ui/core";
import { FaMoon } from "react-icons/fa"
import { GiUbisoftSun } from "react-icons/gi"

const Navigation = () => {
  const [dark, setDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  useEffect(() => {
    const current = document.getElementsByTagName('body')[0].className
    !current && document.getElementsByTagName('body')[0].classList.add(dark ? 'dark' : 'light')
  })

  function changeTheme() {
    const current = dark ? 'dark' : 'light'
    setDark(!dark)
    document.getElementsByTagName('body')[0].classList.remove(current)
    document.getElementsByTagName('body')[0].classList.add(dark ? 'light' : 'dark')
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                component={Link}
                to="/"
                variant="contained"
              >
                Home
              </Button>
              <IconButton onClick={() => changeTheme()}>
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