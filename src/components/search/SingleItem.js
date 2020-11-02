import { useContext } from 'react'
import RootContext from '../../context'

export default function SingleItem({ item })
{
    let { setVideoData, setInitial } = useContext(RootContext)

    const trimTitle = title => title.substr(0, 35)
    const trimDescription = description => description.substr(0, 100)

    const updateMetaData = () => {
        let videoDetails = {
            title: item.snippet.title,
            description: item.snippet.description,
            name: item.snippet.channelTitle
        }
        setVideoData(videoDetails)
        setInitial({
            thumbnail: item.snippet.thumbnails.high.url,
            source: `https://www.youtube.com/watch?v=${item.id.videoId}`
        })
    }

    return (
        <div className="SingleItemContainer" onClick={updateMetaData}>
            <div className="row no-gutters">
                <div className="col-5">
                    <img 
                        src={item.snippet.thumbnails.medium.url} 
                        alt={item.snippet.title} 
                        className="img-fluid"/>
                </div>
                <div className="col-7">
                    <div className="card">
                        <div className="card-body">
                            <h4>{trimTitle(item.snippet.title)}</h4>
                            <p>{trimDescription(item.snippet.description)}</p>
                            <h5>{item.snippet.channelTitle}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}