import { useEffect, useState } from 'react'

export default function RandomColor() {
  function random(length) {
    return Math.floor(Math.random() * length)
  }

  const [color, setColor] = useState('#000000')
  const [type, setType] = useState('hex')

  function randomColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    if (type === 'hex') {
      let generatedColor = '#'
      for (let i = 0; i < 6; i++) {
        generatedColor += hex[random(16)]
      }
      setColor(generatedColor)
    } else {
      const r = random(256)
      const g = random(256)
      const b = random(256)
      setColor(`rgb(${r}, ${g}, ${b})`)
    }
  }

  useEffect(() => {
    randomColor()
  }, [type])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color
      }}
    >
      <button className="single-button" onClick={() => setType('hex')}>Create Hex Color</button>
      <button className="single-button" onClick={() => setType('rgb')}>Create RGB Color</button>
      <button className="single-button" onClick={randomColor}>Generate Random Color</button>
      <div className="text-box">
        <h2>
            {type==="hex" ? "Hex Color" : "RGB Color"}:
        </h2>
        <h2>{color}</h2>
      </div>
    </div>
  )
}