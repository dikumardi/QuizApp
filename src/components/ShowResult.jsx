import React, { useContext } from 'react'
import tumblr from '../assets/tumblr.png';
import { QuizDataContext } from '../context/QuizContext';

const ShowResult = () => {
  const [currentQuestionIndex,setcurrentQuestionIndex,SingleQuestion,num,score,setScore] = useContext(QuizDataContext)
  return (
    <>
     <div className="w-full h-screen bg-gray-100">
    <div className='w-[400px] h-[200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-2xl bg-white'>

    <div 
    style={{backgroundImage:`url(${tumblr})`,}} 
    className="  w-[400px] h-[200px] rounded-2xl flex items-center justify-center  mb-3">

   <h1 className='text-3xl font-semibold text-gray-800'>Final Score is : {score}</h1>

    </div>
    
    </div>
   </div>
    
    </>
  )
}

export default ShowResult