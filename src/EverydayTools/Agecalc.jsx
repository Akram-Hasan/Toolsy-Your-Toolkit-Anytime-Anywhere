import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import bgImage from '../assets/background/bgimage3.jpg';  // Background image path

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();

    if (isNaN(birthDate)) {
      setResult('⚠️ Please enter a valid date.');
      return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setResult({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  const resetForm = () => {
    setDob('');
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
        {/* Back Link
        <Link
          to="/"
          className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors duration-200 mb-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Tools
        </Link> */}

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white text-center mb-10">
          🎂 Age Calculator
        </h1>

        {/* Date of Birth Input */}
        <div className="mb-10">
          <label htmlFor="dob" className="block text-white mb-4 text-lg">
            Enter Date of Birth:
          </label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500"
            max={new Date().toISOString().split('T')[0]}  // Prevent future dates
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400"
            onClick={calculateAge}
          >
            Calculate Age
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
            <h2 className="text-3xl font-semibold text-cyan-300 mb-6">Result</h2>
            <p className="text-2xl text-white">
              {result.years} years, {result.months} months, {result.days} days
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
