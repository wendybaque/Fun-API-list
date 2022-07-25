import React from 'react'
import CardApi from '../components/CardApi';

function ListApi({response, loading}) {
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