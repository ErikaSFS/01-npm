const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')




async function main() {
    Commander
        .version('V1')
        .option('-n, --nome[value]', "Nome do Heroi")
        .option('-p, --poder[value]', "Poder do Heroi")


        .option('-c, --cadastrar', "Cadastrar um Heroi")



        .parse(process.argv)

        const heroi = new Heroi(Commander)
        
        try {
            if(Commander.cadastrar) {
                const resultado = await Database.cadastrar(heroi)
                if(!resultado) {
                    console.error('Heroi nao foi cadastrado!')
                    return;
                }
                console.log('Heroi cadastado com sucesso!')
            }
        }
            catch (error){
                console.error('Deu Ruim', error)
            }
}


main()