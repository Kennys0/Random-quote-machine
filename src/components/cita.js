import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import '../stylesComponents/cita.css'

function Cita({ quote }){
    return(
        <span className="cita"><FontAwesomeIcon icon={faQuoteLeft} className="quote" />{quote}</span>
    );
}

export default Cita;