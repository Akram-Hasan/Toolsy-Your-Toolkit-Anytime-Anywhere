import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Download } from 'lucide-react'
import bgImage from '../assets/background/bgimage.jpg'
import { loremIpsum } from './loremIpsum'

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(1)
  const [words, setWords] = useState(50)
  const [generatedText, setGeneratedText] = useState('')

  const generateLoremIpsum = () => {
    let text = ''
    for (let i = 0; i < paragraphs; i++) {
      const limitedWords = words > 500 ? 500 : words
      text += loremIpsum.split(' ').slice(0, limitedWords).join(' ') + '.\n\n'
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
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-10 relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 rounded-2xl max-w-3xl w-full shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold text-white text-center mb-8">Lorem Ipsum Generator</h1>
        <div className="mb-8">
          <label htmlFor="paragraphs" className="block text-white mb-2 text-lg">Number of Paragraphs:</label>
          <div className="flex items-center space-x-4">
            <input
              type="number"
              id="paragraphs"
              min="1"
              max="10"
              value={paragraphs}
              onChange={(e) => setParagraphs(parseInt(e.target.value))}
              className="w-20 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
            />
            <label htmlFor="words" className="block text-white text-lg">Words per Paragraph:</label>
            <input
              type="number"
              id="words"
              min="10"
              max="500"
              value={words > 500 ? 500 : words}
              onChange={(e) => setWords(parseInt(e.target.value))}
              className="w-24 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200"
              onClick={generateLoremIpsum}
            >
              Generate
            </motion.button>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6">
          <textarea
            className="w-full h-64 p-4 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
            value={generatedText}
            readOnly
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
            onClick={copyToClipboard}
            disabled={!generatedText}
          >
            <Copy className="mr-2" size={20} />
            Copy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
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
