import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FileJson,
  Hash,
  LinkIcon,
  Palette,
  Type,
  KeyRound,
  ArrowRightLeft,
  Calculator,
  Sigma,
  Percent,
} from 'lucide-react';

// Tool categories and tools
const categories = [
  {
    name: 'DevTools',
    tools: [
      { name: 'JSON Formatter', icon: <FileJson className="w-6 h-6" />, path: '/json-formatter' },
      { name: 'Base64 Encoder/Decoder', icon: <Hash className="w-6 h-6" />, path: '/base64' },
      { name: 'URL Encoder/Decoder', icon: <LinkIcon className="w-6 h-6" />, path: '/url-encoder' },
      { name: 'Color Picker', icon: <Palette className="w-6 h-6" />, path: '/color-picker' },
    ],
  },
  {
    name: 'Text Tools',
    tools: [
      { name: 'Lorem Ipsum Generator', icon: <Type className="w-6 h-6" />, path: '/lorem-ipsum' },
      { name: 'Password Generator', icon: <KeyRound className="w-6 h-6" />, path: '/password-generator' },
    ],
  },
  {
    name: 'Math Tools',
    tools: [
      { name: 'Unit Converter', icon: <ArrowRightLeft className="w-6 h-6" />, path: '/unit-converter' },
      { name: 'Calculator', icon: <Calculator className="w-6 h-6" />, path: '/calculator' },
      { name: 'Statistics Calculator', icon: <Sigma className="w-6 h-6" />, path: '/statistics' },
      { name: 'Percentage Calculator', icon: <Percent className="w-6 h-6" />, path: '/percentage-calculator' },
    ],
  },
];

// ToolCard Component
const ToolCard = ({ tool }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
  >
    <Link to={tool.path}>
      <div className="p-4 flex items-center">
        <div className="flex-shrink-0 bg-cyan-500 rounded-md p-3 text-white">
          {tool.icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-white">{tool.name}</h3>
        </div>
      </div>
    </Link>
  </motion.div>
);

// HomePage Component
export default function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Developer Tools
        </motion.h1>
        <motion.p
          className="mt-5 max-w-xl mx-auto text-xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Boost your productivity with our suite of powerful tools.
        </motion.p>
      </div>

      {/* Categories and Tools */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
