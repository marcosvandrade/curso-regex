const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com ...`

console.log(texto.match(/@.*\b/g))