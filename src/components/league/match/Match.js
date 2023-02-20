import React from 'react'
import './Match.css'

const Match = ({el}) => {
  return (
    <div className='div' style={{backgroundColor:'red'}}>
        <h3>{el.T1[0].Nm}:{el.Tr1}</h3>
        <h3>{el.T2[0].Nm}:{el.Tr2}</h3>
    </div>
  )
}

export default Match