  <div className='bg-gray-700 h-screen w-full'>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white lg:w-[350px]">
    <div className=" lg:flex flex-col justify-center items-center ">
    <div className="flex gap-7 bg-gray-500 rounded-xl ">
    <button className='bg-white rounded-xl text-black  px-7 py-1 lg:py-2'>Login</button>
    <button>Register</button>
    </div>
    </div>
    <h1 className='font-bold text-3xl whitespace-nowrap mt-6'>Let's Play Quiz,</h1>
    <p>Enter your information below</p>
    <form className='mt-6 space-y-3'>

     {/* Email */}
         
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Enter Password </label>
            <input
              type="password"
              
              placeholder="Enter your Password "
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>



         
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-400 text-black py-2 rounded mt-4"
          >
            LETS  START QUIZ
          </button>
    </form>
    </div>
    </div>