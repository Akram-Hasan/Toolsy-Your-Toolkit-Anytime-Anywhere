import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import bgImage from '../assets/background/mathbg.jpg';  // Background image path

export default function PercentageCalculator() {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState('percentage');

  const calculate = () => {
    const num = parseFloat(value);
    const perc = parseFloat(percentage);

    if (isNaN(num) || isNaN(perc)) {
      setResult('⚠️ Please enter valid numbers.');
      return;
    }

    let calculatedResult;
    switch (mode) {
      case 'percentage':
        calculatedResult = (num * perc) / 100;
        setResult(`${perc}% of ${num} = ${calculatedResult.toFixed(2)}`);
        break;
      case 'increase':
        calculatedResult = num * (1 + perc / 100);
        setResult(`${num} increased by ${perc}% = ${calculatedResult.toFixed(2)}`);
        break;
      case 'decrease':
        calculatedResult = num * (1 - perc / 100);
        setResult(`${num} decreased by ${perc}% = ${calculatedResult.toFixed(2)}`);
        break;
      default:
        setResult('Invalid mode.');
    }
  };

  const resetForm = () => {
    setValue('');
    setPercentage('');
    setResult(null);
  };

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
        className="relative z-10 backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 rounded-3xl shadow-2xl max-w-2xl w-full"
      >
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Tools
        </Link>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white text-center mb-8">
          📈 Percentage Calculator
        </h1>

        {/* Mode Selection */}
        <div className="mb-8">
          <label htmlFor="mode" className="block text-white mb-4 text-lg">
            Choose Calculation Mode:
          </label>
          <select
            id="mode"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500"
          >
            <option value="percentage">Calculate Percentage</option>
            <option value="increase">Increase by Percentage</option>
            <option value="decrease">Decrease by Percentage</option>
          </select>
        </div>

        {/* Value Input */}
        <div className="mb-6">
          <label htmlFor="value" className="block text-white mb-4 text-lg">
            Enter Value:
          </label>
          <input
            id="value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500"
            placeholder="Enter a value"
          />
        </div>

        {/* Percentage Input */}
        <div className="mb-8">
          <label htmlFor="percentage" className="block text-white mb-4 text-lg">
            Enter Percentage:
          </label>
          <input
            id="percentage"
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500"
            placeholder="Enter percentage"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400"
            onClick={calculate}
          >
            Calculate
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-400"
            onClick={resetForm}
          >
            Reset
          </motion.button>
        </div>

        {/* Result Display */}
        {result && (
          <div className="mt-10 bg-gray-800 rounded-xl p-6 text-center">
            <p className="text-2xl text-cyan-300 font-semibold">{result}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
