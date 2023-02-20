import React from 'react'
import Match from './match/Match'
import './League.css'

const League = ({el}) => {
  return (
    <div className='liga'>
      <h1>{el.Snm}-{el.Cnm}</h1>
      {el.Events.map(match=><Match el={match}/>)}
    </div>
  )
}

export default League