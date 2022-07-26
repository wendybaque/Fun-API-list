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
            <button onClick={clickFilterButton} value={button} key={button} className="relative inline-flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                {button}
          </button>
         ))}
    </div>
  )
}

export default ButtonFilter