import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JSONFormatter from './Tools/DevTools/JSONFormatter';
import Base64Tool from './Tools/DevTools/Base64';
import URLEncoder from './Tools/DevTools/URLencoder';
import ColorPicker from './Tools/DevTools/ColorPicker';
import LoremIpsumGenerator from './Tools/TextTools/LoremGenerator'; 
import PasswordGenerator from './Tools/TextTools/PasswordGenerator'; 
import UnitConverter from './Tools/MathsTools/UnitConverter'; 
import Calculator from './Tools/MathsTools/Calculator'; 
import StatisticsCalculator from './Tools/MathsTools/StatisticsCalculator';  
import PercentageCalculator from './Tools/MathsTools/PercentageCalculator'; 

export default function App() {
  return (
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* DevTools Routes */}
        <Route path="/json-formatter" element={<JSONFormatter />} />
        <Route path="/base64" element={<Base64Tool />} />
        <Route path="/url-encoder" element={<URLEncoder />} />
        <Route path="/color-picker" element={<ColorPicker />} />

        {/* Text Tools Routes */}
        <Route path="/lorem-ipsum" element={<LoremIpsumGenerator />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />

        {/* Math Tools Routes */}
        <Route path="/unit-converter" element={<UnitConverter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/statistics" element={<StatisticsCalculator />} />
        <Route path="/percentage-calculator" element={<PercentageCalculator />} />

        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<h1 className="text-center text-white mt-20">404 - Page Not Found</h1>} />
      </Routes>
  );
}
