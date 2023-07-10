const fs = require('fs')

const arqAntigo = "arquivo.txt"
const arqNovo = "Novo.txt"

fs.rename(arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
    } else {
        console.log('Arquivo renomeado!')
    }
})