const texto = `CPF dos aprovados:
- 600.567.890-12
- 765.998.345-23 ...`

console.log(texto.match(/[0-9]+/g))