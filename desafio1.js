const 
    nota1 = Math.floor(Math.random() * 10) +1,
    nota2 = Math.floor(Math.random() * 10) +1,
    nota3 = Math.floor(Math.random() * 10) +1,
    media = (nota1 + nota2 + nota3) / 3;

console.log(`Nota 1: ${nota1}`)
console.log(`Nota 2: ${nota2}`)
console.log(`Nota 3: ${nota3}`)
console.log(`\nMédia: ${media.toFixed(2)}`)

if (media <= 5) {
    console.log('\x1b[31mReprovado! \x1b[0m')
}else if (media >= 7) {
    console.log('\x1b[32mAprovado \x1b[0m')
}else {
    console.log('\x1b[33mExame! \x1b[0m')
}
