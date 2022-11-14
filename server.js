import data from './data.js'
//importar o criador de servidor
import  express  from "express";
//criar a aplicação de servidor
const app = express()

//criar rota com sua função de callback com o req e res
app.get('/api/products', (req, res)=>{
    //enviar a resposta
    res.send(data.products)
})

//definir a porta
const port = process.env.PORT || 5000

//escutar a porta
app.listen(port, ()=>{
    console.log('funcionou porra!')
})