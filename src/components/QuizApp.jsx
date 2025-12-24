import { useContext } from 'react';
import tumblr from '../assets/tumblr.png'
import Button from './Button';
import { QuizDataContext } from '../context/QuizContext';



 export const indexToAlphabet =(index)=>{
    return String.fromCharCode(65 + index)
 }
const QuizApp = () => {
  
  const [currentQuestionIndex,setcurrentQuestionIndex,SingleQuestion] = useContext(QuizDataContext)
console.log(SingleQuestion);

    
    
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
        className='bg-white border px-5 py-3 rounded-xl  mb-3  text-lg'>  <span className='font-medium'> 
          <strong>{indexToAlphabet(index)}</strong> | {e} </span> 
 </div>
  })}       
  

  
    </div>
    <Button/>
    </div>
   </div>
  )
}

export default QuizApp