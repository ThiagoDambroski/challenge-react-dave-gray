import React from 'react'



function Square({color}) {
    
  return (
    <div className='square'>
        {color ? (
        <p style={{backgroundColor: `${color}` }}>{color}</p>
        ) : (<p>Empty square</p>)}
    </div>
   
  )
}

export default Square