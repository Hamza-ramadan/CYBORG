import React from 'react'
import Streamslive from './Streamslive/Streamslive'
import Offlinestream from './Offlinestream/Offlinestream'
import Moststreams from './Moststreams/Moststreams'
const Streams = () => {
  return (
    <>
        <Streamslive/>
        <Offlinestream/>
        <Moststreams/>
    </>
  )
}

export default Streams