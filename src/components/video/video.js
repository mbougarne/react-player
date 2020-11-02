/**
 * Project: React Player Home Assignment
 * Component: Video
 * Description: The HTML5 video container
 * 
 */


import { useState, useEffect, useRef, useContext } from 'react'
import Controls from '../controls'

import RootContext from '../../context'

export default function Video()
{
    let { initial } = useContext(RootContext)
    let videoElement = useRef(null)
    let [media, setMedia] = useState(null)

    useEffect(() => {

        if(initial.source)
        videoElement.current.controls = false;
        videoElement.current.autoplay = false;
        videoElement.current.preload = "auto";
        setMedia(videoElement.current)

    }, [initial])

    return (
        <div className="VideoContainer">
            <video 
                src={initial.source}
                poster={initial.thumbnail}
                ref={videoElement}
            />
            {initial.source && (<Controls video={media} />)}
        </div>
    )
}