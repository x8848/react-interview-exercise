import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardHeader, CardMedia, CardActions, Button } from "@material-ui/core";
import { MdFavorite } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import { getImages, likeImage } from './imagesSlice'
import { connect } from 'react-redux'
import Layout from "../components/layout";

const mapState = state => ({ images: state.images, hasMore: state.hasMore })
const mapDispatch = dispatch => ({ getImages: () => dispatch(getImages()), likeImage: (id) => dispatch(likeImage(id)) })

class Homepage extends React.Component {
  componentDidMount() {
    if (this.props.images.length === 0) this.props.getImages()
  }

  render() {
    const { getImages, likeImage, images, hasMore } = this.props
    return (
      <Layout>
        <InfiniteScroll dataLength={images.length} next={getImages} hasMore={hasMore} loader={<h4>Loading...</h4>}>
          <Grid container spacing={2}>
            {images.map(image => (
              <Grid item xs={4} key={image.id}>
                <Card>
                  <CardHeader title={<Link to={`/image/${image.id}`}>{image.author}</Link>} />
                  <Link to={`/image/${image.id}`}>
                    <CardMedia style={{ padding: '56.25%' }} image={image.small_url} title={image.author}
                    />
                  </Link>
                  <CardActions disableSpacing>
                    <Button onClick={() => likeImage(image.id)}>
                      <MdFavorite />{0 + image.liked}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      </Layout>
    );
  }
}

export default connect(mapState, mapDispatch)(Homepage)
