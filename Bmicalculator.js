// src/BmiCalculator.js
import React, { useState } from 'react';

const BmiCalculator = () => {
  const [height, setHeight] = useState(''); // Height in cm
  const [weight, setWeight] = useState(''); // Weight in kg
  const [bmi, setBmi] = useState(null); // Calculated BMI
  const [category, setCategory] = useState(''); // BMI category

  // Function to handle form submission
  const calculateBmi = (e) => {
    e.preventDefault();

    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI using the formula
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2));

    // Determine the BMI category
    let bmiCategory = '';
    if (calculatedBmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      bmiCategory = 'Normal weight';
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
    setCategory(bmiCategory);
  };

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBmi}>
        <div>
          <label htmlFor="height">Height (in cm): </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (in kg): </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>

      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <h3>Category: {category}</h3>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;