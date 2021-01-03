import React from 'react';
import CurrencyInput from 'react-currency-input';

export const Label = props => {
    return (
        <label for={props.valor} name={props.name} id={props.id} className={props.className}>{props.labelContent}</label>
    )
}

export const Input = props => {
    return (
        <input type={props.type} max={props.max} name={props.name} id={props.id} className={props.className} onChange={props.onChange} value={props.value} required></input>
    )
}

export const CurrencyInputMask = props => {
    return (
        <CurrencyInput decimalSeparator="," isNumericString={props.isNumericString} displayType={props.displayType} thousandSeparator="." prefix="R$" name={props.name} id={props.id} className={props.className} onChange={props.onChange} value={props.value} required></CurrencyInput>
    )
}
