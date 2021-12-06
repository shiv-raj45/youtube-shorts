import { ArrowBack,  PhotoCameraOutlined } from '@material-ui/icons'
import React from 'react'
import './Css/Header.css'
function Header() {
    return (
        <div className="header">
<ArrowBack className="header_icon"  />
<PhotoCameraOutlined className="header_icon"/>
        </div>
    )
}

export default Header
