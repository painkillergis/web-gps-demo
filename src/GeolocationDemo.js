import { useEffect, useState } from 'react'

function GeolocationDemo() {
  const [currentPosition, setCurrentPosition] = useState('')
  const { geolocation } = navigator

  useEffect(() => {
    geolocation.getCurrentPosition((position) => {
      const {
        coords: {
          latitude,
          longitude,
          altitude,
          accuracy,
          altitudeAccuracy,
          heading,
          speed,
        },
        timestamp,
      } = position
      setCurrentPosition({
        coords: {
          latitude,
          longitude,
          altitude,
          accuracy,
          altitudeAccuracy,
          heading,
          speed,
        },
        timestamp: timestamp.toString(),
      })
    })
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
