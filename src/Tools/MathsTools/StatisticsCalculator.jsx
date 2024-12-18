'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function StatisticsCalculator() {
  const [numbers, setNumbers] = useState('')
  const [results, setResults] = useState(null)

  const calculateStatistics = () => {
    const numberArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
    
    if (numberArray.length === 0) {
      setResults('Please enter valid numbers')
      return
    }

    const sum = numberArray.reduce((acc, num) => acc + num, 0)
    const mean = sum / numberArray.length
    const sortedNumbers = numberArray.sort((a, b) => a - b)
    const median = sortedNumbers.length % 2 === 0
      ? (sortedNumbers[sortedNumbers.length / 2 - 1] + sortedNumbers[sortedNumbers.length / 2]) / 2
      : sortedNumbers[Math.floor(sortedNumbers.length / 2)]
    const mode = calculateMode(numberArray)
    const variance = numberArray.reduce((acc, num) => acc + Math.pow(num - mean, 2), 0) / numberArray.length
    const standardDeviation = Math.sqrt(variance)

    setResults({
      count: numberArray.length,
      sum: sum,
      mean: mean,
      median: median,
      mode: mode,
      variance: variance,
      standardDeviation: standardDeviation,
      min: Math.min(...numberArray),
      max: Math.max(...numberArray),
    })
  }

  const calculateMode = (numbers) => {
    const frequencyMap = {}
    numbers.forEach(num => {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1
    })
    let maxFrequency = 0
    let modes = []
    for (const num in frequencyMap) {
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num]
        modes = [parseFloat(num)]
      } else if (frequencyMap[num] === maxFrequency) {
        modes.push(parseFloat(num))
      }
    }
    return modes.length === numbers.length ? 'No mode' : modes.join(', ')
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">Statistics Calculator</h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="numbers" className="block text-white mb-2">Enter numbers (comma-separated):</label>
            <input
              id="numbers"
              type="text"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
              placeholder="e.g., 1, 2, 3, 4, 5"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200"
            onClick={calculateStatistics}
          >
            Calculate
          </motion.button>
          {results && (
            <div className="mt-6 bg-gray-700 rounded-lg p-4">
              <h2 className="text-xl font-bold text-white mb-4">Results:</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(results).map(([key, value]) => (
                  <div key={key} className="bg-gray-600 rounded-lg p-3">
                    <span className="text-cyan-300 font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                    <span className="text-white ml-2">{typeof value === 'number' ? value.toFixed(4) : value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

