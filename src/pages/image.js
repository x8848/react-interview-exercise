import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { MdFileDownload, MdFavorite } from "react-icons/md"
import ModalImage from "react-modal-image"
import Layout from "../components/layout"
import * as API from '../API'
import { getImageInfo, likeImage, getImages } from './imagesSlice'
import { connect } from 'react-redux'

const ImagePage = ({ info, images, getImages, likeImage, getImageInfo }) => {
  const { id } = useParams()

  useEffect(() => {
    getImageInfo(id)
    if (images.length === 0) {
      getImages(5)
    }
  }, [id])

  const liked = () => {
    const image = images.find(image => image.id === info.id)
    return image ? image.liked : false
  }

  if (!info) return (<h4>Loading</h4>)

  return (
    <Layout>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <IconButton onClick={() => window.location = info.download_url}>
                <MdFileDownload />
              </IconButton>
              <IconButton onClick={() => likeImage(info.id)}>
                <MdFavorite />{0 + liked()}
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Typography>Author: {info.author}</Typography>
          <Typography>Width: {info.width}</Typography>
          <Typography>Height: {info.height}</Typography>
          <a href={info.url} target="_blank">Link</a>
        </Grid>
        <Grid item xs={8}>
          <ModalImage small={info.download_url} large={info.download_url} />
        </Grid>
      </Grid>
      <div>
        <Typography variant="h5">Related images</Typography>
        <Grid container justify="space-evenly" alignItems="center" >
          {images.slice(0, 5).map(image => (
            <Grid item xs={2}>
              <Link to={`/image/${image.id}`}>
                <img style={{ width: "150px", height: "150px" }} src={image.small_url} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

const mapState = state => ({ info: state.imageInfo, images: state.images })

export default connect(mapState, { getImageInfo, getImages, likeImage })(ImagePage)