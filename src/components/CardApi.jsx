import React from 'react'

const CardApi = ({api}) => {
    const renderDetail = (text, field) => <p>{text}: <span className='font-semibold'>{api[field] || '-'}</span></p>
  return (
  <a href={api.Link} alt="renvoi vers l'api" target="_blank" rel='noreferrer'>
    <div className='border-1 p-2 m-2 rounded-md drop-shadow-lg text-gray-600 bg-slate-100 hover:bg-pink-100 cursor-pointer h-full'>
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
