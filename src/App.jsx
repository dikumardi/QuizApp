import React from 'react'
import QuizApp from './components/QuizApp'

const App = () => {
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

  return (
    <div>

    {quizData.map((e,index)=>{
      return (
        <QuizApp key={index} question={quizData[`${index}`].question} options={quizData[`${index}`].options} answer={quizData[`${index}`].answer}  index={index} />
        
      )
    })
  
  }

    
    </div>
  )
}

export default App


//     <QuizApp question={quizData[0].question} options={quizData[0].options} answer={quizData[0].answer}  />
