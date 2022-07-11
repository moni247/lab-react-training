import './Rating.css'

const Rating = ({ children }) => {

    const rating = Math.round(children)

    let ratings = ""

    children === 0 ? '☆☆☆☆☆' : undefined
    children === 1 ? '★☆☆☆☆' : undefined
    children === 2 ? '★★☆☆☆' : undefined
    children === 3 ? '★★★☆☆' : undefined
    children === 4 ? '★★★★☆' : undefined
    children === 4 ? '★★★★★' : undefined

    return ratings
}

export default Rating