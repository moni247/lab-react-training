import './Rating.css'

const Rating = ({ children }) => {

    const rating = Math.round(children)

    let ratings = ""

    { children < 0.5 ? '☆☆☆☆☆' : undefined }
    { children >= 1.5 ? '★☆☆☆☆' : undefined }
    { children >= 2.5 ? '★★☆☆☆' : undefined }
    { children >= 3.5 ? '★★★☆☆' : undefined }
    { children >= 4.5 ? '★★★★☆' : undefined }

    return ratings
}

export default Rating