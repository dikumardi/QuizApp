import { useContext, useState } from 'react';
import tumblr from '../assets/tumblr.png'
import Button from './Button';
import { QuizDataContext } from '../context/QuizContext';



 export const indexToAlphabet =(index)=>{
    return String.fromCharCode(65 + index)
 }
const QuizApp = () => {
 
        const [selectedIndex, setSelectedIndex] = useState(null)

  const [currentQuestionIndex,setcurrentQuestionIndex,SingleQuestion,score,setScore] = useContext(QuizDataContext)
  
    
    const ClickHandler = (e,index)=>{
    console.log(e === SingleQuestion.answer? 'skyblue' : 'transparent');
      
   
     
    }
   
    
  return (
   <div className="w-full h-screen bg-gray-800">
    <div className='w-[400px] h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-2xl bg-white'>
    <div 
    style={{backgroundImage:`url(${tumblr})`,}}
     className=" w-[400px] h-[200px] rounded-t-2xl flex items-center justify-center bg-red-400 mb-3">

    <h2 className='text-2xl text-center'>{currentQuestionIndex+1}. {SingleQuestion.question}</h2>

    </div>

    <div className="flex flex-col  rounded-b-2xl  p-3">

      
  {SingleQuestion.options.map((e,index)=>{
    return <div  key={index}
         onClick={()=>{ClickHandler(e,index)}}
          style={{
      //  backgroundColor:    ? 'skyblue' : 'transparent'
    }}
        className='bg-white border px-5 py-3 rounded-xl  mb-3  text-lg'>  <span className='font-medium'> 
          <strong>{indexToAlphabet(index)}</strong> | {e} </span> 
 </div>
  })}       
    {SingleQuestion.answer}

  
    </div>
    <Button/>
    </div>
   </div>
  )
}

export default QuizApp