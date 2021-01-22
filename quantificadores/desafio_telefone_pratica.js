const texto = `Lista telefônica:
- (11) 98756-1212
-98765-4321 ...`

console.log(texto.match(/\(11\)|[0-9].*\b/g))
