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

const Card = () => {
    return (
    <div className = "carta">
        <Cabecalho/>
        <Centro/>
        <Rodape/>
    </div>
    )
}   


export default Card;