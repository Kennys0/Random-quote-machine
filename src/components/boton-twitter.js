import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


function ButtonTwitter({ tweet, fondo ,author}){

    const envio = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + tweet + '" ' + author
    return(
        <a href={envio}><button className='tweet-quote' style={{'background-color': fondo, 'transition': '2s'}} ><FontAwesomeIcon icon={faTwitter} /></button></a>
    );
}

export default ButtonTwitter;