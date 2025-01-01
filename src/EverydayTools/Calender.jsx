import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bgImage from '../assets/background/bgimage.jpg';  // Background image path

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const startOfMonth = new Date(selectedYear, currentDate.getMonth(), 1);
  const endOfMonth = new Date(selectedYear, currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const previousMonth = () => {
    setCurrentDate(new Date(selectedYear, currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(selectedYear, currentDate.getMonth() + 1));
  };

  const resetToToday = () => {
    setCurrentDate(today);
    setSelectedYear(today.getFullYear());
  };

  const handleYearChange = (e) => {
    const newYear = parseInt(e.target.value);
    setSelectedYear(newYear);
    setCurrentDate(new Date(newYear, currentDate.getMonth(), 1));
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      selectedYear === today.getFullYear()
    );
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-transparent">00</div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.1 }}
          className={`p-3 rounded-lg cursor-pointer ${
            isToday(day) ? 'bg-cyan-500 text-white' : 'bg-gray-700 text-white'
          }`}
        >
          {day}
        </motion.div>
      );
    }
    return days;
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
        className="relative z-10 backdrop-blur-lg bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-3xl shadow-2xl max-w-2xl w-full"
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">
          📅 Calendar
        </h1>

        {/* Month and Year Picker */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-cyan-500 hover:text-cyan-400"
            onClick={previousMonth}
          >
            <ChevronLeft size={28} />
          </motion.button>

          <div className="text-center">
            <h2 className="text-2xl text-white">
              {currentDate.toLocaleString('default', { month: 'long' })}
            </h2>
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="mt-2 p-2 bg-gray-800 text-white rounded-lg"
            >
              {Array.from({ length: 10 }, (_, i) => selectedYear - 5 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-cyan-500 hover:text-cyan-400"
            onClick={nextMonth}
          >
            <ChevronRight size={28} />
          </motion.button>
        </div>

        {/* Days of the Week */}
        <div className="grid grid-cols-7 gap-3 text-center text-cyan-300 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-3">{renderDays()}</div>

        {/* Reset Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400"
            onClick={resetToToday}
          >
            Today
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
