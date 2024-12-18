'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Download } from 'lucide-react'

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(1)
  const [generatedText, setGeneratedText] = useState('')

  const generateLoremIpsum = () => {
    let text = ''
    for (let i = 0; i < paragraphs; i++) {
      text += loremIpsum + '\n\n'
    }
    setGeneratedText(text.trim())
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText)
      .then(() => alert('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy: ', err))
  }

  const downloadText = () => {
    const blob = new Blob([generatedText], { type: 'text/plain' })
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = 'lorem_ipsum.txt'
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
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">Lorem Ipsum Generator</h1>
        <div className="mb-6">
          <label htmlFor="paragraphs" className="block text-white mb-2">Number of Paragraphs:</label>
          <div className="flex items-center">
            <input
              type="number"
              id="paragraphs"
              min="1"
              max="10"
              value={paragraphs}
              onChange={(e) => setParagraphs(parseInt(e.target.value))}
              className="w-20 p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200"
              onClick={generateLoremIpsum}
            >
              Generate
            </motion.button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <textarea
            className="w-full h-96 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
            value={generatedText}
            readOnly
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
            onClick={copyToClipboard}
            disabled={!generatedText}
          >
            <Copy className="mr-2" size={20} />
            Copy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
            onClick={downloadText}
            disabled={!generatedText}
          >
            <Download className="mr-2" size={20} />
            Download
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

