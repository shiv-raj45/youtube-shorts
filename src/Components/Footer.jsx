import { Avatar } from '@material-ui/core'
import { Person, PersonOutlined } from '@material-ui/icons'
import React, { useRef } from 'react'
import './Css/Footer.css'
function Footer({ caption, channelName = "Aviato" }) {
    const liRef=useRef(null)
    return (
        <div className="footer">
            <div className="caption">
this is caption
            </div>

<div className="channel">
<div className="channel_left">
<PersonOutlined/>
<span className="channel_name"> Elon musk fan</span>
<button className="subscribe_button"> Subscribe</button>
</div>
<div className="channel_right">

<div className="avatar_container">  
<Avatar className="channel_avatar">  E  </Avatar>


 </div>
<div className="container_overlay"> 
<li ref={liRef}></li>
<li ref={liRef}></li>
<li ref={liRef}></li>
<li ref={liRef}></li>
<li ref={liRef}></li>


</div>

</div>
</div>
                    </div>
    )
}

export default Footer
