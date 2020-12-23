import React from 'react';

export const P = props => {

    const { res } = props;
    // if (!res || res === null || respos === undefined) return <p>Sem um resultado</p>;
    return (
        <div>
            <label name="resultadoTitulo" id="resultadoTitulo" className="resultadoTitulo">VOCÊ RECEBERÁ:</label>
            <hr></hr>
            <div className="resultText">
                <p>Amanhã:<strong>{res['1']}</strong></p>
                <p>Em 15 dias:<strong>{res['15']}</strong></p>
                <p>Em 30 dias:<strong>{res['30']}</strong></p>
                <p>Em 90 dias:<strong>{res['90']}</strong></p>
            </div>
        </div>
    );

}