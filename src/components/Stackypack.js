import { useEffect, useState } from 'react';

function Stackypack(props) {



useEffect(() => {
    const script = document.createElement('script');
  
    script.src="../game/game.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

    return (
        
        <div id="board"> 
            <button id="start-btn" > Start </button>
        </div>
    )
}

export default Stackypack;