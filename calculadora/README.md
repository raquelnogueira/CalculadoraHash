# Calculadora para calculo de antecipação

É um projeto referente ao teste Hash, sua funcionalidade é ser uma interface para realizar o cálculo de antecipação segundo os critérios descritos no teste.

## Para rodar

Para rodar é necessário ter instalado o NodeJs e React.
Você precisa clonar o projeto em sua máquina, abrir na sua IDE de prefencia e rodar como preferir (através do comando ###`npm start` ou pelo start da IDE)

## Sobre o funcionamento 

Para utilizar a calculadora basta preencher todos os campos e o resultado aparecerá no espaço ao lado.
Os campos devem ser preenchidos de acordo como é descrito para que o resultado apareça, mas caso não seja aparecerá ao lado o que está incorreto.

## Sobre o código

Ele foi separado em três pastas, além dos arquivos nativos, uma contendo o código para o controle das respostas referentes aos diversos retornos da requisição, uma contendo os componentes de resposta da requisição e a última contendo os componentes do formulário.

As pastas "result" e "form" contém apenas código para a componetização de inputs, labels e p, mesmo elas tendo os arquivos de css referentes acabei não utilizando os mesmos. O diferencial do input do form estão na utilização de uma biblioteca para criar componentes com máscara. No input do result utilizei uma pequena função para dinamizar a exibição dos resultados.

Já a pasta de "loading" se refere ao controle do retorno, contendo seu index que coloca a mensagem de acordo com o status da chamada e chamando o index de "result" quando a requisição é bem sucedica.

O arquivo nativo "App.js" serviu para unir tudo, nele existe um método para o controle dos valores dos insertes que também passar esses valores para a variável payload, existe também um método para a realização da requisição, que contém a apiUrl, a conversão do payload para json,a requisição em si e o início do tratamento do resultado que consiste em setar a variável appState. Também é nele que fica o código html base da página.
O arquivo nativo "App.css" ficou com toda a formatação css da página.
