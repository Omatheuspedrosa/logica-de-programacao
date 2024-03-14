let numero = 10;

console.log(`\n\x1b[36mO número é inicialmente igual a: ${numero}\n \x1b[0m`);

console.log(`Após atribuir somando o número 10: ${numero += 10}\x1b[0m`)

console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`)

console.log(`Reatribuindo e multiplicando por 10: ${numero *= 10}`)

console.log(`Reatribuindo e dividindo por 10: ${numero /= 10}`)

console.log(`Reatribuindo e pegando o resto da divisão por 10: ${numero %= 10}`)

console.log(`Incrementando o número em 1: ${++numero}`)

console.log(`Decrementando o número em 1: ${--numero}`)

console.log(`O número final é igual: ${numero}\n`)
