import { useContext, useState } from 'react';
import tumblr from '../assets/tumblr.png'
import Button from './Button';
import { QuizDataContext } from '../context/QuizContext';
import { ScoreDataContext } from '../context/ScoreContext';



 export const indexToAlphabet =(index)=>{
    return String.fromCharCode(65 + index)
 }
const QuizApp = () => {
 
        const [selectedIndex, setSelectedIndex] = useState(null)
        

  const [currentQuestionIndex,setcurrentQuestionIndex,SingleQuestion] = useContext(QuizDataContext)

  const [score,setscore] = useContext(ScoreDataContext)
  
    
    const ClickHandler = (e,index)=>{
    // console.log(e === SingleQuestion.answer? 'skyblue' : 'transparent');
      
    if (selectedIndex !== null)  return; // prevent re-click
       setSelectedIndex(index);
        
      //  if (e === SingleQuestion.answer) {
      //   setscore(prev => prev+1)
      //  }
      {e === SingleQuestion.answer?setscore(prev => prev+1) : ''}


  // const selectedOption = SingleQuestion.options[index];
  //       console.log(selectedOption);

  // if (selectedOption === SingleQuestion.answer) 
  //   {
  //   console.log('correct Amswrt');
  //   setscore(prev => prev+1)
    
  //   }


    
     
      setcurrentQuestionIndex(prev => prev + 1);
      setSelectedIndex(null);
    };
    



  return (
   <div className="w-full h-screen bg-gray-800">
    <div className='w-[400px] h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-2xl bg-white'>
    <div 
    style={{backgroundImage:`url(${tumblr})`,}}
     className=" w-[400px] h-[200px] rounded-t-2xl flex items-center justify-center mb-3">

    <h2 className='text-2xl text-center'>{currentQuestionIndex+1}. {SingleQuestion.question}</h2>

    </div>

    <div className="flex flex-col  rounded-b-2xl  p-3">

      
  {SingleQuestion.options.map((e,index)=>{
    return <div  key={index}
         onClick={()=>{ClickHandler(e,index)}}
     
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