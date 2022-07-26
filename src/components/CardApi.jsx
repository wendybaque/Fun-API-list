import React from 'react'

const CardApi = ({api}) => {
    const renderDetail = (text, field) => <p>{text}: <span className='font-semibold'>{api[field] || '-'}</span></p>
  return (
  <a href={api.Link} alt="renvoi vers l'api" target="_blank" rel='noreferrer'>
    <div className='border-1 p-2 m-2 rounded-md drop-shadow-lg text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 cursor-pointer h-full'>
        {renderDetail('Title', 'API')}
        {renderDetail('Description', 'Description')}
        {renderDetail('Auth', 'Auth')}
        {renderDetail('Cors', 'Cors')}
        {renderDetail('Category', 'Category')}
    </div>
  </a>
  )
}

export default CardApi
