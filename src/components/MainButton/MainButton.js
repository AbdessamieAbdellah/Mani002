import React from 'react'
import '../../components/MainButton/MainButton.css'
const MainButton = ({cNameButton, titleButton}) => {
    return (
        <button className={cNameButton}>{titleButton}</button>
    )
}

export default MainButton





