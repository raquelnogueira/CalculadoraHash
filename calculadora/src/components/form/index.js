import React from 'react';

export const Label = props => {
    return(
        <label for={props.valor} name={props.valor} id={props.valor} className={props.className}>{props.labelContent}</label>
    )
}

export const Input = props => {
    return(
        <input type={props.type} name={props.valor} id={props.valor} className={props.className} required></input>
    )
}
