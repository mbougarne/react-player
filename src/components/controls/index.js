/**
 * Project: React Player Home Assignment
 * Component: Controls
 * Description: The main controls components
 * 
 */

import { useState, useEffect} from 'react'

import PlayPause from './PlayPause'
import SkipBack from './SkipBack'
import VideoProgress from './VideoProgress'
import Volume from './Volume'

const Controls = ({video}) => {

    let [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if(video)
        {
            setLoaded(true)
        }
    }, [video])

    return (
        <div className="ControlsContainer">
            {
                loaded && (
                    <>
                        <div className="videoProgress">
                            <VideoProgress video={video}/>
                        </div>
                        <div className="videoButtons">
                            <div className="row">
                                
                                <div className="col-2">
                                    <PlayPause video={video} />
                                </div>

                                <div className="col-6">
                                    <Volume video={video} />
                                </div>

                                <div className="col-4">
                                    <SkipBack video={video}/>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )

}

export default Controls