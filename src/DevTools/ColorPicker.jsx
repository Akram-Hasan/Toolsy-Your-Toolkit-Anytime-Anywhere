import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy } from 'lucide-react'
import bgImage from '../assets/background/bgimage.jpg'

export default function ColorPicker() {
  const [color, setColor] = useState('#00FFFF')

  const handleColorChange = (e) => {
    setColor(e.target.value)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  return (
    <div className="min-h-screen bg-cover  bg-center p-10 flex items-center justify-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 rounded-lg max-w-4xl"
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-10">Color Picker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
              className="w-64 h-64 cursor-pointer border-4 border-white rounded-lg shadow-lg"
            />
            <p className="mt-6 text-white text-2xl font-semibold">{color}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full space-y-6"
          >
            <ColorBlock label="HEX" value={color} copyToClipboard={copyToClipboard} />
            <ColorBlock label="RGB" value={hexToRgb(color)} copyToClipboard={copyToClipboard} />
            <ColorBlock label="HSL" value={hexToHsl(color)} copyToClipboard={copyToClipboard} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function ColorBlock({ label, value, copyToClipboard }) {
  return (
    <div className="bg-gray-800 p-5 rounded-lg shadow-md">
      <p className="text-white mb-2 text-lg font-medium">{label}</p>
      <div className="flex items-center">
        <input
          type="text"
          value={value}
          readOnly
          className="bg-gray-700 text-white p-3 rounded-l-lg flex-grow"
        />
        <button
          onClick={() => copyToClipboard(value)}
          className="bg-cyan-500 text-white p-3 rounded-r-lg hover:bg-cyan-600 transition-all"
        >
          <Copy size={20} />
        </button>
      </div>
    </div>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgb(${r}, ${g}, ${b})`
}

function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255
  let g = parseInt(hex.slice(3, 5), 16) / 255
  let b = parseInt(hex.slice(5, 7), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2

  if (max === min) {
    h = s = 0
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break
      case g: h = (b - r) / d + 2; break
      case b: h = (r - g) / d + 4; break
    }
    h /= 6
  }

  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}
