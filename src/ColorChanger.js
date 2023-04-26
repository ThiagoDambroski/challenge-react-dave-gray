import React from 'react'

function ColorChanger({color,setColor}) {
  return (
    <form className="formChange" onSubmit={(e) => e.preventDefault()}>
        <input id="changeColor" type='text' placeholder='Put a color here' value={color} 
        onChange={(e) => setColor(e.target.value)}/>
    </form>
  )
}

export default ColorChanger