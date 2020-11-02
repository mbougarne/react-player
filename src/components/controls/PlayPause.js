/**
 * Project: React Player Home Assignment
 * Component: PlayPause
 * Description: Component to play or pause the video
 * 
 */

import { useState } from 'react'
import FontIcon from '../FontIcon'

export default function PlayPause({video}) {
    
    // Change the icon based on video paused status
    let [icon, setIcon] = useState('fas fa-play')

    const onPlayPause = () => {
        setIcon((video.paused) ? 'fas fa-pause' : 'fas fa-play')
        return (video.paused) ? video.play() : video.pause()
    }

    return (
        <div className="PlayPauseContainer">
            <FontIcon 
                name={icon}
                handleClick={onPlayPause}    
            />
        </div>
    )
}