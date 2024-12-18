'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRightLeft } from 'lucide-react'

const conversionFactors = {
  length: {
    m: 1,
    km: 0.001,
    cm: 100,
    mm: 1000,
    mi: 0.000621371,
    yd: 1.09361,
    ft: 3.28084,
    in: 39.3701,
  },
  weight: {
    kg: 1,
    g: 1000,
    mg: 1000000,
    lb: 2.20462,
    oz: 35.274,
  },
  temperature: {
    C: (t) => t,
    F: (t) => (t * 9) / 5 + 32,
    K: (t) => t + 273.15,
  },
}

export default function UnitConverter() {
  const [category, setCategory] = useState('length')
  const [fromUnit, setFromUnit] = useState('m')
  const [toUnit, setToUnit] = useState('km')
  const [fromValue, setFromValue] = useState('')
  const [result, setResult] = useState('')

  const handleConvert = () => {
    if (category === 'temperature') {
      const celsius = 
        fromUnit === 'C' ? parseFloat(fromValue) :
        fromUnit === 'F' ? (parseFloat(fromValue) - 32) * 5 / 9 :
        parseFloat(fromValue) - 273.15
      setResult(conversionFactors.temperature[toUnit](celsius).toFixed(4))
    } else {
      const baseValue = parseFloat(fromValue) / conversionFactors[category][fromUnit]
      setResult((baseValue * conversionFactors[category][toUnit]).toFixed(4))
    }
  }

  const swapUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    setFromValue(result)
    setResult(fromValue)
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">Unit Converter</h1>
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="category" className="block text-white mb-2">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setFromUnit(Object.keys(conversionFactors[e.target.value])[0])
                setToUnit(Object.keys(conversionFactors[e.target.value])[1])
              }}
              className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
            >
              <option value="length">Length</option>
              <option value="weight">Weight</option>
              <option value="temperature">Temperature</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fromUnit" className="block text-white mb-2">From:</label>
              <select
                id="fromUnit"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
              >
                {Object.keys(conversionFactors[category]).map((unit) => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="w-full mt-2 p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
                placeholder="Enter value"
              />
            </div>
            <div>
              <label htmlFor="toUnit" className="block text-white mb-2">To:</label>
              <select
                id="toUnit"
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
              >
                {Object.keys(conversionFactors[category]).map((unit) => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
              <input
                type="text"
                value={result}
                readOnly
                className="w-full mt-2 p-2 bg-gray-700 text-white rounded-lg border border-gray-600"
                placeholder="Result"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200"
              onClick={handleConvert}
            >
              Convert
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 flex items-center"
              onClick={swapUnits}
            >
              <ArrowRightLeft className="mr-2" size={20} />
              Swap
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

