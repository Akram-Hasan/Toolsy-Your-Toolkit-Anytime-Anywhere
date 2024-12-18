import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Replaced next/link with React Router
import { ArrowLeft } from 'lucide-react';

export default function PercentageCalculator() {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState('percentage');

  const calculate = () => {
    const num = parseFloat(value);
    const perc = parseFloat(percentage);

    if (isNaN(num) || isNaN(perc)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calculatedResult;
    switch (mode) {
      case 'percentage':
        calculatedResult = (num * perc) / 100;
        setResult(`${perc}% of ${num} is ${calculatedResult.toFixed(2)}`);
        break;
      case 'increase':
        calculatedResult = num * (1 + perc / 100);
        setResult(`${num} increased by ${perc}% is ${calculatedResult.toFixed(2)}`);
        break;
      case 'decrease':
        calculatedResult = num * (1 - perc / 100);
        setResult(`${num} decreased by ${perc}% is ${calculatedResult.toFixed(2)}`);
        break;
      default:
        setResult('Invalid mode');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Tools
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mt-4 mb-6">
          Percentage Calculator
        </h1>

        {/* Calculator Form */}
        <div className="bg-gray-800 rounded-lg p-6">
          {/* Mode Selection */}
          <div className="mb-4">
            <label htmlFor="mode" className="block text-white mb-2">
              Calculation Mode:
            </label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
            >
              <option value="percentage">Calculate Percentage</option>
              <option value="increase">Increase by Percentage</option>
              <option value="decrease">Decrease by Percentage</option>
            </select>
          </div>

          {/* Value Input */}
          <div className="mb-4">
            <label htmlFor="value" className="block text-white mb-2">
              Value:
            </label>
            <input
              id="value"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
              placeholder="Enter a number"
            />
          </div>

          {/* Percentage Input */}
          <div className="mb-4">
            <label htmlFor="percentage" className="block text-white mb-2">
              Percentage:
            </label>
            <input
              id="percentage"
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              className="w-full p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
              placeholder="Enter percentage"
            />
          </div>

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition-colors duration-200"
            onClick={calculate}
          >
            Calculate
          </motion.button>

          {/* Result Display */}
          {result && (
            <div className="mt-6 bg-gray-700 rounded-lg p-4">
              <p className="text-white text-lg">{result}</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
