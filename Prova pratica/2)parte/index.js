const path = require('path')

const myUrl = ('https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf')

console.log(`dir: '${path.dirname(myUrl)}', base: '${path.basename(myUrl)}', ext: '${path.extname(myUrl)}'`)