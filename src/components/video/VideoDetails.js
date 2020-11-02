import { useContext } from 'react'
import RootContent from '../../context'

export default function VideoDetails()
{

    let { videoData } = useContext(RootContent)

    return (
        <div className="VideoDetails">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">{videoData.title}</h2>
                            <p className="card-text">
                                {videoData.description}
                            </p>
                            <h3>{videoData.name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}