import './App.css';
import { Input, Label } from './components/form';
import { P } from './components/result';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="containerForm">
          <h1>Simule sua Antecipação</h1>
          <Label for="valor" name="labelValor" id="labelValor" className="labelValor" labelContent="Informe o calor da venda"></Label>
          <Input type="text" name="valor" id="valor" className="valor"></Input>
          <Label for="parcelas" name="labelParcelas" id="labelParcelas" className="labelParcelas" labelContent="Em quantas parcelas"></Label>
          <Input type="text" name="parcelas" id="parcelas" className="parcelas"></Input>
          <p id="parcelasObs" className="parcelasObs">Máximo de 12 parcelas</p>
          <Label for="labelPercentual" name="labelPercentual" id="labelPercentual" className="labelPercentual" labelContent="Informe o percentual de MDR"></Label>
          <Input type="text" name="percentual" id="percentual" className="percentual"></Input>
        </div>
        <div className="containerResult">
        <label name="resultadoTitulo" id="resultadoTitulo" className="resultadoTitulo">VOCÊ RECEBERÁ:</label>
          <div className="resultText">
            <P pContent="Amanhã: " pValor="R$0,00"></P>
            <P pContent="Em 15 dias: " pValor="R$0,00"></P>
            <P pContent="Em 30 dias: " pValor="R$0,00"></P>
            <P pContent="Em 90 dias: " pValor="R$0,00"></P>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;