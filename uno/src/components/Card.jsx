import React from "react";
import "./Card.css"

const Cabecalho = ({ numero }) => {

    return (
        <div className="cabecalho">
            <span>{numero}</span>
        </div>
    );
};
const Centro = ({numero}) => {

    return (
        <div className="centro">
            <span>{numero}</span>
        </div>
    );
};
const Rodape = ({numero}) => {

    return (
        <div className="rodape">
            <span>{numero}</span>
        </div>
    );
};

const Card = ({ numero }) => {
    return (
    <div className = "carta">
        <Cabecalho numero={numero}/>
        <Centro numero={numero}/>
        <Rodape numero={numero}/>
    </div>
    )
}   


export default Card;