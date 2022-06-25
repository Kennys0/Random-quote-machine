import React from "react";
import '../stylesComponents/author.css'

function Autor({ authorQuote }){
    return(
        <span className="author">- {authorQuote}</span>
    )
}

export default Autor;