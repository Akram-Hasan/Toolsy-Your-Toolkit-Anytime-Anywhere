import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Copy, RefreshCw, RotateCcw, Download } from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'
import bgImage from '../assets/background/bgimage.jpg'

export default function QRCodeGenerator() {
  const [text, setText] = useState('')
  const [qrCode, setQrCode] = useState('')
  const [size, setSize] = useState(200)
  const qrRef = useRef()

  const generateQRCode = () => {
    if (text.trim()) {
      setQrCode(text)
    } else {
      alert('Please enter valid text or URL')
    }
  }

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector('canvas')
    if (canvas) {
      const url = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = url
      link.download = 'qrcode.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const resetQRCode = () => {
    setText('')
    setQrCode('')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qrCode)
      .then(() => alert('Text copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-10 relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-md bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl max-w-3xl w-full"
      >
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">QR Code Generator</h1>

        <div className="mb-8">
          <label htmlFor="text" className="block text-white mb-2 text-lg">Enter Text or URL</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500"
            placeholder="https://example.com"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col">
            <label htmlFor="size" className="text-white mb-2">QR Code Size (px)</label>
            <input
              type="number"
              id="size"
              min="100"
              max="500"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-grow px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center"
            onClick={generateQRCode}
          >
            <RefreshCw className="mr-2" size={20} />
            Generate QR Code
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors flex items-center justify-center"
            onClick={resetQRCode}
          >
            <RotateCcw className="mr-2" size={20} />
            Reset
          </motion.button>
        </div>

        {qrCode && (
          <div ref={qrRef} className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg mb-6">
              <QRCodeCanvas value={qrCode} size={size} />  {/* Use QRCodeCanvas here */}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center"
              onClick={downloadQRCode}
            >
              <Download className="mr-2" size={20} />
              Download QR Code
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  )
}
