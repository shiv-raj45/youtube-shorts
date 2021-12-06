import { VolumeMute, VolumeOff } from '@material-ui/icons';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Css/Videoscard.css';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import videos1 from './videos/7e9003981b3d2934030a0d5bd28a18f8.mp4'
import videos2 from './videos/0f085fb77e801e8fb77ac4798bb8d09d.mp4'
import videos3 from './videos/12bac53242b5832da780d72913a7622a.mp4'
function VideoCard() {

    const [mute, setMute] = useState(true)

    const videos = [
        {
            caption: 'For all the doors they slamed on us we are coming to buy a building..',
            videoSrc: videos1,
            channelName: "Programming Hub",
            likes: 30,
            comments: 20
        },
        {
            caption: 'We are programmers',
            videoSrc: videos2,
            channelName: "Naturing",
            likes: 99,
            comments: 41


        },
        {
            caption: 'we are programmers',
            videoSrc: videos3,
            channelName: "musicly",
            likes: 101,
            comments: 22


        }

    ]


    const [vids, setVids] = useState([]);
    useEffect(() => {
        setVids(videos)
    }, [])

const interact=()=>{
    setMute(!mute)
}

    return (
        <div className="videocard" >
            <div className="sound" onClick={interact}> {mute?<VolumeMute/>:<VolumeOff/>}   </div>


            {vids.map((vid, i) => <> <Header />
            <Sidebar comments={vid.comments} likes={vid.likes} 
            setVids={setVids} vids={vids} vid={vid} /> 
             <Footer caption={vid.caption} channelName={vid.channelName} />
             <Videos key={i} vid={vid} mute={mute} setMute={setMute}  />  </>)}


        </div>
    )
}

export default VideoCard
