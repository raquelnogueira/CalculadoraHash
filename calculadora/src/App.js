import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Input, CurrencyInputMask, Label } from './components/form';
import { Result } from './components/result';
import withLoading from './components/loading';


function App() {
  const Loading = withLoading(Result);

  const [payload, setPayload] = useState({
    amount: 0.00,
    installments: 0,
    mdr: 0
  });

  const [appState, setAppState] = useState({
    loading: false,
    dataResponse: null,
    status: 1
  });


  // Função responsável por capturar os valores inseridos nos campos e os formata e valida, 
  // depois atribuindo esses valores para os campos do payload
  const handleChange = (event) => {
    if (event === undefined) {
      return;
    } else {
      if (event.target === undefined) {
        setPayload((prevState) => ({
          ...prevState,
          amount: event
        }));
      } else {
        if (event.target.value < 0 || event.target.value === "") { event.target.value = 0 };
        switch (event.target.className) {
          case 'parcelas':
            const val = event.target.value;
            const max = 12;
            const newVal = val < max ? val : max;
            event.target.value = newVal;
            setPayload((prevState) => ({
              ...prevState,
              installments: event.target.value
            }));
            break;
          case 'percentual':
            setPayload((prevState) => ({
              ...prevState,
              mdr: event.target.value
            }));
            break;
          default:
            break;
        }

      }
    }

  }

  // Função responsável pelo estado da aplicação, realizando a chamada para a api e controlando o carregamento
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

    
    console.log(payload);
    if (payload.amount.length > 0 && payload.installments.length > 0 && payload.mdr.length > 0) {
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
          if (error === null || error === undefined || !error) {
            setAppState({
              loading: false,
              status: 100,
              dataResponse: null
            });
          } else {
            setAppState({
              loading: false,
              status: error.status,
              dataResponse: error.data
            });
          }
        });

    } else {
      setAppState({
        loading: true,
        status: 1,
        dataResponse: null
      });
    }

  }, [setAppState, payload]);

  return (
    <div className="App">
      <div className="container">
        <div className="containerForm">
          <h1>Simule sua Antecipação</h1>
          <Label for="valor" name="labelValor" id="labelValor" className="labelValor" labelContent="Informe o valor da venda"></Label>
          <CurrencyInputMask name="valor" id="valor" className="valor" isNumericString='true' displayType='number' value={payload.amount}
           onChange={(values) => {
            const {formattedValue, value} = values;
            // formattedValue = $2,223
            // value ie, 2223
            console.log(value);
            console.log(formattedValue);
            // this.setState({profit: formattedValue})
          }}/>
           

          <Input type="number" name="parcelas" id="parcelas" className="parcelas" max={12} onChange={handleChange}></Input>

          <Label for="parcelas" name="labelParcelas" id="labelParcelas" className="labelParcelas" labelContent="Em quantas parcelas"></Label>
          <Input type="number" name="parcelas" id="parcelas" className="parcelas" max={12} onChange={handleChange}></Input>
          <p id="parcelasObs" className="parcelasObs">Máximo de 12 parcelas</p>
          <Label for="labelPercentual" name="labelPercentual" id="labelPercentual" className="labelPercentual" labelContent="Informe o percentual de MDR"></Label>
          <Input type="number" name="percentual" id="percentual" className="percentual" onChange={handleChange}></Input>
          <div className="containerResult">
            <Loading isLoading={appState.loading} status={appState.status} dataResponse={appState.dataResponse} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;