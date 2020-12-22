import React from 'react';

export const P = props => {

    const { respos } = props;
    // if (!respos || respos === null || respos === undefined) return <p>Sem um resultado</p>;
    return (
        <div>
            <label name="resultadoTitulo" id="resultadoTitulo" className="resultadoTitulo">VOCÊ RECEBERÁ:</label>
            <hr></hr>
            <div className="resultText">
                <p>Amanhã:<strong>{respos['1']}</strong></p>
                <p>Em 15 dias:<strong>{respos['15']}</strong></p>
                <p>Em 30 dias:<strong>{respos['30']}</strong></p>
                <p>Em 90 dias:<strong>{respos['90']}</strong></p>
            </div>
        </div>
    );

}