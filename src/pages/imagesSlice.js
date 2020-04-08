import { createSlice } from '@reduxjs/toolkit'
import * as API from '../API'

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        images: [],
        hasMore: true,
        page: 1
    },
    reducers: {
        getImagesSuccess: (state, action) => {
            const images = action.payload
            return {
                images: [...state.images, ...images],
                hasMore: images.length > 0,
                page: 1 + state.page
            }
        },
        likeImage: (state, action) => {
            const id = action.payload
            let images = state.images.map(image =>
                image.id === id ? { ...image, liked: !image.liked } : image)
            return {
                images: images,
                hasMore: state.hasMore,
                page: state.page
            }

        }
    }
})

export const getImages = (limit) => {
    return (dispatch, getState) => {
        API.getImages(getState().page, limit)
            .then(images => dispatch(getImagesSuccess(images)))
            .catch(error => console.error(error))
    }
}

export const { getImagesSuccess, likeImage, addImage } = imagesSlice.actions

export default imagesSlice.reducer