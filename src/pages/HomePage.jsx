// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import {
// //   FileJson,
// //   LinkIcon,
// //   Palette,
// //   Type,
// //   KeyRound,
// //   ArrowRightLeft,
// //   Calculator,
// //   Sigma,
// //   Percent,
// // } from 'lucide-react';

// // // Tool categories and tools
// // const categories = [
// //   {
// //     name: 'DevTools',
// //     tools: [
// //       { name: 'JSON Formatter', icon: <FileJson className="w-6 h-6" />, path: '/json-formatter' },
// //       { name: 'URL Encoder/Decoder', icon: <LinkIcon className="w-6 h-6" />, path: '/url-encoder' },
// //       { name: 'Color Picker', icon: <Palette className="w-6 h-6" />, path: '/color-picker' },
// //     ],
// //   },
// //   {
// //     name: 'Text Tools',
// //     tools: [
// //       { name: 'Lorem Ipsum Generator', icon: <Type className="w-6 h-6" />, path: '/lorem-ipsum' },
// //       { name: 'Password Generator', icon: <KeyRound className="w-6 h-6" />, path: '/password-generator' },
// //       { name: 'QR Code Generator', icon: <KeyRound className="w-6 h-6" />, path: '/qr-generator' },
// //     ],
// //   },
// //   {
// //     name: 'Math Tools',
// //     tools: [
// //       { name: 'Unit Converter', icon: <ArrowRightLeft className="w-6 h-6" />, path: '/unit-converter' },
// //       { name: 'Calculator', icon: <Calculator className="w-6 h-6" />, path: '/calculator' },
// //       { name: 'Statistics Calculator', icon: <Sigma className="w-6 h-6" />, path: '/statistics' },
// //       { name: 'Percentage Calculator', icon: <Percent className="w-6 h-6" />, path: '/percentage-calculator' },
// //       { name: 'Age Calculator', icon: <Percent className="w-6 h-6" />, path: '/age-calculator' },
// //       { name: 'Calender', icon: <Percent className="w-6 h-6" />, path: '/calender' },
// //       { name: 'BMI Calculator', icon: <Percent className="w-6 h-6" />, path: '/BMI-Calculator' },
      
// //     ],
// //   },
// // ];

// // // ToolCard Component
// // const ToolCard = ({ tool }) => (
// //   <motion.div
// //     whileHover={{ scale: 1.05 }}
// //     whileTap={{ scale: 0.95 }}
// //     className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
// //   >
// //     <Link to={tool.path}>
// //       <div className="p-4 flex items-center">
// //         <div className="flex-shrink-0 bg-cyan-500 rounded-md p-3 text-white">
// //           {tool.icon}
// //         </div>
// //         <div className="ml-4">
// //           <h3 className="text-lg font-medium text-white">{tool.name}</h3>
// //         </div>
// //       </div>
// //     </Link>
// //   </motion.div>
// // );

// // // HomePage Component
// // export default function HomePage() {
// //   return (
// //     <div className="bg-gray-900 min-h-screen text-white">
// //       {/* Header Section */}
// //       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
// //         <motion.h1
// //           className="text-4xl font-extrabold sm:text-5xl lg:text-6xl"
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           Professional Developer Tools
// //         </motion.h1>
// //         <motion.p
// //           className="mt-5 max-w-xl mx-auto text-xl text-gray-400"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5, delay: 0.2 }}
// //         >
// //           Boost your productivity with our suite of powerful tools.
// //         </motion.p>
// //       </div>

