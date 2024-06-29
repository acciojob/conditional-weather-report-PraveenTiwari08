import React from 'react'

function WheatherDisplay({data}) {

  const textColor = data.length < 20 ? 'blue' : 'red';
  return (
    <div style={{ color: textColor }}>
      <p>{`temperature:${data} , conditions: "Sunny"`}</p>
    </div>
  )
}

export default WheatherDisplay
