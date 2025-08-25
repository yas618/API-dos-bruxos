// Importar pacotes/bibliotecas
import express from "express";
import dados from "./src/data/dados.js";

const { varinhas, animais, pocoes } = dados;

// Criar aplicação com Express e configurar para aceitar JSON
const app = express();
app.use(express.json());

// Definir constante para porta do servidor
const serverPort = 3000;

// Rota principal GET para "/"
app.get("/", (req, res) => {
    res.send("Vamos de Harry Potter");
});

// Rota de todas varinhas
app.get("/varinhas", (req, res) => {
  res.json(varinhas);
});
 
// Rota animais 

app.get("/animais", (req, res) => {
  res.json(animais);
});

// Rota pocoes

app.get("/pocoes", (req, res) => {
  res.json(pocoes);
});

//Criar as rotas/ varinhas/ animais e/pocoes no servidor Espress

app.get("/animais/id", (req,res) => {
    let id = req.params.id
    id = parseInt(id)
    const animal = animal.find(b => b.id === id)

    if(animal){
        res.status(200).json(animal)
    } else{
        res.status(404).json({
            mensagem: "Animal não encontrado"
        })
    }
});

app.get("/pocoes/:id", (req, res) => {
    let id = req.params.id
    id = parseInt(id)
    const pocoes = pocoes.find(b => b.id === id)

    if(pocao){
        res.status(200).json(pocoes)
    }else{
        res.status(402).json({
            mensagem: "poção não encontrada"
        })
    }
});

app.get("/varinha/:id", (req, res) => {
    let id = req.params.id
    id = parseInt(id)
    const varinha = varinha.find(b => b.id === id)

    if(varinha){
        res.status(200).json(varinha)
    }else{
        res.status(402).json({
            mensagem: "poção não encontrada"
        })
    }
});

       



// Iniciar servidor escutando na porta definida
app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} !!!`);
});



