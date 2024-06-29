import React from 'react'

function WheatherDisplay({data}) {

  const textColor = data < 20 ? 'blue' : 'red';
  return (
    <div style={{ color: textColor }}>
      <h1>{data}</h1>
    </div>
  )
}

export default WheatherDisplay
