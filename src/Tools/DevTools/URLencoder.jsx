'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Download, RotateCcw } from 'lucide-react'

export default function URLEncoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState('encode')

  const handleConversion = () => {
    try {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(input))
      } else {
        setOutput(decodeURIComponent(input))
      }
    } catch (e) {
      setOutput('Error: Invalid input for ' + mode)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  const downloadText = () => {
    const blob = new Blob([output], { type: 'text/plain' })
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = `url_${mode}d.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(href)
  }

  const resetForm = () => {
    setInput('')
    setOutput('')
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">URL Encoder/Decoder</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <textarea
              className="w-full h-64 p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-200"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === 'encode' ? "Enter text to encode..." : "Enter URL-encoded text to decode..."}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <textarea
              className="w-full h-64 p-4 bg-gray-800 text-white rounded-lg border border-gray-700"
              value={output}
              readOnly
              placeholder="Result will appear here..."
            />
          </motion.div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              mode === 'encode' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => setMode('encode')}
          >
            Encode
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              mode === 'decode' ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => setMode('decode')}
          >
            Decode
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200"
            onClick={handleConversion}
          >
            Convert
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
            onClick={copyToClipboard}
            disabled={!output}
          >
            <Copy className="mr-2" size={20} />
            Copy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
            onClick={downloadText}
            disabled={!output}
          >
            <Download className="mr-2" size={20} />
            Download
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
            onClick={resetForm}
          >
            <RotateCcw className="mr-2" size={20} />
            Reset
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

