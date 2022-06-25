import React from "react";
import '../stylesComponents/botones.css';

function NewQuote({ color, fondo }){
    return(
        <button className="new-quote" onClick={color} style={{'background-color': fondo, 'transition': '2s'}} >New quote</button>
    );
}

export default NewQuote;