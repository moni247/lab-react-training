import { useState } from "react"
import './ClickablePicture.css'

const ClickablePicture = ({ img, imgClicked }) => {

    const [showImg, setShowImg] = useState(true)

    const toggleImg = () => {
        setShowImg(!showImg)
    }

    return (
        <img onClick={toggleImg} src={showImg ? img : imgClicked} />
    )
}


export default ClickablePicture