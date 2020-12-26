import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, Label } from './components/form';
import { Result } from './components/result';
import withLoading from './components/loading';


function App() {
  const Loading = withLoading(Result);

  const [payload, setPayload] = useState({
    amount: 0,
    installments: 0,
    mdr: 0
  });

  const [appState, setAppState] = useState({
    loading: false,
    dataResponse: null,
    status: null
  });

  const handleChange = event => {
    if (event.target.className === 'valor') {
      event.target.value = event.target.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      setPayload((prevState) => ({
        ...prevState,
        amount: event.target.value
      }));
    } else if (event.target.className === 'parcelas') {
      const val = event.target.value;
      const max = 120;
      const newVal = val < max ? val : max;
      event.target.value = newVal;
      setPayload((prevState) => ({
        ...prevState,
        installments: event.target.value
      }));
    } else if (event.target.className === 'percentual') {
      setPayload((prevState) => ({
        ...prevState,
        mdr: event.target.value
      }));
    }
  }

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://hash-front-test.herokuapp.com/`;
    //const apiUrl = `https://hash-front-test.herokuapp.com/?timeout`;
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    }

    const data = JSON.stringify(payload);

    axios.post(apiUrl, data, config)
      .then((res) => {
        const response = res.data;
        const status = res.status;
        setAppState({
          loading: false,
          status: status,
          dataResponse: response
        });
      })
      .catch((err) => {
        const error = err.response;
        setAppState({
          loading: false,
          status: error.status,
          dataResponse: error.data
        });
      });

  }, [setAppState, payload]);

  return (
    <div className="App">
      <div className="container">
        <div className="containerForm">
          <h1>Simule sua Antecipação</h1>
          <Label for="valor" name="labelValor" id="labelValor" className="labelValor" labelContent="Informe o valor da venda"></Label>
          <Input type="number" name="valor" id="valor" className="valor" onChange={handleChange}></Input>
          <Label for="parcelas" name="labelParcelas" id="labelParcelas" className="labelParcelas" labelContent="Em quantas parcelas"></Label>
          <Input type="number" name="parcelas" id="parcelas" className="parcelas" max={12} onChange={handleChange}></Input>
          <p id="parcelasObs" className="parcelasObs">Máximo de 12 parcelas</p>
          <Label for="labelPercentual" name="labelPercentual" id="labelPercentual" className="labelPercentual" labelContent="Informe o percentual de MDR"></Label>
          <Input type="number" name="percentual" id="percentual" className="percentual" onChange={handleChange}></Input>
        </div>
        <div className="containerResult">
          <Loading isLoading={appState.loading} status={appState.status} dataResponse={appState.dataResponse} />
        </div>

      </div>
    </div>
  );
}

export default App;