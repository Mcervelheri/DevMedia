const express = require('express');
const app = express();

app.get('/', (req, res) => {

    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let idade = req.query.idade;
    let email = req.query.email;
    let genero = req.query.genero;
    let idioma = req.query.idioma;


    res.json({nome: nome, sobrenome: sobrenome, idade:idade,email:email,genero:genero,idioma:idioma});
});

app.get('/usuarios', (req, res)=>{
    const usuarios = [
        {
          id: 1,
          nome: req.query.nome,
          sobrenome: req.query.sobrenome,
          idade: req.query.idade,
          email: req.query.email,
          genero: req.query.genero,
          idioma: req.query.idioma,
        },
      ];
    
      // Retornar os usuários como resposta da requisição
      res.json(usuarios);
    });

app.listen(3000, () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
})