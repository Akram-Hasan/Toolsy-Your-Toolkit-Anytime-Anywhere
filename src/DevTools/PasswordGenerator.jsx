'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, RefreshCw, RotateCcw } from 'lucide-react'
import bgImage from 'D:/Akram/Project/Tools app/tools-website/src/assets/background/bgimage.jpg'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [strength, setStrength] = useState('')

  const generatePassword = () => {
    let charset = ''
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (includeNumbers) charset += '0123456789'
    if (includeSymbols) charset += '!@#$%^&*()_+{}[]|:;<>,.?/~'

    if (!charset) {
      alert('Please select at least one option.')
      return
    }

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    setPassword(newPassword)
    evaluateStrength(newPassword)
  }

  const evaluateStrength = (password) => {
    let score = 0
    if (password.length >= 12) score += 2
    if (password.length >= 16) score += 3
    if (/[A-Z]/.test(password)) score += 1
    if (/[a-z]/.test(password)) score += 1
    if (/[0-9]/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 2

    if (score >= 7) setStrength('Strong')
    else if (score >= 4) setStrength('Medium')
    else setStrength('Weak')
  }

  const resetGenerator = () => {
    setPassword('')
    setStrength('')
    setLength(16)
    setIncludeUppercase(true)
    setIncludeLowercase(true)
    setIncludeNumbers(true)
    setIncludeSymbols(true)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
      .then(() => alert('Password copied to clipboard!'))
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
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">🔐 Password Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex flex-col">
            <label htmlFor="length" className="text-white mb-2 text-lg">Password Length</label>
            <input
              type="number"
              id="length"
              min="6"
              max="64"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col justify-between">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="mr-2"
              />
              Uppercase Letters
            </label>
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="mr-2"
              />
              Lowercase Letters
            </label>
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="mr-2"
              />
              Numbers
            </label>
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="mr-2"
              />
              Symbols
            </label>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-grow px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center"
            onClick={generatePassword}
          >
            <RefreshCw className="mr-2" size={20} />
            Generate
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors flex items-center justify-center"
            onClick={resetGenerator}
          >
            <RotateCcw className="mr-2" size={20} />
            Reset
          </motion.button>
        </div>

        {password && (
          <div>
            <div className="bg-gray-800 p-4 rounded-lg flex items-center mb-4">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full bg-transparent text-white p-2 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors"
                onClick={copyToClipboard}
              >
                <Copy size={20} />
              </motion.button>
            </div>
            <p className={`text-lg font-semibold text-center ${strength === 'Strong' ? 'text-green-400' : strength === 'Medium' ? 'text-yellow-400' : 'text-red-400'}`}>
              Strength: {strength}
            </p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
