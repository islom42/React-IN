import React from 'react'

function Book({title, img, author}) {
  return (
    <div className='container'>
      <div className="book__wrapper">
        <img src={img} alt="book cover" />
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default Book