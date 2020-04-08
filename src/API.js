const WIDTH_SMALL = 300
const HEIGHT_SMALL = 300

const checkResponse = (response) => {
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

const getUrl = (data) => {
    return data.download_url.split('/').slice(0, 5).join('/')
}
export function getImages(page, limit = 10) {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(checkResponse)
        .then(images => images.map(image => {
            image.liked = false
            const url = getUrl(image)
            image.small_url = [url, WIDTH_SMALL, HEIGHT_SMALL].join('/')
            return image
        }))
}

export function getImageInfo(id) {
    return fetch(`https://picsum.photos/id/${id}/info`)
        .then(checkResponse)
}