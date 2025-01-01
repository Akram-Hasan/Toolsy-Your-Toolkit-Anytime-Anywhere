import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/background/bgimage.jpg';

export default function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  const [details, setDetails] = useState({});

  const calculateBMI = () => {
    const weightKg = parseFloat(weight);
    const heightM = parseFloat(height) / 100; // Convert to meters
    const ageValue = parseInt(age);

    if (!weightKg || !heightM || heightM <= 0 || weightKg <= 0 || ageValue < 2 || ageValue > 120) {
      setStatus('Please enter valid values');
      setBmi(null);
      return;
    }

    const calculatedBmi = (weightKg / (heightM * heightM)).toFixed(1);
    setBmi(calculatedBmi);

    let bmiStatus = '';
    if (calculatedBmi < 18.5) {
      bmiStatus = 'Underweight';
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      bmiStatus = 'Normal';
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obese';
    }

    setStatus(bmiStatus);

    const healthyWeightRangeMin = (18.5 * heightM * heightM).toFixed(1);
    const healthyWeightRangeMax = (25 * heightM * heightM).toFixed(1);

    const weightToLose = (weightKg - healthyWeightRangeMax).toFixed(1);

    setDetails({
      healthyRange: `${healthyWeightRangeMin} kg - ${healthyWeightRangeMax} kg`,
      weightToLose: weightToLose > 0 ? weightToLose : 0,
    });
  };

  const resetForm = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setBmi(null);
    setStatus('');
    setDetails({});
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-10 relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-md bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl shadow-2xl max-w-4xl w-full"
      >
        <h1 className="text-5xl font-extrabold text-white text-center mb-8">
          BMI Calculator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="age" className="block text-white mb-2 text-lg">
              Age:
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
              placeholder="Enter your age"
            />
          </div>

          <div className="flex space-x-6">
            <div>
              <label className="block text-white mb-2 text-lg">Gender:</label>
              <div className="flex space-x-4 text-white">
                <label>
                  <input
                    type="radio"
                    value="male"
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    value="female"
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="height" className="block text-white mb-2 text-lg">
              Height (cm):
            </label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
              placeholder="Enter your height"
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-white mb-2 text-lg">
              Weight (kg):
            </label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700"
              placeholder="Enter your weight"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full mt-8 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-400 text-2xl"
          onClick={calculateBMI}
        >
          Calculate
        </motion.button>

        {bmi && (
          <div className="mt-10 bg-gray-700 rounded-lg p-6">
            <h2 className="text-5xl font-bold text-center text-green-400">
              BMI = {bmi} kg/m²
            </h2>
            <p className="text-center text-2xl mt-2 text-white">
              {status}
            </p>
            <ul className="text-white mt-6 space-y-3">
              <li>Healthy BMI range: 18.5 kg/m² - 25 kg/m²</li>
              <li>Healthy weight for height: {details.healthyRange}</li>
              {details.weightToLose > 0 && (
                <li>Lose {details.weightToLose} kg to reach BMI of 25</li>
              )}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
}
