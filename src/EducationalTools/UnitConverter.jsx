import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightLeft, RefreshCw } from 'lucide-react'
import bgImage from '../assets/background/mathbg.jpg'

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
  speed: {
    'm/s': 1,
    'km/h': 3.6,
    'mi/h': 2.23694,
    'ft/s': 3.28084,
  },
  volume: {
    L: 1,
    mL: 1000,
    'gal (US)': 0.264172,
    'qt (US)': 1.05669,
    cup: 4.22675,
    'fl oz': 33.814,
  },
  area: {
    'm²': 1,
    'km²': 0.000001,
    'cm²': 10000,
    'mm²': 1000000,
    'mi²': 3.861e-7,
    'yd²': 1.19599,
    'ft²': 10.7639,
    'in²': 1550,
  },
  time: {
    s: 1,
    min: 1 / 60,
    hr: 1 / 3600,
    day: 1 / 86400,
    week: 1 / 604800,
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

  const resetForm = () => {
    setFromValue('')
    setResult('')
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-8" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Unit Converter Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl max-w-2xl w-full"
      >
        <h1 className="text-5xl font-extrabold text-white text-center mb-10">
          🔄 Unit Converter
        </h1>

        {/* Category Dropdown */}
        <div className="mb-10">
          <label htmlFor="category" className="block text-white mb-2 text-lg">Select Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              setFromUnit(Object.keys(conversionFactors[e.target.value])[0])
              setToUnit(Object.keys(conversionFactors[e.target.value])[1])
            }}
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500"
          >
            {Object.keys(conversionFactors).map((cat) => (
              <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>

        {/* Conversion Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div>
            <label htmlFor="fromUnit" className="text-white mb-2 block">From</label>
            <select
              id="fromUnit"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
            >
              {Object.keys(conversionFactors[category]).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
            <input
              type="number"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              className="w-full p-3 mt-3 bg-gray-800 text-white rounded-lg border border-gray-700"
              placeholder="Enter value"
            />
          </div>

          <div>
            <label htmlFor="toUnit" className="text-white mb-2 block">To</label>
            <select
              id="toUnit"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
            >
              {Object.keys(conversionFactors[category]).map((unit) => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
            <input
              type="text"
              value={result}
              readOnly
              className="w-full p-3 mt-3 bg-gray-700 text-white rounded-lg border border-gray-600"
              placeholder="Result"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <motion.button className="px-8 py-3 bg-cyan-500 text-white rounded-lg" onClick={handleConvert}>
            Convert
          </motion.button>
          <motion.button className="px-8 py-3 bg-gray-700 text-white rounded-lg flex items-center" onClick={swapUnits}>
            <ArrowRightLeft className="mr-2" size={20} /> Swap
          </motion.button>
          <motion.button className="px-8 py-3 bg-red-500 text-white rounded-lg flex items-center" onClick={resetForm}>
            <RefreshCw className="mr-2" size={20} /> Reset
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
