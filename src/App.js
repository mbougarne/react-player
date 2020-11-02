import { useContext, useState } from 'react'

import RootContext from './context'

import Header from './components/Header'
import MainContent from './components/MainContent'

export default function App() {

  let {items, metaData, defaultVideo, isError} = useContext(RootContext)
  let [videos, setVideos] = useState(items)
  let [videoData, setVideoData] = useState(metaData)
  let [initial, setInitial] = useState(defaultVideo)
  let [error, setError] = useState(isError)

  return (
    <RootContext.Provider 
      value={{
          videos, 
          videoData, 
          setVideos, 
          setVideoData, 
          initial, 
          setInitial,
          error,
          setError
        }}>
      <div>
        <Header />
        <MainContent />
      </div>
    </RootContext.Provider>
  );
}
