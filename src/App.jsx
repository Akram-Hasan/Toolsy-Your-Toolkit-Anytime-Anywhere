import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ColorPicker from './DevTools/ColorPicker';
import LoremIpsumGenerator from './DevTools/LoremGenerator'; 
import PasswordGenerator from './DevTools/PasswordGenerator'; 
import UnitConverter from './EducationalTools/UnitConverter'; 
import StatisticsCalculator from './EducationalTools/StatisticsCalculator';  
import PercentageCalculator from './EducationalTools/PercentageCalculator'; 
import QRCodeGenerator from './DevTools/QRcodegenerator';
import AgeCalculator from './EverydayTools/Agecalc';
import Calendar from './EverydayTools/Calender';
import BMICalculator from './EverydayTools/BMICalculator';

export default function App() {
  return (
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* DevTools Routes */}
        <Route path="/color-picker" element={<ColorPicker />} />

        {/* Text Tools Routes */}
        <Route path="/lorem-ipsum" element={<LoremIpsumGenerator />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="/qr-generator" element={<QRCodeGenerator />} />

        {/* Math Tools Routes */}
        <Route path="/unit-converter" element={<UnitConverter />} />
        <Route path="/statistics" element={<StatisticsCalculator />} />
        <Route path="/age-calculator" element={<AgeCalculator />} />
        <Route path="/percentage-calculator" element={<PercentageCalculator />} />
        <Route path="/calender" element={<Calendar />} />
        <Route path="/BMI-Calculator" element={<BMICalculator />} />

        {/* Catch-all route for unmatched URLs */}
        <Route path="*" element={<h1 className="text-center text-white mt-20">404 - Page Not Found</h1>} />
      </Routes>
  );
}
