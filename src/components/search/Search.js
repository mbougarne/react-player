import { useState, useContext } from 'react'
import RootContext from '../../context'

import configs from '../../config'

export default function Search()
{
    let { setVideos, setInitial, setError, setVideoData } = useContext(RootContext)
    let [search, setSearch] = useState('')

    const onSearch = e => {
        e.preventDefault()

        let {baseUrl, part, apiKey, type, max} = configs
        let url = `${baseUrl}?part=${part}&q=${search}&type=${type}&maxResults=${max}&key=${apiKey}`

        fetch(url)
        .then(res => res.json())
        .then(data => {
            
            if(data.items.length > 0)
            {
                setSearch('')
                setVideos(data.items)
                setInitial({
                    thumbnail: data.items[0].snippet.thumbnails.high.url,
                    source: `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`
                })
                setVideoData({
                    title: data.items[0].snippet.title,
                    description: data.items[0].snippet.description,
                    name: data.items[0].snippet.channelTitle
                })
            }else {
                setSearch('')
                setError(true)
                setVideos([])
                setVideoData({
                    title: '',
                    description: '',
                    name: ''
                })
                setInitial({
                    thumbnail: '',
                    source: null
                })
            }
        }).catch(e => {
            console.error(e)
            setError(true)
        })
    }

    const onStartWriting = e => setSearch(e.target.value)

    return (
        <div className="Search">
            <form onSubmit={onSearch}>
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="row">
                                <div className="col-8">
                                    <input 
                                        type="text"
                                        className="form-control"
                                        value={search}
                                        onChange={onStartWriting}
                                        placeholder="Search"
                                    />
                                </div>

                                <div className="col-4">
                                    <button className="btn btn-primary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}