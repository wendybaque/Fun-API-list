import React, { useState } from 'react'

function Jumbotron({fetchData}) {
  const [value, setValue] = useState("");
  const handleEnter = e => {
    if(e.key === 'Enter') {
      fetchData({params:{title:value}});
      setValue('');
    }
  }

  const handleButtonSearch = () => {
    if(value.length) {
      fetchData({params:{title:value}});
      setValue('');
    }
  }

  return (
    <div className='py-20 px-2 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <h1 className='text-2xl text-white font-semibold'>Fun List APIs</h1>
      <div className='flex item-center justify-center mt-5'>
        <input 
        type="search" 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        onKeyDown={handleEnter}
        placeholder='Random facts of web...' 
        className='focus:outline-none px-4 py-2 md:w-80 rounded-l-lg drop-shadow-lg'/>
        <button 
        type='button' 
        onClick={handleButtonSearch}
        className='bg-indigo-500 border-l px-4 py-2 text-white rounded-r-lg drop-shadow-lg flex items-center justify-center'> <i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Jumbotron

