import React from 'react'
import CardApi from '../components/CardApi';

function ListApi({response, loading}) {
  if(loading) {
    return (
      <div className='mt-2 grid md:grid-cols-3 gap-4 animate-pulse'>
        {[...Array(5).keys()].map(num => (
          <div key={num} className="h-28 w-full bg-gray-300 m-1 rounded-md"></div>
        ))}
      </div>
    );
  }

  if(!response.entries) {
    return <p className='text-center text-gray-500 text-2xl mt-20'>Something went wrong... ! 😫</p>
  }

  return (
    <div className='mx-2 mb-10 '>
        <h2 className='font-semibold text-sl text-gray-600'>List API</h2>
        <div className='grid gap-4 md:grid-col-3 '>
            {response.entries && response.entries.map((api, index) => 
                <CardApi api={api} key={index} />
            )}
        </div>
    </div>
  )
}

export default ListApi