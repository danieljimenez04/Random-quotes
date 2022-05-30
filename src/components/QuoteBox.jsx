import React, { useState } from 'react'
import quotes from '../json/quotes.json'
import colors from '../json/colors.json'
import Quote from './Quote'


const QuoteBox = () => {

    const getRandomElement=(array)=>{
      return array[Math.floor(Math.random()*array.length)]
    }
    
    const [getRandomQuote, setRandomQuote] = useState(getRandomElement(quotes).quote)
    const [getRandomAuthor, setRandomAuthor] = useState(getRandomElement(quotes).author)
    const [getRandomColor, setRandomColor] = useState(getRandomElement(colors).hex)

    const clickButton =()=>{
      setRandomQuote(getRandomElement(quotes).quote)
      setRandomAuthor(getRandomElement(quotes).author)
      setRandomColor(getRandomElement(colors).hex)
    }

    const quoteBoxStyle={backgroundColor:getRandomColor}

    return (
       
    <div className='quote-box__margin' style={quoteBoxStyle}>
       <Quote
       getRandomQuote={getRandomQuote}
       getRandomAuthor={getRandomAuthor}
       getRandomColor={getRandomColor}
       clickButton={clickButton}/>

    </div>
  )
}

export default QuoteBox