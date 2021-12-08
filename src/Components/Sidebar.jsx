import React, { useState } from 'react'

import './Css/Sidebar.css'
import {  ReplyOutlined, MoreHoriz, ThumbUpAlt, ThumbDownAlt, Comment } from '@material-ui/icons'
function Sidebar({ likes, comments }) {
    const [liked, setLiked] = useState(false)

    const [localLikes, setLocalLikes] = useState(likes)
    const [disliked, setDisliked] = useState(false)
    const toggleLike = () => {
        setLiked(!liked)
        setDisliked(false)
        setLocalLikes(liked ? localLikes - 1 : localLikes + 1)
    }

    const dislike = () => {
        setLiked(false)

        setDisliked(true)

        setLocalLikes(liked ? localLikes - 1 : localLikes)

    }
    return (
        <div className="sidebar">
            <div className="side_icon">    <MoreHoriz className="icons" /></div>

            <div className="side_icon" onClick={toggleLike} >    <ThumbUpAlt style={{ color: `${liked ? 'red' : 'white'}` }} className="icons" />
                <span className="icon_text">{localLikes}</span>

            </div>
            <div className="side_icon">
                <ThumbDownAlt className="icons" onClick={dislike} style={{ color: `${disliked ? 'red' : 'white'}` }} />
                <span className="icon_text">Dislike</span>
            </div>
            <div className="side_icon">    <Comment className="icons" /> <span className="icon_text">{comments}</span> </div>
            <div className="side_icon">    <ReplyOutlined className="icons" style={{ transform: 'rotateY(180deg)' }} />
                <span className="icon_text">Share</span>


            </div>

        </div>
    )
}

export default Sidebar
