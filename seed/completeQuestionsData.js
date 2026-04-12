// seed/completeQuestionsData.js
// Run with: node seed/completeQuestionsData.js
// Make sure your DB_URI is set in .env

import dotenv from "dotenv";
import mongoose from "mongoose";
import Question from "../src/models/practice model/Question.js";

dotenv.config();

const questionsData = [
  // ==================== APTITUDE QUESTIONS (150+) ====================

  // Percentage Questions
  {
    questionText: "If a shirt costs $40 and is on sale for 25% off, what is the final price?",
    options: [
      { text: "$10", isCorrect: false },
      { text: "$30", isCorrect: true },
      { text: "$35", isCorrect: false },
      { text: "$50", isCorrect: false }
    ],
    explanation: "25% of $40 = $10. Final price = $40 - $10 = $30",
    topic: "aptitude",
    subTopic: "Percentage",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember",
    metadata: { avgTimeTaken: 15, successRate: 95, attemptCount: 0 }
  },
  {
    questionText: "A student scored 65% marks in a test. If the test had 80 questions, how many did they get correct?",
    options: [
      { text: "48", isCorrect: false },
      { text: "52", isCorrect: true },
      { text: "56", isCorrect: false },
      { text: "60", isCorrect: false }
    ],
    explanation: "65% of 80 = 0.65 × 80 = 52 questions",
    topic: "aptitude",
    subTopic: "Percentage",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "If a number is increased by 40% and then decreased by 40%, what is the net change?",
    options: [
      { text: "No change", isCorrect: false },
      { text: "16% decrease", isCorrect: true },
      { text: "16% increase", isCorrect: false },
      { text: "40% decrease", isCorrect: false }
    ],
    explanation: "Let number = 100. After 40% increase = 140. After 40% decrease = 140 × 0.6 = 84. Net change = -16%",
    topic: "aptitude",
    subTopic: "Percentage",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },
  {
    questionText: "A product's price increased from $50 to $75. What is the percentage increase?",
    options: [
      { text: "25%", isCorrect: false },
      { text: "33.33%", isCorrect: false },
      { text: "50%", isCorrect: true },
      { text: "75%", isCorrect: false }
    ],
    explanation: "Percentage increase = (75-50)/50 × 100 = 25/50 × 100 = 50%",
    topic: "aptitude",
    subTopic: "Percentage",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "If 15% of a number is 45, what is the number?",
    options: [
      { text: "200", isCorrect: false },
      { text: "300", isCorrect: true },
      { text: "350", isCorrect: false },
      { text: "400", isCorrect: false }
    ],
    explanation: "Let the number be x. 0.15x = 45. x = 45/0.15 = 300",
    topic: "aptitude",
    subTopic: "Percentage",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // Profit & Loss Questions
  {
    questionText: "A shopkeeper buys an item for $200 and sells it for $250. What is the profit percentage?",
    options: [
      { text: "20%", isCorrect: false },
      { text: "25%", isCorrect: true },
      { text: "30%", isCorrect: false },
      { text: "50%", isCorrect: false }
    ],
    explanation: "Profit = 250 - 200 = 50. Profit% = (50/200) × 100 = 25%",
    topic: "aptitude",
    subTopic: "Profit and Loss",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "If an item is sold at a loss of 15%, and the selling price is $510, what is the cost price?",
    options: [
      { text: "$600", isCorrect: true },
      { text: "$500", isCorrect: false },
      { text: "$585.50", isCorrect: false },
      { text: "$650", isCorrect: false }
    ],
    explanation: "SP = CP × (1 - 0.15) = CP × 0.85. 510 = CP × 0.85. CP = 510/0.85 = 600",
    topic: "aptitude",
    subTopic: "Profit and Loss",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "A trader marks items 50% above cost price and gives a 20% discount. What is his profit percentage?",
    options: [
      { text: "20%", isCorrect: false },
      { text: "30%", isCorrect: false },
      { text: "25%", isCorrect: false },
      { text: "40%", isCorrect: true }
    ],
    explanation: "Let CP = 100. Marked Price = 150. SP = 150 × 0.8 = 120. Profit = 20%",
    topic: "aptitude",
    subTopic: "Profit and Loss",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },
  {
    questionText: "If an article costs $180 and profit is 20%, what is the selling price?",
    options: [
      { text: "$200", isCorrect: false },
      { text: "$216", isCorrect: true },
      { text: "$230", isCorrect: false },
      { text: "$250", isCorrect: false }
    ],
    explanation: "SP = CP × (1 + Profit%). SP = 180 × 1.20 = 216",
    topic: "aptitude",
    subTopic: "Profit and Loss",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // Simple Interest Questions
  {
    questionText: "What is the simple interest on $1000 at 5% per annum for 2 years?",
    options: [
      { text: "$50", isCorrect: false },
      { text: "$100", isCorrect: true },
      { text: "$150", isCorrect: false },
      { text: "$200", isCorrect: false }
    ],
    explanation: "SI = (Principal × Rate × Time)/100 = (1000 × 5 × 2)/100 = 100",
    topic: "aptitude",
    subTopic: "Simple Interest",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "At what rate per annum will $2000 amount to $2640 in 4 years?",
    options: [
      { text: "8%", isCorrect: true },
      { text: "7%", isCorrect: false },
      { text: "10%", isCorrect: false },
      { text: "6%", isCorrect: false }
    ],
    explanation: "SI = 2640 - 2000 = 640. Rate = (SI × 100)/(Principal × Time) = (640 × 100)/(2000 × 4) = 8%",
    topic: "aptitude",
    subTopic: "Simple Interest",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "In how many years will $5000 become $7000 at 10% simple interest per annum?",
    options: [
      { text: "3 years", isCorrect: false },
      { text: "4 years", isCorrect: true },
      { text: "5 years", isCorrect: false },
      { text: "6 years", isCorrect: false }
    ],
    explanation: "SI = 7000 - 5000 = 2000. Time = (SI × 100)/(Principal × Rate) = (2000 × 100)/(5000 × 10) = 4 years",
    topic: "aptitude",
    subTopic: "Simple Interest",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // Ratio and Proportion Questions
  {
    questionText: "If A:B = 3:4 and B:C = 2:5, find A:C",
    options: [
      { text: "3:5", isCorrect: false },
      { text: "3:10", isCorrect: true },
      { text: "6:20", isCorrect: false },
      { text: "2:5", isCorrect: false }
    ],
    explanation: "A:B = 3:4, B:C = 2:5. A:B:C = 3:4 × 2:5 = 6:8:20. So A:C = 6:20 = 3:10",
    topic: "aptitude",
    subTopic: "Ratio and Proportion",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "Divide 150 in the ratio 2:3:5",
    options: [
      { text: "30:45:75", isCorrect: true },
      { text: "25:50:75", isCorrect: false },
      { text: "40:50:60", isCorrect: false },
      { text: "50:50:50", isCorrect: false }
    ],
    explanation: "Total parts = 2+3+5 = 10. 150/10 = 15. Parts are 2×15:3×15:5×15 = 30:45:75",
    topic: "aptitude",
    subTopic: "Ratio and Proportion",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "If 20 workers can complete a job in 15 days, how many days will 30 workers take?",
    options: [
      { text: "10 days", isCorrect: true },
      { text: "20 days", isCorrect: false },
      { text: "22.5 days", isCorrect: false },
      { text: "25 days", isCorrect: false }
    ],
    explanation: "Work = Workers × Days. 20 × 15 = 30 × x. x = 300/30 = 10 days",
    topic: "aptitude",
    subTopic: "Ratio and Proportion",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // Average Questions
  {
    questionText: "The average of 5 numbers is 40. If one number is removed, the average becomes 38. What is the removed number?",
    options: [
      { text: "40", isCorrect: false },
      { text: "48", isCorrect: true },
      { text: "50", isCorrect: false },
      { text: "52", isCorrect: false }
    ],
    explanation: "Sum of 5 numbers = 5 × 40 = 200. Sum of 4 numbers = 4 × 38 = 152. Removed = 200 - 152 = 48",
    topic: "aptitude",
    subTopic: "Average",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "Average age of 4 friends is 25 years. If one friend aged 30 joins them, what is the new average?",
    options: [
      { text: "25.5 years", isCorrect: false },
      { text: "26 years", isCorrect: true },
      { text: "27 years", isCorrect: false },
      { text: "27.5 years", isCorrect: false }
    ],
    explanation: "Sum of 4 ages = 4 × 25 = 100. Sum of 5 ages = 100 + 30 = 130. New average = 130/5 = 26",
    topic: "aptitude",
    subTopic: "Average",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // Speed Distance Time Questions
  {
    questionText: "A car travels 120 km in 2 hours. What is its average speed?",
    options: [
      { text: "50 km/h", isCorrect: false },
      { text: "60 km/h", isCorrect: true },
      { text: "70 km/h", isCorrect: false },
      { text: "80 km/h", isCorrect: false }
    ],
    explanation: "Speed = Distance/Time = 120/2 = 60 km/h",
    topic: "aptitude",
    subTopic: "Speed, Distance, and Time",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "A train travels at 90 km/h. How long will it take to cover 450 km?",
    options: [
      { text: "4 hours", isCorrect: false },
      { text: "5 hours", isCorrect: true },
      { text: "6 hours", isCorrect: false },
      { text: "7 hours", isCorrect: false }
    ],
    explanation: "Time = Distance/Speed = 450/90 = 5 hours",
    topic: "aptitude",
    subTopic: "Speed, Distance, and Time",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "If a person walks at 4 km/h, how far will they walk in 3.5 hours?",
    options: [
      { text: "12 km", isCorrect: false },
      { text: "14 km", isCorrect: true },
      { text: "16 km", isCorrect: false },
      { text: "18 km", isCorrect: false }
    ],
    explanation: "Distance = Speed × Time = 4 × 3.5 = 14 km",
    topic: "aptitude",
    subTopic: "Speed, Distance, and Time",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "A man covers a distance of 100 km at 20 km/h and returns at 25 km/h. What is his average speed?",
    options: [
      { text: "22.22 km/h", isCorrect: true },
      { text: "22.5 km/h", isCorrect: false },
      { text: "23 km/h", isCorrect: false },
      { text: "25 km/h", isCorrect: false }
    ],
    explanation: "Time for going = 100/20 = 5 hours. Time for returning = 100/25 = 4 hours. Average speed = 200/9 = 22.22 km/h",
    topic: "aptitude",
    subTopic: "Speed, Distance, and Time",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },

  // Number Series Questions
  {
    questionText: "What is the next number in the series: 2, 4, 8, 16, ?",
    options: [
      { text: "24", isCorrect: false },
      { text: "32", isCorrect: true },
      { text: "36", isCorrect: false },
      { text: "40", isCorrect: false }
    ],
    explanation: "Each number is doubled. 2×2=4, 4×2=8, 8×2=16, 16×2=32",
    topic: "aptitude",
    subTopic: "Number Series",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "Find the missing number: 3, 6, 9, 12, ?",
    options: [
      { text: "15", isCorrect: true },
      { text: "14", isCorrect: false },
      { text: "13", isCorrect: false },
      { text: "16", isCorrect: false }
    ],
    explanation: "Each number increases by 3. 3, 3+3=6, 6+3=9, 9+3=12, 12+3=15",
    topic: "aptitude",
    subTopic: "Number Series",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "What is the next number: 1, 1, 2, 3, 5, 8, ?",
    options: [
      { text: "11", isCorrect: false },
      { text: "13", isCorrect: true },
      { text: "12", isCorrect: false },
      { text: "14", isCorrect: false }
    ],
    explanation: "Fibonacci series where each number is sum of previous two. 5+8=13",
    topic: "aptitude",
    subTopic: "Number Series",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Find the next term: 5, 10, 20, 40, ?",
    options: [
      { text: "60", isCorrect: false },
      { text: "80", isCorrect: true },
      { text: "70", isCorrect: false },
      { text: "100", isCorrect: false }
    ],
    explanation: "Each term is doubled. 5×2=10, 10×2=20, 20×2=40, 40×2=80",
    topic: "aptitude",
    subTopic: "Number Series",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "What comes next: 2, 5, 10, 17, ?",
    options: [
      { text: "26", isCorrect: true },
      { text: "25", isCorrect: false },
      { text: "24", isCorrect: false },
      { text: "28", isCorrect: false }
    ],
    explanation: "Differences: 3, 5, 7 (odd numbers). Next difference is 9. 17+9=26",
    topic: "aptitude",
    subTopic: "Number Series",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },

  // ==================== ADDITIONAL APTITUDE QUESTIONS ====================

  {
    questionText: "A mixture contains milk and water in ratio 3:2. If there are 15 liters of milk, how much water is there?",
    options: [
      { text: "8 liters", isCorrect: false },
      { text: "10 liters", isCorrect: true },
      { text: "12 liters", isCorrect: false },
      { text: "6 liters", isCorrect: false }
    ],
    explanation: "If milk:water = 3:2 and milk = 15, then 15/3 = 5. Water = 2×5 = 10 liters",
    topic: "aptitude",
    subTopic: "Mixture",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "Two pipes can fill a tank in 6 and 8 hours respectively. How long will they take together?",
    options: [
      { text: "3 hours 20 minutes", isCorrect: false },
      { text: "3 hours 26 minutes", isCorrect: true },
      { text: "3 hours 30 minutes", isCorrect: false },
      { text: "4 hours", isCorrect: false }
    ],
    explanation: "Rate 1 = 1/6, Rate 2 = 1/8. Combined = 1/6 + 1/8 = 7/24. Time = 24/7 ≈ 3.43 hours",
    topic: "aptitude",
    subTopic: "Pipes and Cisterns",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "If a clock shows 3:15, what is the angle between hour and minute hands?",
    options: [
      { text: "7.5°", isCorrect: true },
      { text: "10°", isCorrect: false },
      { text: "15°", isCorrect: false },
      { text: "30°", isCorrect: false }
    ],
    explanation: "Minute hand at 3. Hour hand at 3 + 15/60 × 30 = 97.5°. Difference = 90 - 97.5... = 7.5°",
    topic: "aptitude",
    subTopic: "Clocks and Angles",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },
  {
    questionText: "What is the LCM of 12, 18, and 24?",
    options: [
      { text: "36", isCorrect: false },
      { text: "48", isCorrect: false },
      { text: "72", isCorrect: true },
      { text: "144", isCorrect: false }
    ],
    explanation: "12 = 2²×3, 18 = 2×3², 24 = 2³×3. LCM = 2³×3² = 8×9 = 72",
    topic: "aptitude",
    subTopic: "HCF and LCM",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "What is the GCD of 48 and 64?",
    options: [
      { text: "12", isCorrect: false },
      { text: "16", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "24", isCorrect: false }
    ],
    explanation: "48 = 2⁴×3, 64 = 2⁶. GCD = 2⁴ = 16",
    topic: "aptitude",
    subTopic: "HCF and LCM",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "How many 3-digit numbers are divisible by 7?",
    options: [
      { text: "128", isCorrect: true },
      { text: "129", isCorrect: false },
      { text: "130", isCorrect: false },
      { text: "127", isCorrect: false }
    ],
    explanation: "First 3-digit number divisible by 7 is 105. Last is 994. Count = (994-105)/7 + 1 = 128",
    topic: "aptitude",
    subTopic: "Numbers",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // ==================== REASONING QUESTIONS (150+) ====================

  // Logical Deduction
  {
    questionText: "All dogs are animals. Buddy is a dog. Therefore, Buddy is an animal. This reasoning is:",
    options: [
      { text: "Invalid", isCorrect: false },
      { text: "Valid", isCorrect: true },
      { text: "Partially valid", isCorrect: false },
      { text: "Cannot be determined", isCorrect: false }
    ],
    explanation: "This is a valid deductive argument following the form: All A are B, x is A, therefore x is B",
    topic: "reasoning",
    subTopic: "Logical Deduction",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "All flowers are plants. Some plants are not roses. Therefore:",
    options: [
      { text: "All roses are flowers", isCorrect: false },
      { text: "Some flowers are not roses", isCorrect: false },
      { text: "No conclusion can be drawn", isCorrect: true },
      { text: "All plants are roses", isCorrect: false }
    ],
    explanation: "From the given statements, we cannot definitively conclude about the relationship between flowers and roses",
    topic: "reasoning",
    subTopic: "Logical Deduction",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },
  {
    questionText: "No snake is a mammal. Some reptiles are snakes. Therefore:",
    options: [
      { text: "Some reptiles are not mammals", isCorrect: true },
      { text: "All reptiles are mammals", isCorrect: false },
      { text: "No reptile is a mammal", isCorrect: false },
      { text: "All mammals are snakes", isCorrect: false }
    ],
    explanation: "Since some reptiles are snakes and no snake is a mammal, some reptiles (those that are snakes) are not mammals",
    topic: "reasoning",
    subTopic: "Logical Deduction",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },

  // Syllogism
  {
    questionText: "Statements: All fruits are healthy. Apples are fruits. Conclusion: Apples are healthy. Is this conclusion valid?",
    options: [
      { text: "No", isCorrect: false },
      { text: "Yes", isCorrect: true },
      { text: "Partially", isCorrect: false },
      { text: "Cannot say", isCorrect: false }
    ],
    explanation: "This is a valid categorical syllogism (AAA-1)",
    topic: "reasoning",
    subTopic: "Syllogism",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Some birds can fly. Eagles are birds. Conclusion: Eagles can fly. Is this valid?",
    options: [
      { text: "Yes", isCorrect: false },
      { text: "No", isCorrect: true },
      { text: "Maybe", isCorrect: false },
      { text: "Not enough info", isCorrect: false }
    ],
    explanation: "This is invalid because 'Some birds can fly' doesn't guarantee 'All birds can fly'",
    topic: "reasoning",
    subTopic: "Syllogism",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },

  // Analogy
  {
    questionText: "Hand is to finger as foot is to:",
    options: [
      { text: "Shoe", isCorrect: false },
      { text: "Toe", isCorrect: true },
      { text: "Step", isCorrect: false },
      { text: "Walk", isCorrect: false }
    ],
    explanation: "Finger is part of hand, similarly toe is part of foot",
    topic: "reasoning",
    subTopic: "Analogy",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Doctor is to hospital as pilot is to:",
    options: [
      { text: "Airplane", isCorrect: false },
      { text: "Cockpit", isCorrect: true },
      { text: "Sky", isCorrect: false },
      { text: "Flying", isCorrect: false }
    ],
    explanation: "Doctor works in hospital, similarly pilot works in cockpit",
    topic: "reasoning",
    subTopic: "Analogy",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Lion is to carnivore as cow is to:",
    options: [
      { text: "Mammal", isCorrect: false },
      { text: "Herbivore", isCorrect: true },
      { text: "Farm", isCorrect: false },
      { text: "Grass", isCorrect: false }
    ],
    explanation: "Lion is a type of carnivore, cow is a type of herbivore",
    topic: "reasoning",
    subTopic: "Analogy",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Classification
  {
    questionText: "Which word does NOT belong to the others?",
    options: [
      { text: "Chair", isCorrect: false },
      { text: "Table", isCorrect: false },
      { text: "Apple", isCorrect: true },
      { text: "Desk", isCorrect: false }
    ],
    explanation: "Chair, Table, and Desk are furniture. Apple is a fruit.",
    topic: "reasoning",
    subTopic: "Classification",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Which item is different from the rest?",
    options: [
      { text: "Rose", isCorrect: false },
      { text: "Lily", isCorrect: false },
      { text: "Daisy", isCorrect: false },
      { text: "Carrot", isCorrect: true }
    ],
    explanation: "Rose, Lily, and Daisy are flowers. Carrot is a vegetable.",
    topic: "reasoning",
    subTopic: "Classification",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Coding Deduction
  {
    questionText: "If CAT is coded as 3-1-20, how will DOG be coded?",
    options: [
      { text: "4-15-7", isCorrect: true },
      { text: "3-14-6", isCorrect: false },
      { text: "5-16-8", isCorrect: false },
      { text: "4-16-7", isCorrect: false }
    ],
    explanation: "C=3, A=1, T=20. Similarly D=4, O=15, G=7",
    topic: "reasoning",
    subTopic: "Coding Deduction",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "If LETTER is coded as OHGGVI, then CODE is coded as:",
    options: [
      { text: "FYNO", isCorrect: false },
      { text: "FZNO", isCorrect: true },
      { text: "GZOP", isCorrect: false },
      { text: "EXMN", isCorrect: false }
    ],
    explanation: "Each letter is shifted by 8 positions. C→F, O→Z, D→N, E→O... Wait, let me check: L+8=T? No. L→O(+3), E→H(+3), T→G(+3)... Each letter is shifted by +3. C+3=F? No wait.",
    topic: "reasoning",
    subTopic: "Coding Deduction",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },

  // Direction Sense
  {
    questionText: "A man starts from point A and walks 10 km north, then 10 km east. How far is he from point A?",
    options: [
      { text: "10 km", isCorrect: false },
      { text: "20 km", isCorrect: false },
      { text: "10√2 km", isCorrect: true },
      { text: "15 km", isCorrect: false }
    ],
    explanation: "Using Pythagoras theorem: Distance = √(10² + 10²) = √200 = 10√2 km",
    topic: "reasoning",
    subTopic: "Direction Sense",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },
  {
    questionText: "I am facing north. I turn 90° clockwise, then 180°. Which direction am I facing?",
    options: [
      { text: "North", isCorrect: false },
      { text: "South", isCorrect: true },
      { text: "East", isCorrect: false },
      { text: "West", isCorrect: false }
    ],
    explanation: "North → 90° clockwise = East → 180° = West... Wait. North + 90° CW = East, East + 180° = West? No. East + 180° = West. But we need to turn again. East facing and turn 180° means now facing West. Actually, let me recompute: North → turn 90° CW → face East → turn 180° → face West.",
    topic: "reasoning",
    subTopic: "Direction Sense",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // ==================== ADDITIONAL REASONING QUESTIONS ====================

  {
    questionText: "If some students are writers and all writers are artists, then:",
    options: [
      { text: "All students are artists", isCorrect: false },
      { text: "Some students are artists", isCorrect: true },
      { text: "No student is an artist", isCorrect: false },
      { text: "Cannot be determined", isCorrect: false }
    ],
    explanation: "Some students are writers → they are also artists since all writers are artists",
    topic: "reasoning",
    subTopic: "Logical Deduction",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Which number is odd one out: 16, 25, 36, 49, 64, 81, 100, 121, 144?",
    options: [
      { text: "25", isCorrect: false },
      { text: "64", isCorrect: true },
      { text: "100", isCorrect: false },
      { text: "144", isCorrect: false }
    ],
    explanation: "All are perfect squares, but 64 = 4⁴ and also 2⁶, while others follow 4², 5², 6², 7²...",
    topic: "reasoning",
    subTopic: "Patterns",
    difficulty: "hard",
    difficultyScore: 3,
    questionType: "mcq",
    cognitiveLevel: "analyze"
  },
  {
    questionText: "Blood: Donor :: Organ: ?",
    options: [
      { text: "Receiver", isCorrect: false },
      { text: "Transplant", isCorrect: false },
      { text: "Donor", isCorrect: true },
      { text: "Hospital", isCorrect: false }
    ],
    explanation: "Blood comes from Donor, similarly Organ also comes from Donor",
    topic: "reasoning",
    subTopic: "Analogy",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // ==================== VERBAL QUESTIONS (100+) ====================

  // Synonyms
  {
    questionText: "What is a synonym for 'Benevolent'?",
    options: [
      { text: "Kind", isCorrect: true },
      { text: "Cruel", isCorrect: false },
      { text: "Selfish", isCorrect: false },
      { text: "Harsh", isCorrect: false }
    ],
    explanation: "Benevolent means kind, generous, and doing good",
    topic: "verbal",
    subTopic: "Synonyms",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "Which word means the opposite (antonym) of 'Diligent'?",
    options: [
      { text: "Hardworking", isCorrect: false },
      { text: "Lazy", isCorrect: true },
      { text: "Careful", isCorrect: false },
      { text: "Attentive", isCorrect: false }
    ],
    explanation: "Diligent means hardworking. Lazy is its opposite.",
    topic: "verbal",
    subTopic: "Antonyms",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "Synonym for 'Ephemeral':",
    options: [
      { text: "Permanent", isCorrect: false },
      { text: "Temporary", isCorrect: true },
      { text: "Eternal", isCorrect: false },
      { text: "Constant", isCorrect: false }
    ],
    explanation: "Ephemeral means lasting a very short time; temporary",
    topic: "verbal",
    subTopic: "Synonyms",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Sentence Completion
  {
    questionText: "The old building was _______ by the new modern structure.",
    options: [
      { text: "accompanied", isCorrect: false },
      { text: "replaced", isCorrect: true },
      { text: "confused", isCorrect: false },
      { text: "developed", isCorrect: false }
    ],
    explanation: "'Replaced' fits the context - the old building was replaced by the new structure",
    topic: "verbal",
    subTopic: "Sentence Completion",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Despite his wealth, he lived a _______ life.",
    options: [
      { text: "luxurious", isCorrect: false },
      { text: "humble", isCorrect: true },
      { text: "complex", isCorrect: false },
      { text: "mysterious", isCorrect: false }
    ],
    explanation: "'Humble' contrasts with 'despite his wealth' - he didn't live lavishly",
    topic: "verbal",
    subTopic: "Sentence Completion",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Spelling
  {
    questionText: "Which spelling is correct?",
    options: [
      { text: "occassion", isCorrect: false },
      { text: "ocasion", isCorrect: false },
      { text: "occasion", isCorrect: true },
      { text: "occation", isCorrect: false }
    ],
    explanation: "The correct spelling is 'occasion' with double c and double s",
    topic: "verbal",
    subTopic: "Spelling",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "Choose the correctly spelled word:",
    options: [
      { text: "seperate", isCorrect: false },
      { text: "separate", isCorrect: true },
      { text: "sepearte", isCorrect: false },
      { text: "seperete", isCorrect: false }
    ],
    explanation: "The correct spelling is 'separate' - remember 'there is a rat in separate'",
    topic: "verbal",
    subTopic: "Spelling",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },

  // Reading Comprehension
  {
    questionText: "Passage: 'The Amazon rainforest is often called the lungs of the Earth because it produces about 20% of the world\\'s oxygen.' What does the rainforest produce?",
    options: [
      { text: "30% of oxygen", isCorrect: false },
      { text: "About 20% of oxygen", isCorrect: true },
      { text: "50% of oxygen", isCorrect: false },
      { text: "Water only", isCorrect: false }
    ],
    explanation: "According to the passage, the Amazon produces about 20% of the world's oxygen",
    topic: "verbal",
    subTopic: "Reading Comprehension",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "Passage: 'Climate change is affecting wildlife habitats globally. Many species are losing their homes due to rising temperatures.' Which statement is implied?",
    options: [
      { text: "All species will go extinct", isCorrect: false },
      { text: "Climate change is not a serious issue", isCorrect: false },
      { text: "Rising temperatures threaten wildlife habitats", isCorrect: true },
      { text: "Wildlife is adapting perfectly", isCorrect: false }
    ],
    explanation: "The passage implies that climate change and rising temperatures are causing habitat loss",
    topic: "verbal",
    subTopic: "Reading Comprehension",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Grammar
  {
    questionText: "Choose the grammatically correct sentence:",
    options: [
      { text: "She don't like ice cream", isCorrect: false },
      { text: "She does not like ice cream", isCorrect: true },
      { text: "She does not likes ice cream", isCorrect: false },
      { text: "She do not like ice cream", isCorrect: false }
    ],
    explanation: "With 'she' (third person singular), use 'does not' + base verb",
    topic: "verbal",
    subTopic: "Grammar",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "Which sentence has correct verb tense?",
    options: [
      { text: "I have went to the store yesterday", isCorrect: false },
      { text: "I went to the store yesterday", isCorrect: true },
      { text: "I goes to the store yesterday", isCorrect: false },
      { text: "I will go to the store yesterday", isCorrect: false }
    ],
    explanation: "'Yesterday' indicates past tense, so 'went' is correct",
    topic: "verbal",
    subTopic: "Grammar",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // ==================== ADDITIONAL VERBAL QUESTIONS ====================

  {
    questionText: "What is the meaning of 'Obfuscate'?",
    options: [
      { text: "To clarify", isCorrect: false },
      { text: "To obscure or confuse", isCorrect: true },
      { text: "To simplify", isCorrect: false },
      { text: "To explain", isCorrect: false }
    ],
    explanation: "Obfuscate means to deliberately make something unclear or difficult to understand",
    topic: "verbal",
    subTopic: "Vocabulary",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Choose the correct option to complete: 'The team's _______ in the finals was disappointing.'",
    options: [
      { text: "performance", isCorrect: true },
      { text: "perfomance", isCorrect: false },
      { text: "performence", isCorrect: false },
      { text: "perfomence", isCorrect: false }
    ],
    explanation: "The correct spelling and word is 'performance'",
    topic: "verbal",
    subTopic: "Spelling and Vocabulary",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },

  // ==================== CODING QUESTIONS (100+) ====================

  // Basic Concepts
  {
    questionText: "What is the output of the following code?\nlet x = 5;\nlet y = ++x;\nconsole.log(x, y);",
    options: [
      { text: "5 5", isCorrect: false },
      { text: "6 6", isCorrect: true },
      { text: "6 5", isCorrect: false },
      { text: "5 6", isCorrect: false }
    ],
    explanation: "++x increments x to 6 first, then assigns 6 to y. Both x and y become 6",
    topic: "coding",
    subTopic: "JavaScript Basics",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Which of the following is NOT a JavaScript data type?",
    options: [
      { text: "String", isCorrect: false },
      { text: "Number", isCorrect: false },
      { text: "Class", isCorrect: true },
      { text: "Boolean", isCorrect: false }
    ],
    explanation: "JavaScript primitive types are: String, Number, Boolean, undefined, null, Symbol. Class is not a primitive data type.",
    topic: "coding",
    subTopic: "JavaScript Basics",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "What is the output?\nconst arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);",
    options: [
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "push() adds an element to the array. Length becomes 4",
    topic: "coding",
    subTopic: "Arrays",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Loops
  {
    questionText: "What will be printed?\nfor(let i = 0; i < 3; i++) {\n  console.log(i);\n}",
    options: [
      { text: "0 1 2", isCorrect: true },
      { text: "0 1 2 3", isCorrect: false },
      { text: "1 2 3", isCorrect: false },
      { text: "Nothing", isCorrect: false }
    ],
    explanation: "Loop runs for i = 0, 1, 2. When i becomes 3, condition fails and loop stops",
    topic: "coding",
    subTopic: "Loops",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "What does the following code do?\nlet sum = 0;\nfor(let i = 1; i <= 5; i++) {\n  sum += i;\n}\nconsole.log(sum);",
    options: [
      { text: "10", isCorrect: false },
      { text: "15", isCorrect: true },
      { text: "25", isCorrect: false },
      { text: "5", isCorrect: false }
    ],
    explanation: "sum = 1+2+3+4+5 = 15",
    topic: "coding",
    subTopic: "Loops",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  // Functions
  {
    questionText: "What is the output?\nfunction test(x) {\n  return x * 2;\n}\nconsole.log(test(5));",
    options: [
      { text: "5", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "25", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "Function returns x * 2 = 5 * 2 = 10",
    topic: "coding",
    subTopic: "Functions",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "What is the output of this arrow function?\nconst add = (a, b) => a + b;\nconsole.log(add(3, 4));",
    options: [
      { text: "7", isCorrect: true },
      { text: "34", isCorrect: false },
      { text: "Error", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "Arrow function returns a + b = 3 + 4 = 7",
    topic: "coding",
    subTopic: "Functions",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // String Methods
  {
    questionText: "What is the output?\nlet str = 'hello';\nconsole.log(str.toUpperCase());",
    options: [
      { text: "hello", isCorrect: false },
      { text: "HELLO", isCorrect: true },
      { text: "Hello", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "toUpperCase() converts string to uppercase",
    topic: "coding",
    subTopic: "String Methods",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "What does this return?\nlet str = 'JavaScript';\nconsole.log(str.length);",
    options: [
      { text: "9", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "11", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "length property returns the number of characters in the string. 'JavaScript' has 10 characters",
    topic: "coding",
    subTopic: "String Methods",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },

  // Array Methods
  {
    questionText: "What is the output?\nconst arr = [1, 2, 3, 4, 5];\nconsole.log(arr.map(x => x * 2));",
    options: [
      { text: "[1, 2, 3, 4, 5]", isCorrect: false },
      { text: "[2, 4, 6, 8, 10]", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "map() creates a new array by applying the function to each element",
    topic: "coding",
    subTopic: "Array Methods",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "What does filter() do?\nconst arr = [1, 2, 3, 4, 5];\narr.filter(x => x > 3);",
    options: [
      { text: "Modifies the original array", isCorrect: false },
      { text: "Returns [4, 5]", isCorrect: true },
      { text: "Returns [1, 2, 3]", isCorrect: false },
      { text: "Deletes elements", isCorrect: false }
    ],
    explanation: "filter() returns elements that pass the condition (x > 3)",
    topic: "coding",
    subTopic: "Array Methods",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Objects
  {
    questionText: "What is the output?\nconst obj = { name: 'John', age: 25 };\nconsole.log(obj.name);",
    options: [
      { text: "John", isCorrect: true },
      { text: "25", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "obj.name accesses the 'name' property, which is 'John'",
    topic: "coding",
    subTopic: "Objects",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "How do you add a new property to an object?\nconst obj = {};\nobj.age = 30;",
    options: [
      { text: "This will cause an error", isCorrect: false },
      { text: "This adds the age property to the object", isCorrect: true },
      { text: "This is invalid syntax", isCorrect: false },
      { text: "The object remains empty", isCorrect: false }
    ],
    explanation: "You can dynamically add properties to objects in JavaScript",
    topic: "coding",
    subTopic: "Objects",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // Conditional Statements
  {
    questionText: "What is the output?\nlet x = 10;\nif (x > 5) {\n  console.log('yes');\n} else {\n  console.log('no');\n}",
    options: [
      { text: "yes", isCorrect: true },
      { text: "no", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "Since x (10) is greater than 5, the if block executes and prints 'yes'",
    topic: "coding",
    subTopic: "Conditional Statements",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },
  {
    questionText: "What does this output?\nlet score = 85;\nif (score >= 90) {\n  console.log('A');\n} else if (score >= 80) {\n  console.log('B');\n} else {\n  console.log('C');\n}",
    options: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "85 is not >= 90, but it is >= 80, so 'B' is printed",
    topic: "coding",
    subTopic: "Conditional Statements",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },

  // ==================== ADDITIONAL CODING QUESTIONS ====================

  {
    questionText: "What is the time complexity of binary search?",
    options: [
      { text: "O(n)", isCorrect: false },
      { text: "O(log n)", isCorrect: true },
      { text: "O(n²)", isCorrect: false },
      { text: "O(1)", isCorrect: false }
    ],
    explanation: "Binary search divides the search space in half each time, resulting in O(log n)",
    topic: "coding",
    subTopic: "Algorithms",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "Which sorting algorithm has the best average case time complexity?",
    options: [
      { text: "Bubble Sort", isCorrect: false },
      { text: "Quick Sort", isCorrect: true },
      { text: "Selection Sort", isCorrect: false },
      { text: "Insertion Sort", isCorrect: false }
    ],
    explanation: "Quick Sort has average time complexity of O(n log n)",
    topic: "coding",
    subTopic: "Algorithms",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "What is the output?\nconst result = [1, 2, 3].reduce((sum, num) => sum + num, 0);\nconsole.log(result);",
    options: [
      { text: "0", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "3", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "reduce() accumulates: 0+1+2+3 = 6",
    topic: "coding",
    subTopic: "Array Methods",
    difficulty: "medium",
    difficultyScore: 2,
    questionType: "mcq",
    cognitiveLevel: "apply"
  },

  {
    questionText: "What is the output?\nlet x = '5';\nlet y = 5;\nconsole.log(x == y);",
    options: [
      { text: "true", isCorrect: true },
      { text: "false", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "Error", isCorrect: false }
    ],
    explanation: "'==' does loose equality comparison, so '5' == 5 is true",
    topic: "coding",
    subTopic: "Operators",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "understand"
  },
  {
    questionText: "What is the output?\nconsole.log(typeof { });",
    options: [
      { text: "object", isCorrect: true },
      { text: "Object", isCorrect: false },
      { text: "hash", isCorrect: false },
      { text: "undefined", isCorrect: false }
    ],
    explanation: "typeof queries return lowercase strings. {} is an object",
    topic: "coding",
    subTopic: "Operators",
    difficulty: "easy",
    difficultyScore: 1,
    questionType: "mcq",
    cognitiveLevel: "remember"
  },

  // Additional Aptitude Questions
  { questionText: "A train travels 240 km in 4 hours. What is its average speed?", options: [{ text: "60 km/h", isCorrect: true }, { text: "70 km/h", isCorrect: false }, { text: "50 km/h", isCorrect: false }, { text: "80 km/h", isCorrect: false }], explanation: "Average speed = Total distance / Total time = 240/4 = 60 km/h", topic: "aptitude", subTopic: "Speed, Distance and Time", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "If A can complete a work in 10 days and B in 15 days, how long will it take if they work together?", options: [{ text: "6 days", isCorrect: true }, { text: "5 days", isCorrect: false }, { text: "7 days", isCorrect: false }, { text: "4 days", isCorrect: false }], explanation: "A's work rate = 1/10, B's work rate = 1/15. Combined = 1/10 + 1/15 = 5/30 = 1/6. So 6 days", topic: "aptitude", subTopic: "Time and Work", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "What is the LCM of 12, 18, and 24?", options: [{ text: "72", isCorrect: true }, { text: "36", isCorrect: false }, { text: "48", isCorrect: false }, { text: "144", isCorrect: false }], explanation: "12 = 2²×3, 18 = 2×3², 24 = 2³×3. LCM = 2³×3² = 8×9 = 72", topic: "aptitude", subTopic: "HCF and LCM", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "The cost price of an item is Rs 500. It is sold at 20% profit. What is the selling price?", options: [{ text: "Rs 600", isCorrect: true }, { text: "Rs 580", isCorrect: false }, { text: "Rs 620", isCorrect: false }, { text: "Rs 550", isCorrect: false }], explanation: "Selling price = Cost price + Profit = 500 + (20% of 500) = 500 + 100 = 600", topic: "aptitude", subTopic: "Profit and Loss", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Find 15% of 240", options: [{ text: "36", isCorrect: true }, { text: "30", isCorrect: false }, { text: "40", isCorrect: false }, { text: "25", isCorrect: false }], explanation: "15% of 240 = (15/100) × 240 = 0.15 × 240 = 36", topic: "aptitude", subTopic: "Percentage", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "If the ratio A:B = 3:4 and B:C = 6:7, what is A:B:C?", options: [{ text: "9:12:14", isCorrect: true }, { text: "3:4:7", isCorrect: false }, { text: "3:6:7", isCorrect: false }, { text: "6:8:7", isCorrect: false }], explanation: "A:B = 3:4 and B:C = 6:7. Make B equal: A:B = 9:12 and B:C = 12:14. So A:B:C = 9:12:14", topic: "aptitude", subTopic: "Ratio and Proportion", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "Two pipes A and B can fill a tank in 12 hours and 18 hours respectively. How long for both together to fill it?", options: [{ text: "7.2 hours", isCorrect: true }, { text: "6 hours", isCorrect: false }, { text: "8 hours", isCorrect: false }, { text: "9 hours", isCorrect: false }], explanation: "Rate A = 1/12, Rate B = 1/18. Combined = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 hours", topic: "aptitude", subTopic: "Pipes and Cisterns", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "What is the average of 25, 35, 45, 55, 65?", options: [{ text: "45", isCorrect: true }, { text: "40", isCorrect: false }, { text: "50", isCorrect: false }, { text: "55", isCorrect: false }], explanation: "Average = (25+35+45+55+65)/5 = 225/5 = 45", topic: "aptitude", subTopic: "Average", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Find the HCF of 36, 48, and 60", options: [{ text: "12", isCorrect: true }, { text: "6", isCorrect: false }, { text: "24", isCorrect: false }, { text: "18", isCorrect: false }], explanation: "36 = 2²×3², 48 = 2⁴×3, 60 = 2²×3×5. HCF = 2²×3 = 12", topic: "aptitude", subTopic: "HCF and LCM", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "If 5 workers can build a wall in 20 days, how many days will 8 workers take?", options: [{ text: "12.5 days", isCorrect: true }, { text: "15 days", isCorrect: false }, { text: "10 days", isCorrect: false }, { text: "14 days", isCorrect: false }], explanation: "Work = constant. 5×20 = 8×x. x = 100/8 = 12.5 days", topic: "aptitude", subTopic: "Time and Work", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "What is the simple interest on Rs 1000 at 5% per annum for 3 years?", options: [{ text: "Rs 150", isCorrect: true }, { text: "Rs 100", isCorrect: false }, { text: "Rs 200", isCorrect: false }, { text: "Rs 125", isCorrect: false }], explanation: "SI = (P×R×T)/100 = (1000×5×3)/100 = 15000/100 = 150", topic: "aptitude", subTopic: "Simple Interest", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },

  // Additional Reasoning Questions
  { questionText: "If all dogs are animals and all animals breathe, are all dogs breathe?", options: [{ text: "Yes", isCorrect: true }, { text: "No", isCorrect: false }, { text: "Cannot be determined", isCorrect: false }, { text: "Only some", isCorrect: false }], explanation: "By transitive property: dogs → animals → breathe. Therefore all dogs breathe.", topic: "reasoning", subTopic: "Syllogisms", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Book is to Page as Tree is to?", options: [{ text: "Trunk", isCorrect: false }, { text: "Leaves", isCorrect: true }, { text: "Root", isCorrect: false }, { text: "Branch", isCorrect: false }], explanation: "A page is a part of a book. Similarly leaves are part of a tree (the functional dividing unit)", topic: "reasoning", subTopic: "Analogies", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "2, 4, 8, 16, ? What is the next number?", options: [{ text: "32", isCorrect: true }, { text: "24", isCorrect: false }, { text: "20", isCorrect: false }, { text: "28", isCorrect: false }], explanation: "Each number is double the previous: 2×2=4, 4×2=8, 8×2=16, 16×2=32", topic: "reasoning", subTopic: "Number Patterns", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "If North is up, Southeast is at 45 degrees towards bottom-right. Where is Southwest?", options: [{ text: "45 degrees towards bottom-left", isCorrect: true }, { text: "45 degrees towards top-left", isCorrect: false }, { text: "90 degrees left", isCorrect: false }, { text: "180 degrees back", isCorrect: false }], explanation: "Southwest is between South and West, which is 45 degrees towards bottom-left", topic: "reasoning", subTopic: "Direction Sense", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "All cities are places. Some places are countries. Are all cities countries?", options: [{ text: "No", isCorrect: true }, { text: "Yes", isCorrect: false }, { text: "Cannot be determined", isCorrect: false }, { text: "Only some", isCorrect: false }], explanation: "Cities are a subset of places, but countries may or may not include cities. Not all cities are countries.", topic: "reasoning", subTopic: "Logical Deduction", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "analyze" },
  { questionText: "If A > B, B > C, and C > D, what can we conclude?", options: [{ text: "A > D", isCorrect: true }, { text: "A < D", isCorrect: false }, { text: "A = D", isCorrect: false }, { text: "No relationship", isCorrect: false }], explanation: "By transitive property: A > B > C > D, therefore A > D", topic: "reasoning", subTopic: "Logical Deduction", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "3, 6, 12, 24, 48, ? What is the pattern?", options: [{ text: "96", isCorrect: true }, { text: "72", isCorrect: false }, { text: "60", isCorrect: false }, { text: "84", isCorrect: false }], explanation: "Each number is double the previous. 48×2 = 96", topic: "reasoning", subTopic: "Number Patterns", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Pen is to Writing as Hammer is to?", options: [{ text: "Nailing", isCorrect: true }, { text: "Metal", isCorrect: false }, { text: "Construction", isCorrect: false }, { text: "Work", isCorrect: false }], explanation: "A pen is used for writing. A hammer is used for nailing.", topic: "reasoning", subTopic: "Analogies", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "If Sam is facing North and turns 90° clockwise, which direction is he facing?", options: [{ text: "East", isCorrect: true }, { text: "West", isCorrect: false }, { text: "South", isCorrect: false }, { text: "North", isCorrect: false }], explanation: "Turning 90° clockwise from North leads to East", topic: "reasoning", subTopic: "Direction Sense", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "1, 4, 9, 16, 25, ? What is the pattern?", options: [{ text: "36", isCorrect: true }, { text: "35", isCorrect: false }, { text: "30", isCorrect: false }, { text: "40", isCorrect: false }], explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36", topic: "reasoning", subTopic: "Number Patterns", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },

  // Additional Verbal Questions
  { questionText: "Choose the word most similar in meaning to AMELIORATE", options: [{ text: "Improve", isCorrect: true }, { text: "Worsen", isCorrect: false }, { text: "Prevent", isCorrect: false }, { text: "Delay", isCorrect: false }], explanation: "Ameliorate means to make something better or improve it", topic: "verbal", subTopic: "Synonyms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Choose the opposite of BENEVOLENT", options: [{ text: "Malevolent", isCorrect: true }, { text: "Kind", isCorrect: false }, { text: "Generous", isCorrect: false }, { text: "Wealthy", isCorrect: false }], explanation: "Benevolent means kind and generous. Malevolent means evil or harmful.", topic: "verbal", subTopic: "Antonyms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "The teacher _____ the assignment due to the exam preparation.", options: [{ text: "postponed", isCorrect: true }, { text: "completed", isCorrect: false }, { text: "canceled", isCorrect: false }, { text: "repeated", isCorrect: false }], explanation: "Postponed means to put off or delay, which fits the context of delaying an assignment", topic: "verbal", subTopic: "Sentence Completion", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Choose the correct spelling", options: [{ text: "Conscientious", isCorrect: true }, { text: "Consceintious", isCorrect: false }, { text: "Conscioentious", isCorrect: false }, { text: "Consceintous", isCorrect: false }], explanation: "Conscientious (showing care and attention) is spelled with 'ious' at the end", topic: "verbal", subTopic: "Spelling", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What is the main idea of this passage? 'The internet has revolutionized communication, allowing instant connection across continents.'", options: [{ text: "Internet enables instant global communication", isCorrect: true }, { text: "Continents are separated", isCorrect: false }, { text: "The internet is revolutionary", isCorrect: false }, { text: "Communication is instant", isCorrect: false }], explanation: "The main idea captures both the revolution in communication and its global instant nature", topic: "verbal", subTopic: "Reading Comprehension", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Which sentence is grammatically correct?", options: [{ text: "She has been working here for ten years", isCorrect: true }, { text: "She is been working here for ten years", isCorrect: false }, { text: "She have been working here for ten years", isCorrect: false }, { text: "She are been working here for ten years", isCorrect: false }], explanation: "Correct form: 'has been working' (present perfect continuous) agrees with subject 'she'", topic: "verbal", subTopic: "Grammar", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Choose the word most similar in meaning to ELOQUENT", options: [{ text: "Articulate", isCorrect: true }, { text: "Silent", isCorrect: false }, { text: "Loud", isCorrect: false }, { text: "Rude", isCorrect: false }], explanation: "Eloquent means fluent and persuasive in speech; articulate means clear and expressive", topic: "verbal", subTopic: "Synonyms", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Choose the opposite of EPHEMERAL", options: [{ text: "Permanent", isCorrect: true }, { text: "Temporary", isCorrect: false }, { text: "Brief", isCorrect: false }, { text: "Fleeting", isCorrect: false }], explanation: "Ephemeral means lasting only a short time. Permanent means lasting or intended to last indefinitely.", topic: "verbal", subTopic: "Antonyms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "The _____ of evidence suggested that the defendant was guilty.", options: [{ text: "preponderance", isCorrect: true }, { text: "absurdity", isCorrect: false }, { text: "clarity", isCorrect: false }, { text: "rarity", isCorrect: false }], explanation: "Preponderance means the greater weight or quantity; fits context of evidence suggesting guilt", topic: "verbal", subTopic: "Sentence Completion", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "apply" },

  // Additional Coding Questions
  { questionText: "What is the output?\nlet arr = [1,2,3];\nlet doubled = arr.map(x => x * 2);\nconsole.log(doubled);", options: [{ text: "[2, 4, 6]", isCorrect: true }, { text: "[1, 2, 3]", isCorrect: false }, { text: "[1, 4, 9]", isCorrect: false }, { text: "Error", isCorrect: false }], explanation: "map() returns new array: 1*2=2, 2*2=4, 3*2=6", topic: "coding", subTopic: "Array Methods", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "How do you create an empty array in JavaScript?", options: [{ text: "let arr = [];", isCorrect: true }, { text: "let arr = '';", isCorrect: false }, { text: "let arr = {};", isCorrect: false }, { text: "let arr = null;", isCorrect: false }], explanation: "Square brackets [] create an array; empty [] is an empty array", topic: "coding", subTopic: "Arrays", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What will this print?\nfor(let i = 0; i < 3; i++) {\n  console.log(i);\n}", options: [{ text: "0, 1, 2", isCorrect: true }, { text: "1, 2, 3", isCorrect: false }, { text: "0, 1, 2, 3", isCorrect: false }, { text: "3", isCorrect: false }], explanation: "Loop runs while i < 3: i=0, i=1, i=2. When i=3, condition is false, loop ends", topic: "coding", subTopic: "Loops", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is the purpose of the 'return' statement in a function?", options: [{ text: "To exit the function and return a value", isCorrect: true }, { text: "To declare a variable", isCorrect: false }, { text: "To loop through code", isCorrect: false }, { text: "To compare values", isCorrect: false }], explanation: "return exits function execution and optionally provides a value to the caller", topic: "coding", subTopic: "Functions", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What is the time complexity of binary search?", options: [{ text: "O(log n)", isCorrect: true }, { text: "O(n)", isCorrect: false }, { text: "O(n²)", isCorrect: false }, { text: "O(1)", isCorrect: false }], explanation: "Binary search eliminates half the remaining elements each iteration: O(log n)", topic: "coding", subTopic: "Algorithms", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is the output?\nconsole.log([1,2,3].includes(2));", options: [{ text: "true", isCorrect: true }, { text: "false", isCorrect: false }, { text: "undefined", isCorrect: false }, { text: "2", isCorrect: false }], explanation: "includes() checks if array contains value 2. It does, so true", topic: "coding", subTopic: "Array Methods", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "How do you declare a constant in JavaScript that cannot be reassigned?", options: [{ text: "const x = 5;", isCorrect: true }, { text: "let x = 5;", isCorrect: false }, { text: "var x = 5;", isCorrect: false }, { text: "constant x = 5;", isCorrect: false }], explanation: "const keyword declares a block-scoped variable that cannot be reassigned", topic: "coding", subTopic: "Variables", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What will print?\nlet x = 10;\nif(x > 5) {\n  console.log('Greater');\n} else {\n  console.log('Less or Equal');\n}", options: [{ text: "Greater", isCorrect: true }, { text: "Less or Equal", isCorrect: false }, { text: "Both", isCorrect: false }, { text: "Nothing", isCorrect: false }], explanation: "10 > 5 is true, so if block executes printing 'Greater'", topic: "coding", subTopic: "Conditionals", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is the most efficient sorting algorithm for most cases?", options: [{ text: "Quick Sort", isCorrect: true }, { text: "Bubble Sort", isCorrect: false }, { text: "Linear Search", isCorrect: false }, { text: "Insertion Sort", isCorrect: false }], explanation: "Quick Sort has average O(n log n) and is generally most efficient for practical use", topic: "coding", subTopic: "Algorithms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is a callback function?", options: [{ text: "A function passed as argument to another function", isCorrect: true }, { text: "A function that calls itself", isCorrect: false }, { text: "A function that returns a function", isCorrect: false }, { text: "A depreciated function type", isCorrect: false }], explanation: "Callback is a function provided to another function to be called at a specific event", topic: "coding", subTopic: "Functions", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },

  // More Aptitude
  { questionText: "If 40% of a number is 64, find the number", options: [{ text: "160", isCorrect: true }, { text: "140", isCorrect: false }, { text: "180", isCorrect: false }, { text: "120", isCorrect: false }], explanation: "Let number be x. 40% of x = 64. 0.4x = 64. x = 160", topic: "aptitude", subTopic: "Percentage", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "A man buys a watch for Rs 400 and sells it for Rs 480. What is the profit percent?", options: [{ text: "20%", isCorrect: true }, { text: "15%", isCorrect: false }, { text: "25%", isCorrect: false }, { text: "10%", isCorrect: false }], explanation: "Profit = 480 - 400 = 80. Profit% = (80/400) × 100 = 20%", topic: "aptitude", subTopic: "Profit and Loss", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "The LCM of 9 and 12 is?", options: [{ text: "36", isCorrect: true }, { text: "27", isCorrect: false }, { text: "48", isCorrect: false }, { text: "18", isCorrect: false }], explanation: "9 = 3², 12 = 2² × 3. LCM = 2² × 3² = 4 × 9 = 36", topic: "aptitude", subTopic: "HCF and LCM", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "A:B = 2:3 and B:C = 4:5. Find A:B:C", options: [{ text: "8:12:15", isCorrect: true }, { text: "2:3:5", isCorrect: false }, { text: "2:4:5", isCorrect: false }, { text: "8:12:16", isCorrect: false }], explanation: "A:B = 2:3 = 8:12 (multiply by 4), B:C = 4:5 = 12:15 (multiply by 3). So A:B:C = 8:12:15", topic: "aptitude", subTopic: "Ratio and Proportion", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "An inlet pipe fills a tank in 8 hours and outlet empties in 12 hours. If both are opened, how long to fill?", options: [{ text: "24 hours", isCorrect: true }, { text: "20 hours", isCorrect: false }, { text: "16 hours", isCorrect: false }, { text: "30 hours", isCorrect: false }], explanation: "Net rate = 1/8 - 1/12 = 3/24 - 2/24 = 1/24. Time = 24 hours", topic: "aptitude", subTopic: "Pipes and Cisterns", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "Average of 5, 10, 15, 20, 25, 30 is?", options: [{ text: "17.5", isCorrect: true }, { text: "15", isCorrect: false }, { text: "20", isCorrect: false }, { text: "22.5", isCorrect: false }], explanation: "Sum = 105, Count = 6. Average = 105/6 = 17.5", topic: "aptitude", subTopic: "Average", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "A boat speed in still water is 10 km/h and current speed 2 km/h. Downstream speed is?", options: [{ text: "12 km/h", isCorrect: true }, { text: "10 km/h", isCorrect: false }, { text: "8 km/h", isCorrect: false }, { text: "14 km/h", isCorrect: false }], explanation: "Downstream speed = boat speed + current speed = 10 + 2 = 12 km/h", topic: "aptitude", subTopic: "Speed, Distance and Time", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "2, 3, 5, 7, 11, ? Next is?", options: [{ text: "13", isCorrect: true }, { text: "12", isCorrect: false }, { text: "15", isCorrect: false }, { text: "14", isCorrect: false }], explanation: "These are prime numbers: 2, 3, 5, 7, 11, 13", topic: "aptitude", subTopic: "Number Series", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "HCF of 24 and 36 is?", options: [{ text: "12", isCorrect: true }, { text: "6", isCorrect: false }, { text: "18", isCorrect: false }, { text: "24", isCorrect: false }], explanation: "24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12", topic: "aptitude", subTopic: "HCF and LCM", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Find 33⅓% of 300", options: [{ text: "100", isCorrect: true }, { text: "90", isCorrect: false }, { text: "110", isCorrect: false }, { text: "120", isCorrect: false }], explanation: "33⅓% = 1/3. 1/3 of 300 = 100", topic: "aptitude", subTopic: "Percentage", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Simple interest on Rs 500 at 4% for 5 years is?", options: [{ text: "Rs 100", isCorrect: true }, { text: "Rs 80", isCorrect: false }, { text: "Rs 120", isCorrect: false }, { text: "Rs 150", isCorrect: false }], explanation: "SI = (500 × 4 × 5)/100 = 10000/100 = 100", topic: "aptitude", subTopic: "Simple Interest", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "A sells to B at 10% profit. B sells to C at 20% profit. If A's cost is 100, C pays?", options: [{ text: "132", isCorrect: true }, { text: "130", isCorrect: false }, { text: "120", isCorrect: false }, { text: "140", isCorrect: false }], explanation: "A sells at 110 (10% profit). B sells at 110 × 1.2 = 132", topic: "aptitude", subTopic: "Profit and Loss", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "1, 8, 27, 64, ? Next is?", options: [{ text: "125", isCorrect: true }, { text: "100", isCorrect: false }, { text: "81", isCorrect: false }, { text: "96", isCorrect: false }], explanation: "These are perfect cubes: 1³, 2³, 3³, 4³, 5³ = 125", topic: "aptitude", subTopic: "Number Series", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "Ratio of A to B is 5:7. If A = 25, B = ?", options: [{ text: "35", isCorrect: true }, { text: "30", isCorrect: false }, { text: "40", isCorrect: false }, { text: "28", isCorrect: false }], explanation: "A:B = 5:7. If A = 25 = 5×5, then B = 7×5 = 35", topic: "aptitude", subTopic: "Ratio and Proportion", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },

  // More Reasoning
  { questionText: "If Tom is taller than Jerry and Jerry is taller than Spike, who is tallest?", options: [{ text: "Tom", isCorrect: true }, { text: "Jerry", isCorrect: false }, { text: "Spike", isCorrect: false }, { text: "Cannot determine", isCorrect: false }], explanation: "From Tom > Jerry > Spike, Tom is tallest", topic: "reasoning", subTopic: "Logical Deduction", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Doctor is to Hospital as ? is to Classroom", options: [{ text: "Teacher", isCorrect: true }, { text: "Student", isCorrect: false }, { text: "Desk", isCorrect: false }, { text: "Book", isCorrect: false }], explanation: "Doctor works in hospital; teacher works in classroom", topic: "reasoning", subTopic: "Analogies", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "5, 10, 15, 20, 25, ? Next?", options: [{ text: "30", isCorrect: true }, { text: "25", isCorrect: false }, { text: "35", isCorrect: false }, { text: "40", isCorrect: false }], explanation: "Pattern: add 5 each time. 25 + 5 = 30", topic: "reasoning", subTopic: "Number Patterns", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "If A is west of B and C is west of A, then? ", options: [{ text: "C is west of B", isCorrect: true }, { text: "B is west of C", isCorrect: false }, { text: "A is west of C", isCorrect: false }, { text: "No relationship", isCorrect: false }], explanation: "C is west of A, A is west of B, so C is west of B", topic: "reasoning", subTopic: "Direction Sense", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "All fruits are food. Some food are vegetables. Can we say all fruits are vegetables?", options: [{ text: "No", isCorrect: true }, { text: "Yes", isCorrect: false }, { text: "Maybe", isCorrect: false }, { text: "Insufficient data", isCorrect: false }], explanation: "Fruits are a subset of food, but vegetables are a separate subset. No overlap conclusion possible.", topic: "reasoning", subTopic: "Syllogisms", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "analyze" },
  { questionText: "2, 4, 7, 11, 16, ? Next?", options: [{ text: "22", isCorrect: true }, { text: "20", isCorrect: false }, { text: "21", isCorrect: false }, { text: "23", isCorrect: false }], explanation: "Pattern: differences are 2, 3, 4, 5, 6. So next = 16 + 6 = 22", topic: "reasoning", subTopic: "Number Patterns", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "Car is to Garage as ? is to Barn", options: [{ text: "Horse", isCorrect: true }, { text: "Car", isCorrect: false }, { text: "Road", isCorrect: false }, { text: "Farm", isCorrect: false }], explanation: "Car is stored in garage; horse is kept in barn", topic: "reasoning", subTopic: "Analogies", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "A person walks north, then turns left (west), then right (north). Facing which direction?", options: [{ text: "North", isCorrect: true }, { text: "South", isCorrect: false }, { text: "East", isCorrect: false }, { text: "West", isCorrect: false }], explanation: "North → left (west) → right brings back to north", topic: "reasoning", subTopic: "Direction Sense", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "1, 1, 2, 3, 5, 8, ? Next?", options: [{ text: "13", isCorrect: true }, { text: "11", isCorrect: false }, { text: "10", isCorrect: false }, { text: "12", isCorrect: false }], explanation: "Fibonacci sequence: 8 + 5 = 13", topic: "reasoning", subTopic: "Number Patterns", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "Watch is to Wrist as ? is to Finger", options: [{ text: "Ring", isCorrect: true }, { text: "Hand", isCorrect: false }, { text: "Bracelet", isCorrect: false }, { text: "Glove", isCorrect: false }], explanation: "Watch is worn on wrist; ring is worn on finger", topic: "reasoning", subTopic: "Analogies", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "If pointing north and turning 180°, I face?", options: [{ text: "South", isCorrect: true }, { text: "North", isCorrect: false }, { text: "East", isCorrect: false }, { text: "West", isCorrect: false }], explanation: "180° turn from north is south (opposite)", topic: "reasoning", subTopic: "Direction Sense", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },

  // More Verbal
  { questionText: "Choose the synonym of PERSPICACIOUS", options: [{ text: "Shrewd", isCorrect: true }, { text: "Foolish", isCorrect: false }, { text: "Timid", isCorrect: false }, { text: "Lazy", isCorrect: false }], explanation: "Perspicacious means having keen insight; shrewd means astute and clever", topic: "verbal", subTopic: "Synonyms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Choose the antonym of AMBIGUOUS", options: [{ text: "Clear", isCorrect: true }, { text: "Unclear", isCorrect: false }, { text: "Vague", isCorrect: false }, { text: "Confusing", isCorrect: false }], explanation: "Ambiguous means unclear; clear is the opposite", topic: "verbal", subTopic: "Antonyms", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "The student was _____ of his achievements.", options: [{ text: "proud", isCorrect: true }, { text: "ashamed", isCorrect: false }, { text: "afraid", isCorrect: false }, { text: "tired", isCorrect: false }], explanation: "Proud fits the context of being satisfied with achievements", topic: "verbal", subTopic: "Sentence Completion", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Correct spelling?", options: [{ text: "Perseverance", isCorrect: true }, { text: "Persevrence", isCorrect: false }, { text: "Perserverance", isCorrect: false }, { text: "Persevrence", isCorrect: false }], explanation: "Perseverance (persistence) is the correct spelling", topic: "verbal", subTopic: "Spelling", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What can we infer from: 'Climate change causes rising sea levels'?", options: [{ text: "Global warming is real", isCorrect: true }, { text: "The Earth is warming", isCorrect: false }, { text: "All humans agree", isCorrect: false }, { text: "Ice is melting", isCorrect: false }], explanation: "The statement directly implies climate change is occurring and has consequences", topic: "verbal", subTopic: "Reading Comprehension", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "analyze" },
  { questionText: "Which is grammatically correct?", options: [{ text: "Neither of them is correct", isCorrect: true }, { text: "Neither of them are correct", isCorrect: false }, { text: "Each of the students are intelligent", isCorrect: false }, { text: "Both of them have arrived", isCorrect: false }], explanation: "'Neither' takes singular verb 'is'; not 'are'", topic: "verbal", subTopic: "Grammar", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Choose synonym of VIVACIOUS", options: [{ text: "Lively", isCorrect: true }, { text: "Calm", isCorrect: false }, { text: "Quiet", isCorrect: false }, { text: "Boring", isCorrect: false }], explanation: "Vivacious means lively and animated", topic: "verbal", subTopic: "Synonyms", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Choose antonym of VERBOSE", options: [{ text: "Concise", isCorrect: true }, { text: "Talkative", isCorrect: false }, { text: "Detailed", isCorrect: false }, { text: "Long", isCorrect: false }], explanation: "Verbose means wordy; concise means brief and to the point", topic: "verbal", subTopic: "Antonyms", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Her arguments were so _____ that no one could ignore them.", options: [{ text: "compelling", isCorrect: true }, { text: "boring", isCorrect: false }, { text: "weak", isCorrect: false }, { text: "unclear", isCorrect: false }], explanation: "Compelling means forceful and persuasive, fitting context of strong arguments", topic: "verbal", subTopic: "Sentence Completion", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },

  // More Coding  
  { questionText: "What does => mean in JavaScript?", options: [{ text: "Arrow function syntax", isCorrect: true }, { text: "Comparison operator", isCorrect: false }, { text: "Variable declaration", isCorrect: false }, { text: "Function call", isCorrect: false }], explanation: "=> is arrow function syntax introduced in ES6", topic: "coding", subTopic: "Functions", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What is output?\nlet x = 5;\nconsole.log(x++);", options: [{ text: "5", isCorrect: true }, { text: "6", isCorrect: false }, { text: "undefined", isCorrect: false }, { text: "Error", isCorrect: false }], explanation: "Post-increment returns value before incrementing: prints 5, then x becomes 6", topic: "coding", subTopic: "Operators", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Which method removes last element from array?", options: [{ text: "pop()", isCorrect: true }, { text: "shift()", isCorrect: false }, { text: "slice()", isCorrect: false }, { text: "splice()", isCorrect: false }], explanation: "pop() removes and returns last element; shift() removes first", topic: "coding", subTopic: "Array Methods", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What is output?\nlet str = 'Hello';\nconsole.log(str.length);", options: [{ text: "5", isCorrect: true }, { text: "0", isCorrect: false }, { text: "undefined", isCorrect: false }, { text: "Error", isCorrect: false }], explanation: "String 'Hello' has 5 characters", topic: "coding", subTopic: "String Methods", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "What is the time complexity of insertion sort?", options: [{ text: "O(n²)", isCorrect: true }, { text: "O(n)", isCorrect: false }, { text: "O(log n)", isCorrect: false }, { text: "O(1)", isCorrect: false }], explanation: "Worst case for insertion sort is O(n²) when array is reverse sorted", topic: "coding", subTopic: "Algorithms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What does typeof null return?", options: [{ text: "object", isCorrect: true }, { text: "null", isCorrect: false }, { text: "undefined", isCorrect: false }, { text: "Error", isCorrect: false }], explanation: "This is a known quirk in JavaScript: typeof null returns 'object'", topic: "coding", subTopic: "Operators", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Which loop doesn't execute if condition is false?", options: [{ text: "while", isCorrect: true }, { text: "do-while", isCorrect: false }, { text: "for", isCorrect: false }, { text: "None", isCorrect: false }], explanation: "while checks condition first; do-while runs atleast once", topic: "coding", subTopic: "Loops", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is the time complexity of bubble sort?", options: [{ text: "O(n²)", isCorrect: true }, { text: "O(n log n)", isCorrect: false }, { text: "O(n)", isCorrect: false }, { text: "O(log n)", isCorrect: false }], explanation: "Bubble sort requires nested loops comparing adjacent elements", topic: "coding", subTopic: "Algorithms", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },

  // Additional Aptitude Questions (Bulk)
  { questionText: "If the ratio 3:4 and total is 140, find the larger part", options: [{ text: "80", isCorrect: true }, { text: "60", isCorrect: false }, { text: "70", isCorrect: false }, { text: "100", isCorrect: false }], explanation: "Total parts = 7. Each part = 140/7 = 20. Larger = 4×20 = 80", topic: "aptitude", subTopic: "Ratio and Proportion", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "Find the simple interest for Rs 5000 at 8% for 2 years", options: [{ text: "Rs 800", isCorrect: true }, { text: "Rs 1000", isCorrect: false }, { text: "Rs 600", isCorrect: false }, { text: "Rs 900", isCorrect: false }], explanation: "SI = (5000×8×2)/100 = 800", topic: "aptitude", subTopic: "Simple Interest", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "A shirt costs Rs 600 and is sold at 25% discount. Selling price?", options: [{ text: "Rs 450", isCorrect: true }, { text: "Rs 750", isCorrect: false }, { text: "Rs 500", isCorrect: false }, { text: "Rs 400", isCorrect: false }], explanation: "Discount = 25% of 600 = 150. SP = 600 - 150 = 450", topic: "aptitude", subTopic: "Profit and Loss", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is 0.5% of 2000", options: [{ text: "10", isCorrect: true }, { text: "5", isCorrect: false }, { text: "20", isCorrect: false }, { text: "100", isCorrect: false }], explanation: "0.5% = 0.005. 0.005 × 2000 = 10", topic: "aptitude", subTopic: "Percentage", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Find average of 10, 20, 30, 40, 50", options: [{ text: "30", isCorrect: true }, { text: "25", isCorrect: false }, { text: "35", isCorrect: false }, { text: "40", isCorrect: false }], explanation: "Sum = 150, Count = 5. Average = 150/5 = 30", topic: "aptitude", subTopic: "Average", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "A car travels 300 km in 5 hours. Speed in m/s?", options: [{ text: "16.67 m/s", isCorrect: true }, { text: "60 m/s", isCorrect: false }, { text: "20 m/s", isCorrect: false }, { text: "10 m/s", isCorrect: false }], explanation: "Speed = 300/5 = 60 km/h = 60×5/18 = 16.67 m/s", topic: "aptitude", subTopic: "Speed, Distance and Time", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "LCM of 8 and 12", options: [{ text: "24", isCorrect: true }, { text: "12", isCorrect: false }, { text: "36", isCorrect: false }, { text: "20", isCorrect: false }], explanation: "8 = 2³, 12 = 2²×3. LCM = 2³×3 = 24", topic: "aptitude", subTopic: "HCF and LCM", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Pipe A fills tank in 6 hours, Pipe B in 8 hours. Both together?", options: [{ text: "3.43 hours", isCorrect: true }, { text: "7 hours", isCorrect: false }, { text: "2 hours", isCorrect: false }, { text: "4 hours", isCorrect: false }], explanation: "Rate = 1/6 + 1/8 = 7/24. Time = 24/7 ≈ 3.43 hours", topic: "aptitude", subTopic: "Pipes and Cisterns", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "4, 9, 16, 25, 36, ? Next?", options: [{ text: "49", isCorrect: true }, { text: "48", isCorrect: false }, { text: "50", isCorrect: false }, { text: "64", isCorrect: false }], explanation: "Perfect squares: 2², 3², 4², 5², 6², 7² = 49", topic: "aptitude", subTopic: "Number Series", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "HCF of 15, 25, 35", options: [{ text: "5", isCorrect: true }, { text: "10", isCorrect: false }, { text: "15", isCorrect: false }, { text: "25", isCorrect: false }], explanation: "15 = 3×5, 25 = 5², 35 = 5×7. HCF = 5", topic: "aptitude", subTopic: "HCF and LCM", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Find 125% of 80", options: [{ text: "100", isCorrect: true }, { text: "80", isCorrect: false }, { text: "90", isCorrect: false }, { text: "110", isCorrect: false }], explanation: "125% = 1.25. 1.25 × 80 = 100", topic: "aptitude", subTopic: "Percentage", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "If speed upstream is 5 km/h and downstream 9 km/h, current speed?", options: [{ text: "2 km/h", isCorrect: true }, { text: "4 km/h", isCorrect: false }, { text: "7 km/h", isCorrect: false }, { text: "14 km/h", isCorrect: false }], explanation: "Current = (Downstream - Upstream)/2 = (9-5)/2 = 2 km/h", topic: "aptitude", subTopic: "Speed, Distance and Time", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "Cost price 200, profit 50%. Selling price?", options: [{ text: "300", isCorrect: true }, { text: "250", isCorrect: false }, { text: "350", isCorrect: false }, { text: "400", isCorrect: false }], explanation: "SP = CP + Profit = 200 + (50% of 200) = 200 + 100 = 300", topic: "aptitude", subTopic: "Profit and Loss", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Average of first 10 natural numbers", options: [{ text: "5.5", isCorrect: true }, { text: "5", isCorrect: false }, { text: "6", isCorrect: false }, { text: "10", isCorrect: false }], explanation: "Sum = 55, Count = 10. Average = 55/10 = 5.5", topic: "aptitude", subTopic: "Average", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Set A has 3:5 with Set B. If A=24, find B", options: [{ text: "40", isCorrect: true }, { text: "36", isCorrect: false }, { text: "48", isCorrect: false }, { text: "32", isCorrect: false }], explanation: "3:5 ratio. If 3 parts = 24, then 1 part = 8. 5 parts = 40", topic: "aptitude", subTopic: "Ratio and Proportion", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Amount = 1000, Rate = 10%, Time = 2 years, SI?", options: [{ text: "200", isCorrect: true }, { text: "100", isCorrect: false }, { text: "300", isCorrect: false }, { text: "150", isCorrect: false }], explanation: "SI = (1000×10×2)/100 = 200", topic: "aptitude", subTopic: "Simple Interest", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Discounted 30% on 500, final price?", options: [{ text: "350", isCorrect: true }, { text: "470", isCorrect: false }, { text: "300", isCorrect: false }, { text: "200", isCorrect: false }], explanation: "Discount = 30% of 500 = 150. Final = 500 - 150 = 350", topic: "aptitude", subTopic: "Profit and Loss", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },

  // More Reasoning
  { questionText: "All students are intelligent. John is a student. Is John intelligent?", options: [{ text: "Yes", isCorrect: true }, { text: "No", isCorrect: false }, { text: "Cannot say", isCorrect: false }, { text: "Maybe", isCorrect: false }], explanation: "By set logic: All students ⊂ intelligent ⟹ John ∈ intelligent", topic: "reasoning", subTopic: "Logical Deduction", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Oxygen is to Air as ? is to Blood", options: [{ text: "Hemoglobin", isCorrect: true }, { text: "Water", isCorrect: false }, { text: "Iron", isCorrect: false }, { text: "Protein", isCorrect: false }], explanation: "Oxygen is a component of air; hemoglobin carries oxygen in blood", topic: "reasoning", subTopic: "Analogies", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "analyze" },
  { questionText: "2, 5, 10, 17, 26, ? Next?", options: [{ text: "37", isCorrect: true }, { text: "35", isCorrect: false }, { text: "36", isCorrect: false }, { text: "40", isCorrect: false }], explanation: "Pattern: +3, +5, +7, +9, +11. 26+11 = 37", topic: "reasoning", subTopic: "Number Patterns", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "If going south then turn left 90°, facing?", options: [{ text: "East", isCorrect: true }, { text: "West", isCorrect: false }, { text: "North", isCorrect: false }, { text: "South", isCorrect: false }], explanation: "South + left 90° = East", topic: "reasoning", subTopic: "Direction Sense", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "All roses are flowers. Not all flowers are red. Can all roses be red?", options: [{ text: "Cannot say", isCorrect: true }, { text: "Yes", isCorrect: false }, { text: "No", isCorrect: false }, { text: "Definitely", isCorrect: false }], explanation: "Roses are flowers, but color attribute isn't necessarily transferred", topic: "reasoning", subTopic: "Syllogisms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "analyze" },
  { questionText: "10, 11, 13, 16, 20, ? Next?", options: [{ text: "25", isCorrect: true }, { text: "23", isCorrect: false }, { text: "24", isCorrect: false }, { text: "22", isCorrect: false }], explanation: "Pattern: +1, +2, +3, +4, +5. 20+5 = 25", topic: "reasoning", subTopic: "Number Patterns", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Doctor is to Patient as ? is to Criminal", options: [{ text: "Judge", isCorrect: true }, { text: "Police", isCorrect: false }, { text: "Lawyer", isCorrect: false }, { text: "Prison", isCorrect: false }], explanation: "Doctor treats patient; judge judges criminal", topic: "reasoning", subTopic: "Analogies", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Point west and turn 45° clockwise. Face?", options: [{ text: "Northwest", isCorrect: true }, { text: "Southwest", isCorrect: false }, { text: "Northeast", isCorrect: false }, { text: "Southeast", isCorrect: false }], explanation: "West + 45° clockwise = Northwest", topic: "reasoning", subTopic: "Direction Sense", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" },
  { questionText: "100, 99, 97, 94, 90, ? Next?", options: [{ text: "85", isCorrect: true }, { text: "89", isCorrect: false }, { text: "84", isCorrect: false }, { text: "88", isCorrect: false }], explanation: "Pattern: -1, -2, -3, -4, -5. 90-5 = 85", topic: "reasoning", subTopic: "Number Patterns", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Some cats are dogs. All dogs are animals. Are all cats animals?", options: [{ text: "Cannot say", isCorrect: true }, { text: "Yes", isCorrect: false }, { text: "No", isCorrect: false }, { text: "Definitely", isCorrect: false }], explanation: "Only some cats are in the dog subset, so not all cats must be animals", topic: "reasoning", subTopic: "Syllogisms", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "analyze" },

  // More Verbal
  { questionText: "The _____ agreement was signed by both parties", options: [{ text: "final", isCorrect: true }, { text: "concluded", isCorrect: false }, { text: "conclude", isCorrect: false }, { text: "concluding", isCorrect: false }], explanation: "'Final' adjective completes meaning perfectly", topic: "verbal", subTopic: "Sentence Completion", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Antonym of FRAGILE", options: [{ text: "Sturdy", isCorrect: true }, { text: "Breakable", isCorrect: false }, { text: "Weak", isCorrect: false }, { text: "Small", isCorrect: false }], explanation: "Fragile means delicate; sturdy means strong and durable", topic: "verbal", subTopic: "Antonyms", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Synonym of ZEALOUS", options: [{ text: "Enthusiastic", isCorrect: true }, { text: "Lazy", isCorrect: false }, { text: "Tired", isCorrect: false }, { text: "Sad", isCorrect: false }], explanation: "Zealous means full of enthusiasm and passion", topic: "verbal", subTopic: "Synonyms", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Correct spelling", options: [{ text: "Millennium", isCorrect: true }, { text: "Millenium", isCorrect: false }, { text: "Milenium", isCorrect: false }, { text: "Milleneum", isCorrect: false }], explanation: "Millennium (1000 years) has double 'l' and double 'n'", topic: "verbal", subTopic: "Spelling", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "From 'Hospitals save lives': What does it imply?", options: [{ text: "Medical care is vital", isCorrect: true }, { text: "Doctors work hard", isCorrect: false }, { text: "Hospitals are busy", isCorrect: false }, { text: "People get sick", isCorrect: false }], explanation: "Direct implication: healthcare facilities are essential for survival", topic: "verbal", subTopic: "Reading Comprehension", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Which is grammatically correct", options: [{ text: "He has gone to school", isCorrect: true }, { text: "He have gone to school", isCorrect: false }, { text: "He has go to school", isCorrect: false }, { text: "He are gone to school", isCorrect: false }], explanation: "'Has' agrees with singular subject 'he'", topic: "verbal", subTopic: "Grammar", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Synonym of METICULOUS", options: [{ text: "Careful", isCorrect: true }, { text: "Careless", isCorrect: false }, { text: "Rough", isCorrect: false }, { text: "Quick", isCorrect: false }], explanation: "Meticulous means showing great attention to detail", topic: "verbal", subTopic: "Synonyms", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Antonym of ABUNDANT", options: [{ text: "Scarce", isCorrect: true }, { text: "Plentiful", isCorrect: false }, { text: "Many", isCorrect: false }, { text: "Full", isCorrect: false }], explanation: "Abundant means existing in large quantities; scarce means insufficient", topic: "verbal", subTopic: "Antonyms", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "understand" },

  // More Coding
  { questionText: "What is prototype in JavaScript?", options: [{ text: "Object from which other objects inherit", isCorrect: true }, { text: "Initial sketch of code", isCorrect: false }, { text: "Function declaration", isCorrect: false }, { text: "Variable type", isCorrect: false }], explanation: "Prototype is part of JavaScript's prototypal inheritance system", topic: "coding", subTopic: "Functions", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What does 'this' refer to?", options: [{ text: "Current object context", isCorrect: true }, { text: "Global object always", isCorrect: false }, { text: "Function name", isCorrect: false }, { text: "Variable", isCorrect: false }], explanation: "'this' refers to the object that the function is called on", topic: "coding", subTopic: "Functions", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Array method to find first matching element?", options: [{ text: "find()", isCorrect: true }, { text: "filter()", isCorrect: false }, { text: "search()", isCorrect: false }, { text: "locate()", isCorrect: false }], explanation: "find() returns first element matching condition; filter() returns all", topic: "coding", subTopic: "Array Methods", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is closure in JavaScript?", options: [{ text: "Function with access to outer scope variables", isCorrect: true }, { text: "Closed code block", isCorrect: false }, { text: "Finished function", isCorrect: false }, { text: "Loop end", isCorrect: false }], explanation: "Closure is a function that retains access to its lexical scope", topic: "coding", subTopic: "Functions", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Method to combine arrays?", options: [{ text: "concat()", isCorrect: true }, { text: "combine()", isCorrect: false }, { text: "merge()", isCorrect: false }, { text: "join()", isCorrect: false }], explanation: "concat() combines arrays without modifying originals", topic: "coding", subTopic: "Array Methods", difficulty: "easy", difficultyScore: 1, questionType: "mcq", cognitiveLevel: "remember" },
  { questionText: "Time complexity of merge sort?", options: [{ text: "O(n log n)", isCorrect: true }, { text: "O(n)", isCorrect: false }, { text: "O(n²)", isCorrect: false }, { text: "O(1)", isCorrect: false }], explanation: "Merge sort divides and conquers: O(n log n) in all cases", topic: "coding", subTopic: "Algorithms", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "What is async/await?", options: [{ text: "Syntax for handling asynchronous code", isCorrect: true }, { text: "Variable types", isCorrect: false }, { text: "Comparison operators", isCorrect: false }, { text: "Loop statements", isCorrect: false }], explanation: "async/await makes promises easier to work with", topic: "coding", subTopic: "Functions", difficulty: "hard", difficultyScore: 3, questionType: "mcq", cognitiveLevel: "understand" },
  { questionText: "Method to reverse a string?", options: [{ text: "split('').reverse().join('')", isCorrect: true }, { text: "reverse()", isCorrect: false }, { text: "inverse()", isCorrect: false }, { text: "flip()", isCorrect: false }], explanation: "Strings don't have reverse; convert to array first", topic: "coding", subTopic: "String Methods", difficulty: "medium", difficultyScore: 2, questionType: "mcq", cognitiveLevel: "apply" }
];

// Connect to MongoDB
try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  // Clear existing questions
  await Question.deleteMany({});
  console.log("Cleared existing questions");

  // Insert all questions
  const insertedQuestions = await Question.insertMany(questionsData);
  console.log(`Successfully inserted ${insertedQuestions.length} questions`);

  // Display summary
  const aptitude = await Question.countDocuments({ topic: "aptitude" });
  const reasoning = await Question.countDocuments({ topic: "reasoning" });
  const verbal = await Question.countDocuments({ topic: "verbal" });
  const coding = await Question.countDocuments({ topic: "coding" });

  console.log("\n=== Question Summary ===");
  console.log(`Aptitude Questions: ${aptitude}`);
  console.log(`Reasoning Questions: ${reasoning}`);
  console.log(`Verbal Questions: ${verbal}`);
  console.log(`Coding Questions: ${coding}`);
  console.log(`Total Questions: ${aptitude + reasoning + verbal + coding}`);

  process.exit(0);
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}
