import React, { useContext } from 'react'
import QuizApp from './components/QuizApp'
import { QuizDataContext } from './context/QuizContext';
import ShowResult from './components/ShowResult';

const App = () => {
 const [num] = useContext(QuizDataContext);


  return (
    <div>

 { num >=10 ? <ShowResult/> : <QuizApp />}

    </div>
  )
}

export default App


//     <QuizApp question={quizData[0].question} options={quizData[0].options} answer={quizData[0].answer}  />
