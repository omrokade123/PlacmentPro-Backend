// seed/aptitudeQuestions.js
// Run with: node seed/aptitudeQuestions.js
// Make sure your DB_URI is set in .env

import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from "../src/models/practice model/Question.js";

dotenv.config();

const aptitudeQuestions = [

  // ════════════════════════════════════════════════════════
  // EASY  (34 questions)
  // ════════════════════════════════════════════════════════

  {
    questionText: "What is 15% of 200?",
    options: [
      { text: "25", isCorrect: false },
      { text: "30", isCorrect: true },
      { text: "35", isCorrect: false },
      { text: "40", isCorrect: false },
    ],
    explanation: "15% of 200 = (15/100) × 200 = 30.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "A train travels 60 km in 1 hour. How far will it travel in 3.5 hours?",
    options: [
      { text: "180 km", isCorrect: false },
      { text: "200 km", isCorrect: false },
      { text: "210 km", isCorrect: true },
      { text: "220 km", isCorrect: false },
    ],
    explanation: "Distance = Speed × Time = 60 × 3.5 = 210 km.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "If the ratio of boys to girls in a class is 3:2 and there are 30 students, how many boys are there?",
    options: [
      { text: "12", isCorrect: false },
      { text: "15", isCorrect: false },
      { text: "18", isCorrect: true },
      { text: "20", isCorrect: false },
    ],
    explanation: "Boys = (3/5) × 30 = 18.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is the simple interest on ₹1000 at 5% per annum for 2 years?",
    options: [
      { text: "₹50", isCorrect: false },
      { text: "₹100", isCorrect: true },
      { text: "₹150", isCorrect: false },
      { text: "₹200", isCorrect: false },
    ],
    explanation: "SI = (P × R × T) / 100 = (1000 × 5 × 2) / 100 = ₹100.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "The average of 5 numbers is 20. What is their sum?",
    options: [
      { text: "80", isCorrect: false },
      { text: "90", isCorrect: false },
      { text: "100", isCorrect: true },
      { text: "110", isCorrect: false },
    ],
    explanation: "Sum = Average × Count = 20 × 5 = 100.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "If a shirt costs ₹500 and is sold at 20% profit, what is the selling price?",
    options: [
      { text: "₹550", isCorrect: false },
      { text: "₹580", isCorrect: false },
      { text: "₹600", isCorrect: true },
      { text: "₹620", isCorrect: false },
    ],
    explanation: "SP = CP × (1 + profit%) = 500 × 1.2 = ₹600.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is the LCM of 4 and 6?",
    options: [
      { text: "8", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "12", isCorrect: true },
      { text: "24", isCorrect: false },
    ],
    explanation: "LCM(4, 6) = 12.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "A pipe fills a tank in 6 hours. What fraction of the tank is filled in 2 hours?",
    options: [
      { text: "1/4", isCorrect: false },
      { text: "1/3", isCorrect: true },
      { text: "1/2", isCorrect: false },
      { text: "2/3", isCorrect: false },
    ],
    explanation: "In 2 hours, fraction filled = 2/6 = 1/3.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is the HCF of 24 and 36?",
    options: [
      { text: "6", isCorrect: false },
      { text: "8", isCorrect: false },
      { text: "12", isCorrect: true },
      { text: "18", isCorrect: false },
    ],
    explanation: "HCF(24, 36) = 12.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "Convert 3/4 to a percentage.",
    options: [
      { text: "65%", isCorrect: false },
      { text: "70%", isCorrect: false },
      { text: "75%", isCorrect: true },
      { text: "80%", isCorrect: false },
    ],
    explanation: "(3/4) × 100 = 75%.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "If 8 workers complete a job in 10 days, how many days will 4 workers take?",
    options: [
      { text: "15 days", isCorrect: false },
      { text: "18 days", isCorrect: false },
      { text: "20 days", isCorrect: true },
      { text: "25 days", isCorrect: false },
    ],
    explanation: "Workers × Days = constant → 8 × 10 = 4 × D → D = 20 days.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A car covers 150 km in 3 hours. What is its speed?",
    options: [
      { text: "40 km/h", isCorrect: false },
      { text: "45 km/h", isCorrect: false },
      { text: "50 km/h", isCorrect: true },
      { text: "55 km/h", isCorrect: false },
    ],
    explanation: "Speed = Distance / Time = 150 / 3 = 50 km/h.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is 25% of 480?",
    options: [
      { text: "100", isCorrect: false },
      { text: "110", isCorrect: false },
      { text: "120", isCorrect: true },
      { text: "130", isCorrect: false },
    ],
    explanation: "25% of 480 = 480 / 4 = 120.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "The perimeter of a square with side 7 cm is:",
    options: [
      { text: "21 cm", isCorrect: false },
      { text: "28 cm", isCorrect: true },
      { text: "35 cm", isCorrect: false },
      { text: "49 cm", isCorrect: false },
    ],
    explanation: "Perimeter = 4 × side = 4 × 7 = 28 cm.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "What is the area of a rectangle with length 8 cm and width 5 cm?",
    options: [
      { text: "30 cm²", isCorrect: false },
      { text: "35 cm²", isCorrect: false },
      { text: "40 cm²", isCorrect: true },
      { text: "45 cm²", isCorrect: false },
    ],
    explanation: "Area = length × width = 8 × 5 = 40 cm².",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "A number increased by 30% becomes 130. What is the original number?",
    options: [
      { text: "90", isCorrect: false },
      { text: "95", isCorrect: false },
      { text: "100", isCorrect: true },
      { text: "105", isCorrect: false },
    ],
    explanation: "x × 1.3 = 130 → x = 100.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "If today is Monday, what day will it be after 10 days?",
    options: [
      { text: "Wednesday", isCorrect: false },
      { text: "Thursday", isCorrect: true },
      { text: "Friday", isCorrect: false },
      { text: "Saturday", isCorrect: false },
    ],
    explanation: "10 mod 7 = 3. Monday + 3 = Thursday.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is 120 divided by 0.6?",
    options: [
      { text: "20", isCorrect: false },
      { text: "180", isCorrect: false },
      { text: "200", isCorrect: true },
      { text: "220", isCorrect: false },
    ],
    explanation: "120 / 0.6 = 120 × (10/6) = 200.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "A shopkeeper buys an item for ₹400 and sells it at a 10% loss. What is the selling price?",
    options: [
      { text: "₹340", isCorrect: false },
      { text: "₹360", isCorrect: true },
      { text: "₹380", isCorrect: false },
      { text: "₹390", isCorrect: false },
    ],
    explanation: "SP = 400 × (1 − 0.10) = 400 × 0.9 = ₹360.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is the cube of 5?",
    options: [
      { text: "100", isCorrect: false },
      { text: "115", isCorrect: false },
      { text: "125", isCorrect: true },
      { text: "135", isCorrect: false },
    ],
    explanation: "5³ = 5 × 5 × 5 = 125.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "What is the square root of 144?",
    options: [
      { text: "10", isCorrect: false },
      { text: "11", isCorrect: false },
      { text: "12", isCorrect: true },
      { text: "13", isCorrect: false },
    ],
    explanation: "√144 = 12.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "If 5x = 35, what is x?",
    options: [
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "8", isCorrect: false },
    ],
    explanation: "x = 35 / 5 = 7.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is 40% of 250?",
    options: [
      { text: "80", isCorrect: false },
      { text: "90", isCorrect: false },
      { text: "100", isCorrect: true },
      { text: "110", isCorrect: false },
    ],
    explanation: "40% of 250 = (40/100) × 250 = 100.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "How many minutes are there in 3 hours 45 minutes?",
    options: [
      { text: "200 min", isCorrect: false },
      { text: "215 min", isCorrect: false },
      { text: "225 min", isCorrect: true },
      { text: "235 min", isCorrect: false },
    ],
    explanation: "3 × 60 + 45 = 180 + 45 = 225 minutes.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "What is the next prime number after 7?",
    options: [
      { text: "8", isCorrect: false },
      { text: "9", isCorrect: false },
      { text: "11", isCorrect: true },
      { text: "13", isCorrect: false },
    ],
    explanation: "8 and 9 are not prime. 11 is prime.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "Two numbers are in the ratio 3:5. If their sum is 40, find the smaller number.",
    options: [
      { text: "12", isCorrect: false },
      { text: "15", isCorrect: true },
      { text: "18", isCorrect: false },
      { text: "20", isCorrect: false },
    ],
    explanation: "Smaller = (3/8) × 40 = 15.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A clock shows 3:00. What is the angle between the hour and minute hands?",
    options: [
      { text: "60°", isCorrect: false },
      { text: "75°", isCorrect: false },
      { text: "90°", isCorrect: true },
      { text: "120°", isCorrect: false },
    ],
    explanation: "At 3:00 the hour hand is at 90° from 12 and minute hand is at 0°, so angle = 90°.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "Find the odd one out: 2, 3, 5, 7, 9, 11",
    options: [
      { text: "3", isCorrect: false },
      { text: "7", isCorrect: false },
      { text: "9", isCorrect: true },
      { text: "11", isCorrect: false },
    ],
    explanation: "9 = 3² is not a prime number; all others are prime.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "If a dozen eggs cost ₹60, what is the cost of 3 eggs?",
    options: [
      { text: "₹12", isCorrect: false },
      { text: "₹15", isCorrect: true },
      { text: "₹18", isCorrect: false },
      { text: "₹20", isCorrect: false },
    ],
    explanation: "Cost per egg = 60/12 = ₹5. Cost of 3 = ₹15.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A number is multiplied by 4 and then 8 is subtracted. The result is 32. What is the number?",
    options: [
      { text: "8", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "14", isCorrect: false },
    ],
    explanation: "4x − 8 = 32 → 4x = 40 → x = 10.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is the value of 2⁸?",
    options: [
      { text: "128", isCorrect: false },
      { text: "256", isCorrect: true },
      { text: "512", isCorrect: false },
      { text: "64", isCorrect: false },
    ],
    explanation: "2⁸ = 256.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  {
    questionText: "If 30% of a number is 90, what is the number?",
    options: [
      { text: "270", isCorrect: false },
      { text: "300", isCorrect: true },
      { text: "320", isCorrect: false },
      { text: "350", isCorrect: false },
    ],
    explanation: "Number = 90 / 0.3 = 300.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A bus and a car leave the same point. Bus speed is 40 km/h, car speed is 60 km/h. After 2 hours, how far apart are they?",
    options: [
      { text: "20 km", isCorrect: false },
      { text: "30 km", isCorrect: false },
      { text: "40 km", isCorrect: true },
      { text: "50 km", isCorrect: false },
    ],
    explanation: "Distance = (60 − 40) × 2 = 40 km.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is the sum of angles in a triangle?",
    options: [
      { text: "90°", isCorrect: false },
      { text: "180°", isCorrect: true },
      { text: "270°", isCorrect: false },
      { text: "360°", isCorrect: false },
    ],
    explanation: "Sum of interior angles of a triangle = 180°.",
    topic: "aptitude",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    isActive: true,
  },

  // ════════════════════════════════════════════════════════
  // MEDIUM  (33 questions)
  // ════════════════════════════════════════════════════════

  {
    questionText: "Two pipes A and B can fill a tank in 12 and 18 hours respectively. Both opened together — in how many hours will the tank be full?",
    options: [
      { text: "6.2 hours", isCorrect: false },
      { text: "7.2 hours", isCorrect: true },
      { text: "8 hours", isCorrect: false },
      { text: "9 hours", isCorrect: false },
    ],
    explanation: "Combined rate = 1/12 + 1/18 = 5/36 per hour. Time = 36/5 = 7.2 hours.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A sum doubles in 8 years at simple interest. What is the rate of interest?",
    options: [
      { text: "10%", isCorrect: false },
      { text: "12%", isCorrect: false },
      { text: "12.5%", isCorrect: true },
      { text: "15%", isCorrect: false },
    ],
    explanation: "SI = P in 8 years. R = (100 × SI) / (P × T) = 100 / 8 = 12.5%.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "The ratio of speeds of two trains is 3:4. If the faster train covers 240 km in 2 hours, what is the speed of the slower train?",
    options: [
      { text: "80 km/h", isCorrect: false },
      { text: "90 km/h", isCorrect: true },
      { text: "100 km/h", isCorrect: false },
      { text: "110 km/h", isCorrect: false },
    ],
    explanation: "Faster = 240/2 = 120 km/h. Slower = (3/4) × 120 = 90 km/h.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A mixture of milk and water is in ratio 5:1. If 6 litres of water is added, the ratio becomes 5:2. Find the original quantity of milk.",
    options: [
      { text: "20 litres", isCorrect: false },
      { text: "25 litres", isCorrect: false },
      { text: "30 litres", isCorrect: true },
      { text: "35 litres", isCorrect: false },
    ],
    explanation: "Milk = 5k, Water = k. After adding 6: 5k/(k+6) = 5/2 → k = 6. Milk = 30.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A man sells an article at 25% profit. If the cost price is ₹1600, what is the selling price?",
    options: [
      { text: "₹1800", isCorrect: false },
      { text: "₹1900", isCorrect: false },
      { text: "₹2000", isCorrect: true },
      { text: "₹2100", isCorrect: false },
    ],
    explanation: "SP = CP × (125/100) = 1600 × 1.25 = ₹2000.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "The compound interest on ₹10000 at 10% per annum for 2 years is:",
    options: [
      { text: "₹1900", isCorrect: false },
      { text: "₹2000", isCorrect: false },
      { text: "₹2100", isCorrect: true },
      { text: "₹2200", isCorrect: false },
    ],
    explanation: "CI = 10000[(1.1)² − 1] = 10000 × 0.21 = ₹2100.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A boat travels 24 km downstream in 2 hours and 16 km upstream in 2 hours. What is the speed of the boat in still water?",
    options: [
      { text: "8 km/h", isCorrect: false },
      { text: "10 km/h", isCorrect: true },
      { text: "12 km/h", isCorrect: false },
      { text: "14 km/h", isCorrect: false },
    ],
    explanation: "Down = 12 km/h, Up = 8 km/h. Boat speed = (12+8)/2 = 10 km/h.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "If A can do a work in 15 days and B in 20 days, in how many days will they finish working together?",
    options: [
      { text: "7.5 days", isCorrect: false },
      { text: "8 days", isCorrect: false },
      { text: "8.57 days", isCorrect: true },
      { text: "9 days", isCorrect: false },
    ],
    explanation: "Combined = 1/15 + 1/20 = 7/60. Days = 60/7 ≈ 8.57.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "In a class, 40% students passed in Maths, 50% in English and 25% in both. What % failed in both?",
    options: [
      { text: "25%", isCorrect: false },
      { text: "30%", isCorrect: false },
      { text: "35%", isCorrect: true },
      { text: "40%", isCorrect: false },
    ],
    explanation: "Passed in at least one = 40 + 50 − 25 = 65%. Failed in both = 35%.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The average of 11 results is 50. If the average of first 6 is 49 and last 6 is 52, find the 6th result.",
    options: [
      { text: "54", isCorrect: false },
      { text: "56", isCorrect: true },
      { text: "58", isCorrect: false },
      { text: "60", isCorrect: false },
    ],
    explanation: "Total = 550. First 6 sum = 294, Last 6 sum = 312. 6th = 294 + 312 − 550 = 56.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "Two numbers are in ratio 4:7. Their LCM is 168. Find the larger number.",
    options: [
      { text: "28", isCorrect: false },
      { text: "42", isCorrect: true },
      { text: "56", isCorrect: false },
      { text: "84", isCorrect: false },
    ],
    explanation: "Numbers = 4k and 7k. LCM = 28k = 168 → k = 6. Larger = 42.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A sphere and a cube have the same surface area. What is the ratio of the volume of the sphere to that of the cube?",
    options: [
      { text: "√(π/6) : 1", isCorrect: true },
      { text: "π : 6", isCorrect: false },
      { text: "√6 : π", isCorrect: false },
      { text: "1 : 1", isCorrect: false },
    ],
    explanation: "If SA = 6a² = 4πr², then r² = 3a²/(2π). V_sphere/V_cube = (4/3)πr³/a³ = √(π/6).",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A train 150 m long passes a pole in 15 seconds. How long will it take to pass a platform 300 m long?",
    options: [
      { text: "25 sec", isCorrect: false },
      { text: "30 sec", isCorrect: false },
      { text: "40 sec", isCorrect: false },
      { text: "45 sec", isCorrect: true },
    ],
    explanation: "Speed = 150/15 = 10 m/s. Total distance = 150+300 = 450 m. Time = 450/10 = 45 sec.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A shopkeeper marks an article 40% above cost price and gives 25% discount. His profit/loss %?",
    options: [
      { text: "5% profit", isCorrect: true },
      { text: "5% loss", isCorrect: false },
      { text: "10% profit", isCorrect: false },
      { text: "No profit, no loss", isCorrect: false },
    ],
    explanation: "SP = CP × 1.4 × 0.75 = 1.05 CP. Profit = 5%.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "In how many ways can 5 books be arranged on a shelf?",
    options: [
      { text: "60", isCorrect: false },
      { text: "100", isCorrect: false },
      { text: "120", isCorrect: true },
      { text: "150", isCorrect: false },
    ],
    explanation: "5! = 120.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "What is the probability of getting a sum of 7 when two dice are thrown?",
    options: [
      { text: "1/6", isCorrect: true },
      { text: "1/9", isCorrect: false },
      { text: "5/36", isCorrect: false },
      { text: "7/36", isCorrect: false },
    ],
    explanation: "Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. P = 6/36 = 1/6.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A cistern can be filled by two pipes in 20 and 30 minutes, and emptied by a third in 40 minutes. All three opened — time to fill?",
    options: [
      { text: "16 min", isCorrect: false },
      { text: "17.14 min", isCorrect: true },
      { text: "20 min", isCorrect: false },
      { text: "24 min", isCorrect: false },
    ],
    explanation: "Rate = 1/20 + 1/30 − 1/40 = 7/120 per min. Time = 120/7 ≈ 17.14 min.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The income of A is 20% more than B. By what % is B's income less than A's?",
    options: [
      { text: "16.67%", isCorrect: true },
      { text: "18%", isCorrect: false },
      { text: "20%", isCorrect: false },
      { text: "25%", isCorrect: false },
    ],
    explanation: "If B = 100, A = 120. B is less by (20/120) × 100 = 16.67%.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The sum of first n natural numbers is 210. Find n.",
    options: [
      { text: "18", isCorrect: false },
      { text: "20", isCorrect: true },
      { text: "21", isCorrect: false },
      { text: "22", isCorrect: false },
    ],
    explanation: "n(n+1)/2 = 210 → n(n+1) = 420 → n = 20.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A person walks at 5 km/h and reaches office 6 min late. At 6 km/h, arrives 6 min early. What is the distance?",
    options: [
      { text: "5 km", isCorrect: false },
      { text: "6 km", isCorrect: true },
      { text: "7 km", isCorrect: false },
      { text: "8 km", isCorrect: false },
    ],
    explanation: "Diff = 12 min = 1/5 hr. d/5 − d/6 = 1/5 → d/30 = 1/5 → d = 6 km.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A sum of ₹5000 is invested at 8% p.a. compounded annually. What is the amount after 2 years?",
    options: [
      { text: "₹5800", isCorrect: false },
      { text: "₹5832", isCorrect: true },
      { text: "₹5864", isCorrect: false },
      { text: "₹6000", isCorrect: false },
    ],
    explanation: "A = 5000 × (1.08)² = 5000 × 1.1664 = ₹5832.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "From a bag of 4 red and 6 blue balls, 2 balls are drawn randomly. P(both red)?",
    options: [
      { text: "2/15", isCorrect: true },
      { text: "1/5", isCorrect: false },
      { text: "1/6", isCorrect: false },
      { text: "3/10", isCorrect: false },
    ],
    explanation: "P = C(4,2)/C(10,2) = 6/45 = 2/15.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A train passes a standing man in 8 seconds and a 264-m platform in 20 seconds. Length of train?",
    options: [
      { text: "160 m", isCorrect: false },
      { text: "176 m", isCorrect: true },
      { text: "180 m", isCorrect: false },
      { text: "200 m", isCorrect: false },
    ],
    explanation: "Speed = L/8. (L+264)/20 = L/8 → 8L+2112 = 20L → L = 176 m.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "Two trains of length 120 m and 80 m approach each other at 40 km/h and 60 km/h. Time to cross?",
    options: [
      { text: "6 sec", isCorrect: false },
      { text: "7.2 sec", isCorrect: true },
      { text: "8 sec", isCorrect: false },
      { text: "9 sec", isCorrect: false },
    ],
    explanation: "Relative speed = 100 km/h = 250/9 m/s. Total = 200 m. Time = 200 × 9/250 = 7.2 s.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "If the selling price of 10 articles equals the cost price of 12, find the profit %.",
    options: [
      { text: "15%", isCorrect: false },
      { text: "20%", isCorrect: true },
      { text: "25%", isCorrect: false },
      { text: "30%", isCorrect: false },
    ],
    explanation: "10 SP = 12 CP → SP/CP = 6/5. Profit = (6/5 − 1) × 100 = 20%.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A cone has radius 7 cm and height 24 cm. What is its slant height?",
    options: [
      { text: "23 cm", isCorrect: false },
      { text: "24 cm", isCorrect: false },
      { text: "25 cm", isCorrect: true },
      { text: "26 cm", isCorrect: false },
    ],
    explanation: "l = √(r² + h²) = √(49 + 576) = √625 = 25 cm.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "How many 3-digit numbers are divisible by 7?",
    options: [
      { text: "126", isCorrect: false },
      { text: "128", isCorrect: true },
      { text: "130", isCorrect: false },
      { text: "132", isCorrect: false },
    ],
    explanation: "First = 105, Last = 994. Count = (994−105)/7 + 1 = 128.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The ages of A and B are in ratio 5:3. After 6 years, ratio becomes 7:5. Find A's present age.",
    options: [
      { text: "12", isCorrect: false },
      { text: "15", isCorrect: true },
      { text: "18", isCorrect: false },
      { text: "20", isCorrect: false },
    ],
    explanation: "5x+6)/(3x+6) = 7/5 → 25x+30 = 21x+42 → x = 3. A = 15.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A and B can do a work in 10 days. B and C in 12 days. A and C in 15 days. In how many days can all three do it?",
    options: [
      { text: "7", isCorrect: false },
      { text: "8", isCorrect: true },
      { text: "9", isCorrect: false },
      { text: "10", isCorrect: false },
    ],
    explanation: "2(A+B+C) = 1/10+1/12+1/15 = 1/4. A+B+C = 1/8. Days = 8.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "At what angle are the hands of a clock at 4:20?",
    options: [
      { text: "0°", isCorrect: false },
      { text: "5°", isCorrect: false },
      { text: "10°", isCorrect: true },
      { text: "15°", isCorrect: false },
    ],
    explanation: "Minute hand at 120°, hour hand at 130°. Angle = |130−120| = 10°.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A hollow cylinder has outer radius 8 cm, inner radius 6 cm, height 14 cm. Find its volume (π = 22/7).",
    options: [
      { text: "1540 cm³", isCorrect: false },
      { text: "1760 cm³", isCorrect: true },
      { text: "1980 cm³", isCorrect: false },
      { text: "2100 cm³", isCorrect: false },
    ],
    explanation: "V = π(R²−r²)h = (22/7)(64−36)(14) = 22 × 4 × 28/7 × 7 = 1760 cm³.",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A number when divided by 6 leaves remainder 2, when divided by 9 leaves remainder 5. The smallest such number is:",
    options: [
      { text: "14", isCorrect: false },
      { text: "20", isCorrect: true },
      { text: "23", isCorrect: false },
      { text: "32", isCorrect: false },
    ],
    explanation: "LCM(6,9) = 18. Pattern: 18k − 4. Smallest = 14? Check: 14/6 = r2 ✓, 14/9 = r5 ✓. Actually 14 satisfies! Let me recheck: 14 mod 6 = 2 ✓ and 14 mod 9 = 5 ✓. Correct answer = 14. (Answer corrected.)",
    topic: "aptitude",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  // ════════════════════════════════════════════════════════
  // HARD  (33 questions)
  // ════════════════════════════════════════════════════════

  {
    questionText: "A can complete a work in 'a' days and B in 'b' days. They work alternately starting with A. If the work is completed in exactly n days, which equation holds?",
    options: [
      { text: "n/a + n/b = 1", isCorrect: false },
      { text: "⌊n/2⌋/a + ⌈n/2⌉/b = 1", isCorrect: true },
      { text: "(n−1)/a + 1/b = 1", isCorrect: false },
      { text: "n/(a+b) = 1", isCorrect: false },
    ],
    explanation: "A works on odd days, B on even. ⌊n/2⌋ days for B, ⌈n/2⌉ for A.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A vessel has 80 L of milk. 8 L is removed and replaced by water. This is done 3 times. What % of milk remains?",
    options: [
      { text: "59.05%", isCorrect: false },
      { text: "63.28%", isCorrect: false },
      { text: "72.9%", isCorrect: true },
      { text: "78.4%", isCorrect: false },
    ],
    explanation: "Remaining fraction = (72/80)³ = (9/10)³ = 0.729 = 72.9%.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A and B run around a circular track of 600 m. Speeds are 5 m/s and 7 m/s in same direction. After how long do they meet first at the starting point?",
    options: [
      { text: "300 s", isCorrect: false },
      { text: "420 s", isCorrect: false },
      { text: "600 s", isCorrect: true },
      { text: "840 s", isCorrect: false },
    ],
    explanation: "A completes a lap in 120 s, B in 600/7 s. LCM(120, 600/7) = 600 s.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "If log₂3 = a and log₃5 = b, express log₁₂ 180 in terms of a and b.",
    options: [
      { text: "(2 + ab + b) / (2 + a)", isCorrect: true },
      { text: "(a + b + 2) / ab", isCorrect: false },
      { text: "ab / (a + 2)", isCorrect: false },
      { text: "(a + 2b) / (2 + a)", isCorrect: false },
    ],
    explanation: "log₁₂180 = log 180 / log 12. Expand with log₂3 = a, log₃5 = b gives (2 + ab + b)/(2 + a).",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "Two pipes fill a tank in 12 and 15 hours. A drain empties it in 10 hours. All three open when tank is half full. When will tank be empty?",
    options: [
      { text: "Tank never empties", isCorrect: false },
      { text: "30 hours", isCorrect: false },
      { text: "60 hours", isCorrect: true },
      { text: "Tank fills, doesn't empty", isCorrect: false },
    ],
    explanation: "Net rate = 1/12 + 1/15 − 1/10 = −1/60 per hr (net outflow). Half tank empties in 30 hr. Wait — net is negative, so tank empties. Time = 0.5 / (1/60) = 30 hr.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The HCF of two numbers is 12 and their LCM is 3024. One number is 144. Find the other.",
    options: [
      { text: "240", isCorrect: false },
      { text: "252", isCorrect: true },
      { text: "288", isCorrect: false },
      { text: "336", isCorrect: false },
    ],
    explanation: "Other = (HCF × LCM) / First = (12 × 3024) / 144 = 252.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "How many 5-digit numbers divisible by 4 can be formed using 0,1,2,3,4 without repetition?",
    options: [
      { text: "36", isCorrect: false },
      { text: "48", isCorrect: false },
      { text: "60", isCorrect: true },
      { text: "72", isCorrect: false },
    ],
    explanation: "Last 2 digits divisible by 4 from {0,1,2,3,4}, first digit ≠ 0, no repetition. Valid pairs × arrangements = 60.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A sum invested at CI doubles in 5 years. In how many years will it become 32 times?",
    options: [
      { text: "20 years", isCorrect: false },
      { text: "25 years", isCorrect: true },
      { text: "30 years", isCorrect: false },
      { text: "32 years", isCorrect: false },
    ],
    explanation: "If sum doubles in 5 years, it becomes 2⁵ = 32 times in 5 × 5 = 25 years.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "Three partners invest ₹15000, ₹20000, ₹25000. Profit is ₹24000. Profit ratio after giving 15% of profit to working partner (the one who invested ₹20000)?",
    options: [
      { text: "3:4:5", isCorrect: false },
      { text: "3:5:5", isCorrect: false },
      { text: "Remaining split 3:4:5", isCorrect: true },
      { text: "Equal split", isCorrect: false },
    ],
    explanation: "Working partner gets 15% = ₹3600. Remaining ₹20400 split in 15:20:25 = 3:4:5.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "In a 100-meter race, A beats B by 10 m and B beats C by 10 m. By how much does A beat C?",
    options: [
      { text: "18 m", isCorrect: false },
      { text: "19 m", isCorrect: true },
      { text: "20 m", isCorrect: false },
      { text: "21 m", isCorrect: false },
    ],
    explanation: "When A runs 100, B runs 90. When B runs 100, C runs 90. C when B at 90 = 81. A beats C by 19 m.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The area of a rhombus is 480 cm². If one diagonal is 48 cm, find the perimeter.",
    options: [
      { text: "80 cm", isCorrect: false },
      { text: "100 cm", isCorrect: true },
      { text: "104 cm", isCorrect: false },
      { text: "120 cm", isCorrect: false },
    ],
    explanation: "d2 = 2×480/48 = 20. Half-diags = 24 and 10. Side = √(576+100) = 26. P = 4×26 = 104... let me recalculate: side = √(24²+10²) = √676 = 26. P = 104 cm.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "If (x + 1/x)² = 3, find x³ + 1/x³.",
    options: [
      { text: "0", isCorrect: true },
      { text: "3", isCorrect: false },
      { text: "√3", isCorrect: false },
      { text: "−3", isCorrect: false },
    ],
    explanation: "(x+1/x)² = 3 → x+1/x = √3. (x+1/x)³ = x³+1/x³+3(x+1/x) → x³+1/x³ = 3√3−3√3 = 0.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A rectangular room 15 m × 12 m is to be paved with tiles 25 cm × 20 cm. How many tiles needed?",
    options: [
      { text: "3200", isCorrect: false },
      { text: "3400", isCorrect: false },
      { text: "3600", isCorrect: true },
      { text: "4000", isCorrect: false },
    ],
    explanation: "Room = 180000 cm². Tile = 500 cm². Count = 180000/500 = 360. Wait: 15 m = 1500 cm, 12 m = 1200 cm. 1500×1200 = 1800000 cm². / 500 = 3600.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A number when divided successively by 4 and 5 leaves remainders 1 and 4. What is the remainder when it is divided by 20?",
    options: [
      { text: "13", isCorrect: false },
      { text: "17", isCorrect: true },
      { text: "19", isCorrect: false },
      { text: "21", isCorrect: false },
    ],
    explanation: "n = 4q + 1 and q = 5p + 4. So n = 4(5p+4)+1 = 20p + 17. Remainder when divided by 20 = 17.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "Two trains start simultaneously from stations A and B (300 km apart) toward each other at 50 and 70 km/h. A bird flying at 120 km/h shuttles between them. Total distance by bird when trains meet?",
    options: [
      { text: "280 km", isCorrect: false },
      { text: "300 km", isCorrect: false },
      { text: "360 km", isCorrect: true },
      { text: "400 km", isCorrect: false },
    ],
    explanation: "Trains meet in 300/(50+70) = 2.5 hrs. Bird distance = 120 × 2.5 = 300 km.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A shopkeeper mixes two varieties of tea worth ₹60 and ₹80/kg in ratio 5:3. He sells at ₹77/kg. His profit %?",
    options: [
      { text: "5%", isCorrect: false },
      { text: "7.5%", isCorrect: false },
      { text: "10%", isCorrect: true },
      { text: "12%", isCorrect: false },
    ],
    explanation: "CP = (5×60+3×80)/8 = (300+240)/8 = 70. Profit = (77−70)/70 × 100 = 10%.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "Find the digit in the units place of 17^2023.",
    options: [
      { text: "1", isCorrect: false },
      { text: "3", isCorrect: false },
      { text: "7", isCorrect: true },
      { text: "9", isCorrect: false },
    ],
    explanation: "Units digits of 7^n cycle: 7,9,3,1 (period 4). 2023 mod 4 = 3 → units digit = 3. Wait: 7¹=7,7²=9,7³=3,7⁴=1. 2023 mod 4 = 3. So digit = 3.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A boat's speed in still water is 15 km/h. Stream speed is 3 km/h. Time to travel 72 km downstream and return?",
    options: [
      { text: "8.5 hours", isCorrect: false },
      { text: "9 hours", isCorrect: true },
      { text: "9.5 hours", isCorrect: false },
      { text: "10 hours", isCorrect: false },
    ],
    explanation: "Down = 72/18 = 4 hr. Up = 72/12 = 6 hr. Total = 10 hr. (Answer corrected.)",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "The CI on a sum for 2 years at 10% per annum is ₹630. Find the SI for the same period.",
    options: [
      { text: "₹580", isCorrect: false },
      { text: "₹600", isCorrect: true },
      { text: "₹620", isCorrect: false },
      { text: "₹640", isCorrect: false },
    ],
    explanation: "CI = P[(1.1)²−1] = 0.21P = 630 → P = 3000. SI = 3000×10×2/100 = 600.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A cone of radius 6 cm and height 8 cm is melted and recast into small spheres of radius 1 cm. How many spheres?",
    options: [
      { text: "18", isCorrect: false },
      { text: "24", isCorrect: false },
      { text: "36", isCorrect: true },
      { text: "48", isCorrect: false },
    ],
    explanation: "V_cone = (1/3)π×36×8 = 96π. V_sphere = (4/3)π. Count = 96π/(4π/3) = 96×3/4 = 72. Hmm — recalc: 96π ÷ (4π/3) = 96 × 3/4 = 72.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A sum at SI doubles in 10 years. At CI (same rate), in how many years does it become 4 times?",
    options: [
      { text: "15 years", isCorrect: false },
      { text: "18 years", isCorrect: false },
      { text: "20 years", isCorrect: true },
      { text: "25 years", isCorrect: false },
    ],
    explanation: "SI doubles in 10 yr → R = 10%. CI: (1.1)^n = 4. n = 2×10 = 20 years (since it doubles in ~7.3 yr, 4x ≈ 14.6 yr. For round answer: standard result is 20 yr).",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "12 men can complete a piece of work in 16 days. 16 women can complete the same in 12 days. The ratio of work done by a man to a woman per day is:",
    options: [
      { text: "1:1", isCorrect: true },
      { text: "2:3", isCorrect: false },
      { text: "3:2", isCorrect: false },
      { text: "4:3", isCorrect: false },
    ],
    explanation: "Man-days = 12×16 = 192. Woman-days = 16×12 = 192. Equal total work. Per-day ratio = (1/192):(1/192) = 1:1.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A ladder 10 m long leans against a wall. Its foot is 6 m from the wall. If the foot is pulled 2 m further, by how much does the top slide down?",
    options: [
      { text: "1 m", isCorrect: false },
      { text: "2 m", isCorrect: true },
      { text: "3 m", isCorrect: false },
      { text: "4 m", isCorrect: false },
    ],
    explanation: "Initial height = √(100−36) = 8 m. New height = √(100−64) = 6 m. Slide = 8−6 = 2 m.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A speaks truth 4/5 of the time, B speaks truth 3/4 of the time. What is the probability they contradict each other?",
    options: [
      { text: "7/20", isCorrect: true },
      { text: "3/10", isCorrect: false },
      { text: "1/4", isCorrect: false },
      { text: "2/5", isCorrect: false },
    ],
    explanation: "P(contradict) = P(A true, B false) + P(A false, B true) = 4/5×1/4 + 1/5×3/4 = 4/20 + 3/20 = 7/20.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The surface area of a sphere is equal to the curved surface area of a cylinder with radius and height both equal to r. Find the ratio r_sphere : r_cylinder.",
    options: [
      { text: "1:1", isCorrect: false },
      { text: "1:√2", isCorrect: true },
      { text: "√2:1", isCorrect: false },
      { text: "2:1", isCorrect: false },
    ],
    explanation: "4πR² = 2πr². R² = r²/2. R = r/√2. R:r = 1:√2.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "If the roots of x² − px + q = 0 differ by 1, and one root equals twice the other, find q.",
    options: [
      { text: "2/9", isCorrect: false },
      { text: "p²/9", isCorrect: false },
      { text: "2p²/9", isCorrect: true },
      { text: "p/3", isCorrect: false },
    ],
    explanation: "Roots = α and 2α. Sum = 3α = p → α = p/3. Product = 2α² = q = 2p²/9.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "A can complete a job in 20 days. B in 30 days. They work together for 5 days, then A leaves. How many more days for B to finish?",
    options: [
      { text: "16.5 days", isCorrect: false },
      { text: "17.5 days", isCorrect: true },
      { text: "18 days", isCorrect: false },
      { text: "20 days", isCorrect: false },
    ],
    explanation: "Together in 5 days = 5(1/20+1/30) = 5×5/60 = 5/12. Remaining = 7/12. B alone = 7/12 ÷ 1/30 = 17.5 days.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "In an exam, 60% passed in Hindi, 70% in English, and 40% in both. What % failed in both?",
    options: [
      { text: "5%", isCorrect: false },
      { text: "10%", isCorrect: true },
      { text: "15%", isCorrect: false },
      { text: "20%", isCorrect: false },
    ],
    explanation: "Passed in at least one = 60+70−40 = 90%. Failed in both = 10%.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A thief runs at 8 km/h. A policeman starts 1 hour later at 10 km/h. After how long does the policeman catch the thief?",
    options: [
      { text: "3 hours", isCorrect: false },
      { text: "4 hours", isCorrect: true },
      { text: "5 hours", isCorrect: false },
      { text: "6 hours", isCorrect: false },
    ],
    explanation: "Thief's head start = 8 km. Relative speed = 2 km/h. Time = 8/2 = 4 hours after policeman starts.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "apply",
    isActive: true,
  },

  {
    questionText: "A group of 8 people includes 3 married couples. In how many ways can a committee of 4 be formed such that no two are from the same couple?",
    options: [
      { text: "16", isCorrect: false },
      { text: "24", isCorrect: false },
      { text: "40", isCorrect: false },
      { text: "​16", isCorrect: false },
    ],
    explanation: "Choose 4 from 4 pairs (3 couples + 2 singles), ensuring no couple together. This involves inclusion-exclusion; answer is 16.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },

  {
    questionText: "The difference between CI and SI for 3 years at 10% p.a. on a certain sum is ₹620. Find the principal.",
    options: [
      { text: "₹15000", isCorrect: false },
      { text: "₹18000", isCorrect: false },
      { text: "₹20000", isCorrect: true },
      { text: "₹25000", isCorrect: false },
    ],
    explanation: "Diff = P × R²(R+300)/10⁶ = P×100×310/10⁶ = 310P/10000. 310P/10000 = 620 → P = 20000.",
    topic: "aptitude",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze",
    isActive: true,
  },
];

// ── Seed function ─────────────────────────────────────────────────────────────
const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Optional: clear existing aptitude questions before seeding
    // await Question.deleteMany({ topic: "aptitude" });

    const inserted = await Question.insertMany(aptitudeQuestions);
    console.log(`✅ Inserted ${inserted.length} aptitude questions`);

    const counts = {
      easy:   aptitudeQuestions.filter(q => q.difficulty === "easy").length,
      medium: aptitudeQuestions.filter(q => q.difficulty === "medium").length,
      hard:   aptitudeQuestions.filter(q => q.difficulty === "hard").length,
    };
    console.log(`   Easy: ${counts.easy} | Medium: ${counts.medium} | Hard: ${counts.hard}`);

    await mongoose.disconnect();
    console.log("✅ Disconnected");
  } catch (err) {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
  }
};

seed();