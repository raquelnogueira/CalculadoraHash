import React from { react };

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <h1> Simule sua Antecipação </h1>
                <form>

                    <label for="valor" name="labelValor" id="labelValor">Informe o valor da venda*</label>
                    <input type="text" name="valor" id="valor" required />
                    <label for="quantidade" name="labelQuantidade" id="labelQuantidade" >Em quantas parcelas*</label>
                    <input type="text" name="quantidade" id="quantidade" required />
                    <p id="parcelas">Máximo de 32 parcelas</p>
                    <label for="percentual" name="labelPercentual" id="labelPercentual">Informe o percentual de MDR*</label>
                    <input type="text" name="percentual" id="percentual" required />

                </form>
            </div>
        );
    }
}