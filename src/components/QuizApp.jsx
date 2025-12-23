import tumblr from '../assets/tumblr.png'
 const indexToAlphabet =(index)=>{
    return String.fromCharCode(65 + index)
 }
const QuizApp = (props) => {
    console.log(props);
    console.log(props.index);
    
  return (
   <div className="w-full h-screen bg-gray-800">
    <div className='w-[400px] h-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-2xl bg-white'>
    <div style={{backgroundImage:`url(${tumblr})`,}} className=" w-[400px] h-[200px] rounded-t-2xl flex items-center justify-center   bg-red-400 mb-3">
    <h2 className='text-2xl text-center'>{props.index}. {props.question}</h2>
    </div>
    <div className="flex flex-col  rounded-b-2xl  p-3">
    {props.options.map((e,index)=>{
        return  <div key={index} className='bg-white border px-5 py-3 rounded-xl  mb-3  text-lg'> <span className='font-medium'> <strong>{indexToAlphabet(index)}</strong> | {e} </span> </div>

    })}
    </div>
    <div className="flex items-center justify-center">
    <button
    
     className='px-10 py-3 bg-black text-white rounded-2xl
    '>Next</button>
    </div>
    </div>
   </div>
  )
}

export default QuizApp