// //       {/* Categories and Tools */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {categories.map((category, categoryIndex) => (
// //           <motion.div
// //             key={category.name}
// //             className="mt-12"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
// //           >
// //             <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {category.tools.map((tool) => (
// //                 <ToolCard key={tool.name} tool={tool} />
// //               ))}
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import {
//   FileJson,
//   LinkIcon,
//   Palette,
//   Type,
//   KeyRound,
//   ArrowRightLeft,
//   Calculator,
//   Sigma,
//   Percent,
// } from 'lucide-react';
// import logo from '../assets/logo/f5e336a9-33b3-4eb8-9a2e-4468aae9e5d4-Photoroom.png';  // Toolsy Logo
// import bgImage from '../assets/background/bgimage.jpg';  // Background Image

// const categories = [
//   {
//     name: 'DevTools',
//     tools: [
//       { name: 'JSON Formatter', icon: <FileJson className="w-6 h-6" />, path: '/json-formatter', image: '/images/json.png' },
//       { name: 'URL Encoder/Decoder', icon: <LinkIcon className="w-6 h-6" />, path: '/url-encoder', image: '/images/url.png' },
//       { name: 'Color Picker', icon: <Palette className="w-6 h-6" />, path: '/color-picker', image: '/images/color.png' },
//     ],
//   },
//   {
//     name: 'Text Tools',
//     tools: [
//       { name: 'Lorem Ipsum Generator', icon: <Type className="w-6 h-6" />, path: '/lorem-ipsum', image: '/images/lorem.png' },
//       { name: 'Password Generator', icon: <KeyRound className="w-6 h-6" />, path: '/password-generator', image: '/images/password.png' },
//       { name: 'QR Code Generator', icon: <KeyRound className="w-6 h-6" />, path: '/qr-generator', image: '/images/qr.png' },
//     ],
//   },
//   {
//     name: 'Math Tools',
//     tools: [
//       { name: 'Unit Converter', icon: <ArrowRightLeft className="w-6 h-6" />, path: '/unit-converter', image: '/images/unit.png' },
//       { name: 'Calculator', icon: <Calculator className="w-6 h-6" />, path: '/calculator', image: '/images/calculator.png' },
//       { name: 'Statistics Calculator', icon: <Sigma className="w-6 h-6" />, path: '/statistics', image: '/images/statistics.png' },
//       { name: 'Percentage Calculator', icon: <Percent className="w-6 h-6" />, path: '/percentage-calculator', image: '/images/percentage.png' },
//       { name: 'Age Calculator', icon: <Percent className="w-6 h-6" />, path: '/age-calculator', image: '/images/age.png' },
//       { name: 'Calender', icon: <Percent className="w-6 h-6" />, path: '/calender', image: '/images/calender.png' },
//       { name: 'BMI Calculator', icon: <Percent className="w-6 h-6" />, path: '/BMI-Calculator', image: '/images/bmi.png' },
//     ],
//   },
// ];

// const ToolCard = ({ tool }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer group"
//   >
//     <Link to={tool.path}>
//       <div className="relative">
//         <img src={tool.image} alt={tool.name} className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-all duration-300" />
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>
//       <div className="p-4 flex items-center">
//         <div className="flex-shrink-0 bg-cyan-500 rounded-md p-3 text-white">
//           {tool.icon}
//         </div>
//         <div className="ml-4">
//           <h3 className="text-lg font-medium text-white group-hover:text-cyan-300">{tool.name}</h3>
//         </div>
//       </div>
//     </Link>
//   </motion.div>
// );

// export default function HomePage() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white" >
//       <div className="max-w-7xl mx-auto py-16 px-6 sm:px-10 lg:px-16 text-center">
//         <motion.img
//           src={logo}
//           alt="Toolsy Logo"
//           className="w-40 mx-auto mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         />
//         <motion.h1
//           className="text-5xl font-extrabold sm:text-6xl lg:text-7xl"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Toolsy
//         </motion.h1>
//         <motion.p
//           className="mt-5 max-w-xl mx-auto text-xl text-gray-400"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           Your Toolkit, Anytime, Anywhere
//         </motion.p>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
//         {categories.map((category, index) => (
//           <div key={category.name} data-aos="fade-up" className="mt-16">
//             <h2 className="text-3xl font-bold mb-6">{category.name}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//               {category.tools.map((tool) => (
//                 <ToolCard key={tool.name} tool={tool} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo/f5e336a9-33b3-4eb8-9a2e-4468aae9e5d4-Photoroom.png';  // Toolsy Logo
import bgImage from '../assets/background/bgimage.jpg';  // Background Image
import image from '../assets/background/bgimage4.jpg';

const categories = [
  {
    name: 'DevTools',
    tools: [
      { name: 'Palette Generator', path: 'https://palette-generator-akram-hasan.vercel.app/', description: 'Create beautiful color palettes.', image: image },
      { name: 'Box Shadow Generator', path: 'https://box-shadow-generator-akram-hasan.vercel.app/', description: 'Generate CSS box shadows easily.', image: image },
      { name: 'Linear Gradient Generator', path: 'https://linear-gradient-generator-akram-hasan.vercel.app/', description: 'Create linear gradients.', image: image },
      { name: 'Link Shortener', path: 'https://link-shortner-red.vercel.app/', description: 'Shorten long URLs quickly.', image: image },
      { name: 'Color Picker', path: '/color-picker', description: 'Select and copy colors effortlessly.', image: image },
      { name: 'Lorem Ipsum Generator', path: '/lorem-ipsum', description: 'Generate placeholder text for designs.', image: image },
      { name: 'Hex Code Generator', path: 'https://hex-color-generator-akram-hasan.vercel.app/', description: 'Generate hex codes for random colors instantly.', image: image },
    ],
  },
  {
    name: 'Educational Tools',
    tools: [
      { name: 'Simple Calculator', path: '/https://simple-calculator-lake-two.vercel.app/', description: 'Perform basic arithmetic operations.', image: image },
      { name: 'Scientific Calculator', path: 'https://scientific-calculator-seven-roan.vercel.app/', description: 'Advanced calculator for complex calculations.', image: image },
      { name: 'Statistics Calculator', path: '/statistics', description: 'Analyze data with statistical tools.', image: image },
      { name: 'Unit Converter', path: '/unit-converter', description: 'Convert units for various measurements.', image: image },
      { name: 'Percentage Calculator', path: '/percentage-calculator', description: 'Easily calculate percentages.', image: image },
      { name: 'Eraser.io', path: 'https://eraser-io-black-board-simple-clone-akram-hasan.vercel.app/', description: 'Erase image backgrounds seamlessly.', image: image },
    ],
  },
  {
    name: 'General Tools',
    tools: [
      { name: 'To-Do List', path: 'https://to-do-list-chi-ten-12.vercel.app/', description: 'Organize tasks and stay productive.', image: image },
      { name: 'Notes', path: 'https://notes-akram-hasan.vercel.app/', description: 'Quickly jot down your ideas.', image: image },
      { name: 'Calendar', path: '/calendar', description: 'Manage your events and schedules.', image: image },
      { name: 'Clock', path: 'https://digital-clock-akram-hasan.vercel.app/', description: 'Check the current time anywhere.', image: image },
      { name: 'Stop Watch', path: 'https://stop-watch-akram-hasan.vercel.app/', description: 'Track time with precision.', image: image },
      { name: 'Weather App', path: 'https://weather-update-akram-hasan.vercel.app/', description: 'Get real-time weather updates.', image: image },
      { name: 'QR Code Generator', path: '/qr-generator', description: 'Create QR codes for links or text.', image: image },
      { name: 'Age Calculator', path: '/age-calculator', description: 'Calculate your age accurately.', image: image },
      { name: 'BMI Calculator', path: '/BMI-Calculator', description: 'Check your Body Mass Index.', image: image },
      { name: 'Password Generator', path: '/password-generator', description: 'Generate strong, secure passwords.', image: image },
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
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
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
