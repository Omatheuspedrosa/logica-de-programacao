# logica-de-programacao

Praticando com Javascript

## operadores-aritméticos-js

~~~js
const num1 = 40;
const num1 = 20;
~~~

A palavra `const` é utilizada para a declaração de variáveis que não vão ser reatribuídas (que não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`A soma dos números é: ${num1 + num2}`);
console.log(`A subtração dos números é: ${num1 - num2}`);
console.log(`A multiplicação dos números é: ${num1 * num2}`);
console.log(`A divisão dos números é: ${num1 / num2}`);
console.log(`O resto da divisão dos números é: ${num1 % num2}`);
~~~

Em cada umas das operações, temos um operador aritmético.

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto da divisão


## operadores-de-atribuicao.js

~~~js
let numero = 10;
~~~

Declaramos a a variável `numero` usando a palavra `let`, pois essa variável será **reatribuída** ao longo do nosso código .

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição.

~~~js
console.log(`\nO número é inicialmente igual a: ${numero}\n`);
console.log(`\x1b[34mApós atribuir somando o número 10: ${numero += 10}\x1b[0m`)
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`)
console.log(`Reatribuindo e multiplicando por 10: ${numero *= 10}`)
console.log(`Reatribuindo e dividindo por 10: ${numero /= 10}`)
console.log(`Reatribuindo e pegando o resto da divisão por 10: ${numero %= 10}`)
console.log(`Incrementando o número em 1: ${++numero}`)
console.log(`Decrementando o número em 1: ${--numero}`)
console.log(`O número final é igual: ${numero}`)
~~~

Operadores de atribuição:

* `+=` -> atribuição soma
* `-=` -> atribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `%=` -> atribuição com resto da divisão
* `++` -> atribuição com ***incremento 1*** (pode ser *pré* ou *pós* incrementado)
* `--` -> atribuição com **decremento 1** (pode ser *pré* ou *pós* decrementado)
