import { useEffect, useState } from 'react'
import bakePosition from './service/bakePosition'

function GeolocationDemo() {
  const [currentPosition, setCurrentPosition] = useState('')
  const { geolocation } = navigator

  useEffect(() => {
    geolocation.getCurrentPosition((position) =>
      setCurrentPosition(bakePosition(position)),
    )
  }, [])

  return (
    <div>
      <h1>geolocation demo</h1>
      <h2>current position</h2>
      {currentPosition && (
        <p>
          {Object.entries(currentPosition.coords).map(([key, value]) => (
            <div>
              {key}: {value}
            </div>
          ))}
        </p>
      )}
    </div>
  )
}

export default GeolocationDemo
