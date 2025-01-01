import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo/f5e336a9-33b3-4eb8-9a2e-4468aae9e5d4-Photoroom.png';  // Toolsy Logo
import bgImage from '../assets/background/bgimage.jpg';  // Background Image
import image from '../assets/background/bgimage4.jpg';
import Palette from '../assets/Tools-Images/Palette-generator.png'
import Box from '../assets/Tools-Images/Box-shadow-generator.png'
import Linear from '../assets/Tools-Images/Linear-gradient-generator.png'
import Linkr from '../assets/Tools-Images/Link-shortener.png'
import Picker from '../assets/Tools-Images/Color-Picker.png'
import Lorem from '../assets/Tools-Images/Lorem-ipsum-generator.png'
import Hex from '../assets/Tools-Images/Random-Hex-colorcode-generator.png'
import Simple from '../assets/Tools-Images/Simple-calculator.png'
import Scientific from '../assets/Tools-Images/Scientific-calculator.png'
import Statistics from '../assets/Tools-Images/Statistics-Calculator.png'
import Unit from '../assets/Tools-Images/Unit-Converter.png'
import Percentage from '../assets/Tools-Images/Percentage-calculator.png'
import Eraser from '../assets/Tools-Images/Blackboard.png'
import Todo from '../assets/Tools-Images/To-Do-List.png'
import Notes from '../assets/Tools-Images/Notes.png'
import Calendar from '../assets/Tools-Images/Calendar.png'
import Clock from '../assets/Tools-Images/Clock.png'
import StopWatch from '../assets/Tools-Images/StopWatch.png'
import Weather from '../assets/Tools-Images/Weather.png'
import QR from '../assets/Tools-Images/OR-code-generator.png'
import Age from '../assets/Tools-Images/Age-calculator.png'
import BMI from '../assets/Tools-Images/BMI-calculator.png'
import Password from '../assets/Tools-Images/Password-generator.png'

const categories = [
  {
    name: 'DevTools',
    tools: [
      { name: 'Palette Generator', path: 'https://palette-generator-akram-hasan.vercel.app/', description: 'Create beautiful color palettes.', image: Palette  },
      { name: 'Box Shadow Generator', path: 'https://box-shadow-generator-akram-hasan.vercel.app/', description: 'Generate CSS box shadows easily.', image: Box },
      { name: 'Linear Gradient Generator', path: 'https://linear-gradient-generator-akram-hasan.vercel.app/', description: 'Create linear gradients.', image: Linear },
      { name: 'Link Shortener', path: 'https://link-shortner-red.vercel.app/', description: 'Shorten long URLs quickly.', image: Linkr  },
      { name: 'Color Picker', path: '/color-picker', description: 'Select and copy colors effortlessly.', image: Picker },
      { name: 'Lorem Ipsum Generator', path: '/lorem-ipsum', description: 'Generate placeholder text for designs.', image: Lorem },
      { name: 'Hex Code Generator', path: 'https://hex-color-generator-akram-hasan.vercel.app/', description: 'Generate hex codes for random colors instantly.', image: Hex },
    ],
  },
  {
    name: 'Educational Tools',
    tools: [
      { name: 'Simple Calculator', path: 'https://simple-calculator-lake-two.vercel.app/', description: 'Perform basic arithmetic operations.', image: Simple },
      { name: 'Scientific Calculator', path: 'https://scientific-calculator-seven-roan.vercel.app/', description: 'Advanced calculator for complex calculations.', image: Scientific },
      { name: 'Statistics Calculator', path: '/statistics', description: 'Analyze data with statistical tools.', image: Statistics },
      { name: 'Unit Converter', path: '/unit-converter', description: 'Convert units for various measurements.', image: Unit },
      { name: 'Percentage Calculator', path: '/percentage-calculator', description: 'Easily calculate percentages.', image: Percentage },
      { name: 'Eraser.io', path: 'https://eraser-io-black-board-simple-clone-akram-hasan.vercel.app/', description: 'Simple virtual blackboard for drawing and erasing with ease.', image: Eraser },
    ],
  },
  {
    name: 'General Tools',
    tools: [
      { name: 'To-Do List', path: 'https://to-do-list-chi-ten-12.vercel.app/', description: 'Organize tasks and stay productive.', image: Todo },
      { name: 'Notes', path: 'https://notes-akram-hasan.vercel.app/', description: 'Quickly jot down your ideas.', image: Notes },
      { name: 'Calendar', path: '/calendar', description: 'Manage your events and schedules.', image: Calendar },
      { name: 'Clock', path: 'https://digital-clock-akram-hasan.vercel.app/', description: 'Check the current time anywhere.', image: Clock },
      { name: 'Stop Watch', path: 'https://stop-watch-akram-hasan.vercel.app/', description: 'Track time with precision.', image: StopWatch },
      { name: 'Weather App', path: 'https://weather-update-akram-hasan.vercel.app/', description: 'Get real-time weather updates.', image: Weather },
      { name: 'QR Code Generator', path: '/qr-generator', description: 'Create QR codes for links or text.', image: QR },
      { name: 'Age Calculator', path: '/age-calculator', description: 'Calculate your age accurately.', image: Age },
      { name: 'BMI Calculator', path: '/BMI-Calculator', description: 'Check your Body Mass Index.', image: BMI },
      { name: 'Password Generator', path: '/password-generator', description: 'Generate strong, secure passwords.', image: Password },
    ],
  },
];


const ToolCard = ({ tool }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer group"
  >
    <Link to={tool.path}>
      <div className="relative overflow-hidden">
        <motion.img
          src={tool.image}
          alt={tool.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300">{tool.name}</h3>
        <p className="text-gray-400 mt-2">{tool.description}</p>
      </div>
    </Link>
  </motion.div>
);

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <div
        className="relative bg-cover bg-center pb-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="max-w-7xl mx-auto pt-10 px-6 sm:px-10 lg:px-16 text-center relative z-10">
          <motion.h1
            className="text-6xl bg-gradient-to-b from-pink-500 to-red-500 bg-clip-text text-transparent font-extrabold sm:text-6xl lg:text-[120px] pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Toolsy
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl mx-auto text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your Toolkit, Anytime, Anywhere
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {categories.map((category, index) => (
          <div key={category.name} data-aos="fade-up" className="mt-16">
            <h2 className="text-6xl text-center font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-900 bg-clip-text text-transparent">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
