import React, { createContext, useState } from 'react'

export const QuizDataContext = createContext();

const QuizContext = (props) => {
      const quizData = [
  { 
    question: "Who is the founder of Microsoft?",
     options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], 
     answer: "Bill Gates"},
  { 
    question: "Which is the smallest continent?",
     options: ["Australia", "Europe", "Antarctica", "South America"], 
     answer: "Australia"},
  { 
    question: "Which gas is used in balloons to make them float?", 
    options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"], 
    answer: "Helium"},
  { 
    question: "Which planet is called the Morning Star?", 
    options: ["Mars", "Venus", "Jupiter", "Mercury"], 
    answer: "Venus"},
  { 
    question: "Which animal is known as the Ship of the Desert?",
     options: ["Horse", "Camel", "Elephant", "Donkey"], 
     answer: "Camel"},
  { 
    question: "Which country is famous for the Great Wall?", 
    options: ["India", "China", "Japan", "Korea"], 
    answer: "China"},
  { 
    question: "Which vitamin helps in blood clotting?", 
    options: ["Vitamin A", "Vitamin K", "Vitamin D", "Vitamin C"], 
    answer: "Vitamin K"},
  { 
    question: "Who is the author of 'The Alchemist'?", 
    options: ["Paulo Coelho", "J.K. Rowling", "Mark Twain", "Hemingway"], 
    answer: "Paulo Coelho"},
  { 
    question: "Which is the largest bird?", 
    options: ["Ostrich", "Eagle", "Albatross", "Peacock"], answer: 
    "Ostrich"},
  { 
    question: "What is the main gas in the air we breathe?", 
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 
    "Nitrogen"
  },
];

    

 const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0)
 let SingleQuestion = quizData[currentQuestionIndex];
    
 let num = quizData.length

  return (
    <QuizDataContext.Provider 
    value={[currentQuestionIndex,setcurrentQuestionIndex,SingleQuestion,num]}>{props.children}</QuizDataContext.Provider>
  )
}

export default QuizContext