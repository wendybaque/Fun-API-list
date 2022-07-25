import React, { useEffect } from 'react'
import useAxios from '../hooks/useAxios';

function ButtonFilter() {
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

  return (
    <div className='text-center my-5'>
        {categories && categories.map(button => (
            <button className='m-1 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>{button}</button>
         ))}
    </div>
  )
}

export default ButtonFilter