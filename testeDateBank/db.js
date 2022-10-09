const { MongoClient } = require('mongodb')

const testeee = async function(){

    const uri = "mongodb://127.0.0.1:27017/"

    const client = new MongoClient(uri)

    
    try {
        await client.connect()

        const datebase = client.db('zerograu')
        const cardapio = datebase.collection('cardapio')


        const query = {tamanho: 'gg'}
        const produto = await cardapio.find(query)

        await produto.forEach(i =>{
            const conteuuudo = i

            meuNome.innerHTML = 'uuuuu'
        })
        

    }finally {
        await client.close()
    }

}

// run().catch(console.dir)

module.exports = testeee