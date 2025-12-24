import React, { useContext, useState } from 'react'
import { QuizDataContext } from '../context/QuizContext'

const Button = () => {
      const [currentQuestionIndex,setcurrentQuestionIndex,SingleQuestion] = useContext(QuizDataContext)
    
  return (
    <>
    <div className="flex items-center justify-center">
    <button onClick={()=>{setcurrentQuestionIndex(currentQuestionIndex+1)}}
     className='px-10 py-3 bg-black text-white rounded-2xl
    '>Next</button>
    </div>
    </>
  )
}

export default Button