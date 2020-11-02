/**
 * Project: React Player Home Assignment
 * Component: SkipBack
 * Description: Component to move the video forward or backward by 10 seconds
 * 
 */

import FontIcon from '../FontIcon'

export default function SkipBack({ video })
{
    /**
     * Skip forward by 10 seconds
     */
    const onSkip = () => {

        let currentTime = video.currentTime
        
        if(currentTime >= video.duration - 10)
        {
            return false
        }
        
        video.currentTime += 10
    }

    /**
     * Back forward by 10 seconds
     */
    const onBack = () => {

        let currentTime = video.currentTime
        
        if(currentTime <= 10)
        {
            return false
        }
        
        video.currentTime -= 10
    }

    return (
        <div className="SkipBackContainer">
            {/* move video backward by 10 seconds */}
            <div className="d-inline mr-2 BackButton">
                <FontIcon 
                    name="fas fa-backward"
                    handleClick={onBack}
                />
            </div>
            {/* move video forward by 10 seconds */}
            <div className="d-inline ml-2 SkipButton">
                <FontIcon 
                    name="fas fa-forward"
                    handleClick={onSkip}
                />
            </div>
        </div>
    )
}