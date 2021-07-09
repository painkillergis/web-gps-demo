function PositionTable({ position }) {
  return position ? (
    <p>
      {Object.entries(
        Object.assign({ timestamp: position.timestamp }, position.coords),
      ).map(([key, value]) => (
        <div>
          {key}: {value}
        </div>
      ))}
    </p>
  ) : null
}

export default PositionTable
