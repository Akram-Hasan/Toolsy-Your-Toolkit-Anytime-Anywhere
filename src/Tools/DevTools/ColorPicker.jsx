'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy } from 'lucide-react'

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
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">Color Picker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <input
              type="color"
              value={color}
              onChange={handleColorChange}
              className="w-64 h-64 cursor-pointer bg-transparent border-0"
            />
            <p className="mt-4 text-white text-xl">Selected Color: {color}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="w-full h-32 rounded-lg mb-4" style={{ backgroundColor: color }}></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white mb-2">HEX</p>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={color}
                    readOnly
                    className="bg-gray-700 text-white p-2 rounded-l-lg flex-grow"
                  />
                  <button
                    onClick={() => copyToClipboard(color)}
                    className="bg-cyan-500 text-white p-2 rounded-r-lg hover:bg-cyan-600 transition-colors duration-200"
                  >
                    <Copy size={20} />
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white mb-2">RGB</p>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={hexToRgb(color)}
                    readOnly
                    className="bg-gray-700 text-white p-2 rounded-l-lg flex-grow"
                  />
                  <button
                    onClick={() => copyToClipboard(hexToRgb(color))}
                    className="bg-cyan-500 text-white p-2 rounded-r-lg hover:bg-cyan-600 transition-colors duration-200"
                  >
                    <Copy size={20} />
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white mb-2">HSL</p>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={hexToHsl(color)}
                    readOnly
                    className="bg-gray-700 text-white p-2 rounded-l-lg flex-grow"
                  />
                  <button
                    onClick={() => copyToClipboard(hexToHsl(color))}
                    className="bg-cyan-500 text-white p-2 rounded-r-lg hover:bg-cyan-600 transition-colors duration-200"
                  >
                    <Copy size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
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

