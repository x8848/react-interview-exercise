import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  IconButton, Typography
} from "@material-ui/core";
import { MdFileDownload } from "react-icons/md";

import Layout from "../components/layout";

const ImagePage = () => {
  return (
    <Layout>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <IconButton>
                <MdFileDownload />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <img width="100%" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        </Grid>
      </Grid>
      <div>
        <Typography variant="h5">Related images</Typography>
        <Grid container spacing={2} justify="space-between">
          <Grid item>
            <Link to="/image/0">First</Link>
          </Grid>
          <Grid item>
            <Link to="/image/1">Second</Link>
          </Grid>
          <Grid item>
            <Link to="/image/2">Third</Link>
          </Grid>
          <Grid item>
            <Link to="/image/3">Fourth</Link>
          </Grid>
          <Grid item>
            <Link to="/image/4">Fifth</Link>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default ImagePage;
