import Player from './video/Player'
import VideoDetails from './video/VideoDetails'
import Videos from './video/Videos'

import '../styles/MainContent.css'

export default function MainContent()
{
    return (
        <div className="container">
            <Player />
            <VideoDetails />
            <Videos />
        </div>
    )
}
