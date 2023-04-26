import { useState } from "react";
import Square from "./square";
import ColorChanger from "./ColorChanger";
function App() {


  const [color,setColor] = useState('');


  return (
    <>
    <Square
      color = {color}
    />
    <ColorChanger
      color = {color}
      setColor={setColor}
    />
    </>
  );
}

export default App;
