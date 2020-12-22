import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Label } from './components/form';
import { P } from './components/result';
import withLoading from './components/loading';


function App() {
  const Loading = withLoading(P);

  const [appState, setAppState] = useState({
    loading: false,
    dataResposta: null,
    status: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    // const apiUrl = `https://hash-front-test.herokuapp.com/`;
    const apiUrl = `https://hash-front-test.herokuapp.com/?timeout`;
    const config = {
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
      }
  }
   
    var obj = {
      amount: 0,
      installments: 0,
      mdr: 0
    };
    const data = JSON.stringify(obj)
   
    axios.post(apiUrl, data, config)
    .then((respos) => {
      const resposta = respos.data;
      const status = respos.status;
      setAppState({ loading: false, status: status, dataResposta: resposta});
    })
    .catch((err)=>{
      const error = err.response;
      setAppState({ loading: false, status: error.status, dataResposta: null});
      console.log(error.status);
    });

  }, [setAppState]);

  return (
    <div className="App">
      <div className="container">
        <div className="containerForm">
          <h1>Simule sua Antecipação</h1>
          <Label for="valor" name="labelValor" id="labelValor" className="labelValor" labelContent="Informe o valor da venda"></Label>
          <Input type="number" name="valor" id="valor" className="valor"></Input>
          <Label for="parcelas" name="labelParcelas" id="labelParcelas" className="labelParcelas" labelContent="Em quantas parcelas"></Label>
          <Input type="number" name="parcelas" id="parcelas" className="parcelas"></Input>
          <p id="parcelasObs" className="parcelasObs">Máximo de 12 parcelas</p>
          <Label for="labelPercentual" name="labelPercentual" id="labelPercentual" className="labelPercentual" labelContent="Informe o percentual de MDR"></Label>
          <Input type="number" name="percentual" id="percentual" className="percentual"></Input>
        </div>
        <div className="containerResult">
          <Loading isLoading={appState.loading} respos={appState.dataResposta} />
        </div>
      </div>
    </div>
  );
}

export default App;