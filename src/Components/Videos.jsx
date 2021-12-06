import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Css/Video.css'
import Header from './Header';
import Sidebar from './Sidebar';
function Videos({ vid, mute, setMute }) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false);
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (playing !== undefined) {
                    videoRef.current.play()
                    setPlaying(true)
                }
            }
            else if (!entry.isIntersecting) {
                if (playing !== undefined) {
                    videoRef.current.pause()
                    setPlaying(false)
                }
            }
        })
    }
    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0%',
            threshold: 1
        }

    }, [])

    useEffect(() => {

console.log(videoRef.current.duration);

        const observer = new IntersectionObserver(callback, options)
        const currentTarget = videoRef.current;
        if (currentTarget) observer.observe(currentTarget);
        return () => {
            if (currentTarget) observer.unobserve(currentTarget)
        }


    }, [videoRef, options])


    const togglePlay = () => {

        if (!playing) {
            videoRef.current.play()
            setPlaying(true)
        }

        else {
            videoRef.current.pause()
            setPlaying(false)

        }




    }

 
    return (

        <div className="vid_box" >
            <video onClick={() => togglePlay()} className="video" ref={videoRef} loop muted={mute} >
                <source src={vid.videoSrc} type="video/mp4" />
            </video>
        </div>
    )
}

export default Videos
