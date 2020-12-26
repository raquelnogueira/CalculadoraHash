import React from 'react';

export const Result = props => {

    const res = props.dataResponse;

    if (!res || res === null || res === undefined) return <p>Sem um resultado</p>;
    return (
        <div>
            <label name="resultadoTitulo" id="resultadoTitulo" className="resultadoTitulo">VOCÊ RECEBERÁ:</label>
            <hr></hr>
            <div className="resultText">
                {Object.keys(res).map((index) => {
                    if(index === '1'){
                        return( <p key={index}>Amanhã:<strong>{res[index]}</strong></p> )
                    }else{
                        return( <p key={index}>Em {index} dias:<strong>{res[index]}</strong></p> )
                    }
                })}
              
            </div>
        </div>
    );

}