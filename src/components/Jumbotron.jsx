import React from 'react'

function Jumbotron() {
  return (
    <div className='py-20 px-2 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg'>
      <h1 className='text-2xl text-white font-semibold'>Fun List APIs</h1>
      <div className='flex item-center justify-center mt-5'>
        <input type="text" placeholder='Random facts of web...' className='focus:outline-none px-4 py-2 md:w-80 rounded-l-lg drop-shadow-lg'/>
        <button type='button' className='bg-indigo-500 border-l px-4 py-2 text-white rounded-r-lg drop-shadow-lg flex items-center justify-center'> <i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Jumbotron

