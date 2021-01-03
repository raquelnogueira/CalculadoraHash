import React from 'react';

export const Result = props => {

    const res = props.dataResponse;
    console.log(res);

    // Verificação para garantir que haja uma resposta a ser renderizada, prevenindo para que a tela não fique adequada.
    if (!res || res === null || res === undefined) return <p>Sem um resultado</p>;
    return (
        <div>
            <label name="resultadoTitulo" id="resultadoTitulo" className="resultadoTitulo">VOCÊ RECEBERÁ:</label>
            <hr></hr>
            <div className="resultText">
                {Object.keys(res).map((index) => {
                    if(index === '1'){
                        return( <p key={index}>Amanhã: <strong>{res[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></p> )
                    }else{
                        return( <p key={index}>Em {index} dias: <strong>{res[index].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong></p> )
                    }
                })}
              
            </div>
        </div>
    );

}