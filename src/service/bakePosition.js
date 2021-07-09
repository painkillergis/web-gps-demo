export default function bakePosition(position) {
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
  return {
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
  }
}
