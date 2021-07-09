import { useEffect, useState } from 'react'
import PositionTable from './component/PositionTable'
import bakePosition from './service/bakePosition'

function GeolocationDemo() {
  const [currentPosition, setCurrentPosition] = useState()
  const [watchPosition, setWatchPosition] = useState()
  const { geolocation } = navigator

  useEffect(() => {
    geolocation.getCurrentPosition((position) =>
      setCurrentPosition(bakePosition(position)),
    )
    geolocation.watchPosition((position) =>
      setWatchPosition(bakePosition(position)),
    )
  }, [])

  return (
    <div>
      <h1>geolocation demo</h1>
      <h2>current position</h2>
      <PositionTable position={currentPosition} />
      <h2>watch position</h2>
      <PositionTable position={watchPosition} />
    </div>
  )
}

export default GeolocationDemo
