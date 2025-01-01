import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Download } from 'lucide-react'

export default function JSONFormatter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input)
      setOutput(JSON.stringify(parsed, null, 2))
      setError('')
    } catch (e) {
      setError('Invalid JSON: ' + e.message)
      setOutput('')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  const downloadJSON = () => {
    const blob = new Blob([output], { type: 'application/json' })
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = 'formatted.json'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(href)
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">JSON Formatter</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <textarea
              className="w-full h-96 p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-200"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your JSON here..."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <pre className="w-full h-96 p-4 bg-gray-800 text-white rounded-lg border border-gray-700 overflow-auto">
              {error ? <span className="text-red-500">{error}</span> : output}
            </pre>
          </motion.div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200 flex items-center"
            onClick={formatJSON}
          >
            Format JSON
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
            onClick={downloadJSON}
            disabled={!output}
          >
            <Download className="mr-2" size={20} />
            Download
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

