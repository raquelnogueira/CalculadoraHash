import React from 'react';

export const P = props => {
    return(
    <p>{props.pContent}<strong>{props.pValor}</strong></p>
    )
}


// class Result extends React.Component {
//     render() {
//         return (
//           <div className="result">
//               <div id="resultado" name="resultado">
// 			<label name="resultadoTitulo" id="resultadoTitulo">VOCÊ RECEBERÁ:</label>
// 			<hr></hr>
// 				<div id="resultadoTexto" name="resultadoTexto">
// 					<p>Amanhã:</p>
// 					<p>Em 15 dias: <strong>R$0,00</strong></p>
// 					<p>Em 30 dias: <strong>R$0,00</strong></p>
// 					<p>Em 90 dias: <strong>R$0,00</strong></p>
// 				</div>
// 			</div>
//           </div>
//         );
//       }
// }