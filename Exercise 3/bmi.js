import calculateBMI from './index.js';

const weight = 70;
const height = 1.7;

const result = calculateBMI(weight, height);
console.log(`BMI: ${result.bmi}`);
console.log(`Category: ${result.category}`);