import { createSlice } from '@reduxjs/toolkit'
import * as API from '../API'

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        images: [],
        hasMore: true,
        page: 1,
        imageInfo: null
    },
    reducers: {
        getImagesSuccess: (state, action) => {
            const images = action.payload
            return {
                images: [...state.images, ...images],
                hasMore: images.length > 0,
                page: 1 + state.page,
                pageInfo: null
            }
        },
        likeImage: (state, action) => {
            const id = action.payload
            let images = state.images.map(image =>
                image.id === id ? { ...image, liked: !image.liked } : image)
            return { ...state, images: images }

        },
        getImageInfoSuccess: (state, action) => ({ ...state, imageInfo: action.payload })
    }
})

export const getImages = (limit) => (dispatch, getState) => {
    API.getImages(getState().page, limit)
        .then(images => dispatch(getImagesSuccess(images)))
        .catch(error => console.error(error))
}

export const getImageInfo = id => dispatch => {
    API.getImageInfo(id)
        .then(info => dispatch(getImageInfoSuccess(info)))
        .catch(error => console.error(error))
}

export const { getImagesSuccess, likeImage, getImageInfoSuccess } = imagesSlice.actions

export default imagesSlice.reducer