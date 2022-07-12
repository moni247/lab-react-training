import { useState } from "react"
import './LikeButton.css'

function LikeButton() {

    const [buttonValue, setButtonValue] = useState(0)

    const incrementValue = () => setButtonValue(buttonValue + 1)

    return (
        <div className="Button">
            <button onClick={incrementValue}>{buttonValue} likes </button>
        </div>
    )
}

// function Colors() {

//     const [theme, setTheme] = useState('light')

//     const changeTheme = e => {
//         const selectedTheme = e.target.value
//         setTheme(selectedTheme)

//         return (
//             <div className={`App theme-${theme}`}>

//                 <h1>Hook de estado: useState()</h1>

//                 <LikeButton />

//                 <hr />

//                 <select onChange={changeTheme}>
//                     <option value="light">Tema claro</option>
//                     <option value="dark">Tema oscuro</option>
//                 </select>
//             </div>
//         )

//     }

// }

export default LikeButton