import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Button
} from "@material-ui/core";
import { MdFavorite } from "react-icons/md";

import Layout from "../components/layout";

class Homepage extends React.Component {
  state = {
    images: []
  };

  likeImage = () => {};

  render() {
    return (
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={<Link to="/">Author of image</Link>} />
              <Link to="/">
                <CardMedia
                  style={{ paddingTop: '56.25%' }}
                  image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Author"
                />
              </Link>
              <CardActions disableSpacing>
                <Button>
                  <MdFavorite /> 0
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={<Link to="/">Author of image</Link>} />
              <Link to="/">
                <CardMedia
                  style={{ paddingTop: '56.25%' }}
                  image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Author"
                />
              </Link>
              <CardActions disableSpacing>
                <Button>
                  <MdFavorite /> 0
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={<Link to="/">Author of image</Link>} />
              <Link to="/">
                <CardMedia
                  style={{ paddingTop: '56.25%' }}
                  image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Author"
                />
              </Link>
              <CardActions disableSpacing>
                <Button>
                  <MdFavorite /> 0
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={<Link to="/">Author of image</Link>} />
              <Link to="/">
                <CardMedia
                  style={{ paddingTop: '56.25%' }}
                  image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Author"
                />
              </Link>
              <CardActions disableSpacing>
                <Button>
                  <MdFavorite /> 0
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardHeader title={<Link to="/">Author of image</Link>} />
              <Link to="/">
                <CardMedia
                  style={{ paddingTop: '56.25%' }}
                  image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  title="Author"
                />
              </Link>
              <CardActions disableSpacing>
                <Button>
                  <MdFavorite /> 0
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

export default Homepage;
