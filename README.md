# CalculadoraHash
Página para disponibilizar calculo de antecipação relacionado ao teste da Hash

## Para o funcionamento

Para rodar essecódigo é necessário clonar o mesmo na sua máquina e ter o NodeJs instalado.
Depois disso basta abrir na sua IDE de preferencia e dar um start.

## Sobre a tela

Essa tela contém 3 campos que devem ser preenchidos conforme o solicitado (caso não seja os campos estão tratados para que você saiba o que não foi colocado corretamente).
Após o preenchimento os resultados já aparecerão.
Em caso de erro ele aparecerá no lado direito.

## Sobre o código

O código é bem simples, foi separado em 3 componentes além dos nativos.
O componente loading existe para o tratamento de erros que podem vir da requisição, controle do loading em si e também da renderização do resultado.
O componente Result mostra os resultados que vieram da requisição de forma dinâmica.
O componente Form cuida dos campos que deverão ser preenchidos para fazer o calculo. Nesse componente eu faço uso de uma biblioteca para aplicar a máscara monetária.
O App.js é utilizadopara juntar os demais componentes, montando a tela, é nele também que eu válido os campos e faço a requisição.
O App.css contém todo o css dá página, eu poderia ter deixado cada css com seu respectivo componente entretanto achei que assim ficaria mais simples.
O App.test.js contem os testes, que foram feitos com o React Testing Library.
