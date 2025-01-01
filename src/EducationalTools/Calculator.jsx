import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')

  const handleButtonClick = (value) => {
    if (display === '0' && value !== '.') {
      setDisplay(value)
    } else {
      setDisplay(display + value)
    }
    setExpression(expression + value)
  }

  const handleClear = () => {
    setDisplay('0')
    setExpression('')
  }

  const handleCalculate = () => {
    try {
      const result = eval(expression)
      setDisplay(result.toString())
      setExpression(result.toString())
    } catch (error) {
      setDisplay('Error')
    }
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ]

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">Calculator</h1>
        <div className="bg-gray-800 rounded-lg p-6 max-w-xs mx-auto">
          <div className="bg-gray-700 text-white text-right text-2xl p-4 rounded-lg mb-4">
            {display}
          </div>
          <div className="grid grid-cols-4 gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="col-span-2 p-4 bg-red-500 text-white rounded-lg hover:bg-red-400 transition-colors duration-200"
              onClick={handleClear}
            >
              C
            </motion.button>
            {buttons.map((btn, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 text-white rounded-lg transition-colors duration-200 ${
                  btn === '=' ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => btn === '=' ? handleCalculate() : handleButtonClick(btn)}
              >
                {btn}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

