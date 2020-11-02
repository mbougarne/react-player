import { createContext } from 'react'
import thumbnail from '../images/default.jpg'

const initialState = {
    items: [],
    metaData: {
        title: '',
        description: '',
        name: ''
    },
    defaultVideo: {
        thumbnail,
        source: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4'
    },
    isError: null
}

export default createContext(initialState)