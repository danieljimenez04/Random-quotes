import React from 'react'

const Quote = ({getRandomQuote,getRandomAuthor,getRandomColor,clickButton}) => {

  const buttonStyle={backgroundColor:getRandomColor}  
  const quoteStyle={color:getRandomColor}
  return (
   <div className="quote-box__content">
    <div style={quoteStyle} className="quote-box-grid">
        <i class='bx bxs-quote-left'></i>
        <div className='quote__content'>
            {getRandomQuote}
        </div>
        <div className='author__content'>
            {getRandomAuthor}
        </div>
    </div>
    
    <button onClick={clickButton} style={buttonStyle}>&#62;</button>
   </div>
   
   
  )
}

export default Quote