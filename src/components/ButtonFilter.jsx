import React, { useEffect } from 'react'
import useAxios from '../hooks/useAxios';

function ButtonFilter({fetchData : fetchAPI}) {
    const {fetchData, response: {categories}, loading} = useAxios('categories');
    useEffect(() => {
        fetchData();
    }, []);

    if(loading) {
        return (
            <div className='animate-pulse my-5 inline-block text-center'>
                {[...Array(35).keys()].map(num =>(
                    <div key={num} className="h-7 w-20 bg-gray-300 m-1 rounded-md inline-block"> </div>
                ))}
            </div>
        );
    }

    const clickFilterButton = e => {
        fetchAPI({params:{category:e.target.value}});
    }

  return (
    <div className='text-center my-5'>
        {categories && categories.map(button => (
            <button onClick={clickFilterButton} value={button} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {button}
            </span>
          </button>
         ))}
    </div>
  )
}

export default ButtonFilter