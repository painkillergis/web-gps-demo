import GeolocationDemo from './GeolocationDemo'

function App() {
  return 'geolocation' in navigator ? (
    <GeolocationDemo />
  ) : (
    'geolocation unavailable'
  )
}

export default App
