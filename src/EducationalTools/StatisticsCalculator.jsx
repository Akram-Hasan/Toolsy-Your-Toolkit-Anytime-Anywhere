import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightLeft } from 'lucide-react'
import bgImage from '../assets/background/mathbg.jpg'

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

  const resetForm = () => {
    setNumbers('')
    setResults(null)
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-10 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl max-w-3xl w-full"
      >
        <h1 className="text-5xl font-extrabold text-white text-center mb-10">
          📊 Statistics Calculator
        </h1>

        <div className="mb-10">
          <label htmlFor="numbers" className="block text-white mb-4 text-lg">
            Enter numbers (comma-separated):
          </label>
          <input
            id="numbers"
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500"
            placeholder="e.g., 1, 2, 3, 4, 5"
          />
        </div>

        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200"
            onClick={calculateStatistics}
          >
            Calculate
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors duration-200 flex items-center"
            onClick={resetForm}
          >
            <ArrowRightLeft className="mr-2" size={20} /> Reset
          </motion.button>
        </div>

        {results && (
          <div className="mt-10 bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Results:</h2>
            {typeof results === 'string' ? (
              <p className="text-white">{results}</p>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                {Object.entries(results).map(([key, value]) => (
                  <div key={key} className="bg-gray-700 rounded-lg p-4">
                    <span className="text-cyan-300 font-semibold">
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </span>
                    <span className="text-white ml-2">
                      {typeof value === 'number' ? value.toFixed(4) : value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}
