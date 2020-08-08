// Dados <    
    //Lista para o loop dos professores.
const proffys = [
    {
        name: "André Santana",
        avatar:"https://avatars0.githubusercontent.com/u/58229145?s=460&u=ad9c66cfa85fb5f3b27b3da85250053e21cb5b0a&v=4",
        whatsapp:"011 994770226",     
        bio:"Entusiasta das melhores tecnologias do mercado.<br><br>Apaixonado por explorar e aprender. Sempre em constante evolução de aprendizado e práticas.", 
        subject:"Computer engineer", 
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220] },
];

//Lista para o loop das matérias.
const subjects = [       
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];
//Lista para o loop da Semana.
const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
// > 
// Funcionalidades <

  // const title = "Hi from André"
function getSubjects(subjectNumber) {
    const position = +subjectNumber - 1;
    return subjects[position]
}
function pageLanding(req, res){
    return res.render("index.html")
}
function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", {proffys, filters, subjects, weekdays});
  }

function pageGiveClasses(req, res) {
    const dados = req.query;
  
    //Se o dados nao estiver vazio
    const isNotEmpty = Object.keys(dados).length > 0;
    if (isNotEmpty) {

      dados.subject = getSubjects(dados.subject);

      //adicione o novo proffy ao array      
      proffys.push(dados);

      //e retorne pra pagina study
      return res.redirect("/study");
    }
    //se nao, volte para give-classes
    return res.render("give-classes.html", {subjects, weekdays,});
  }
// >
// Servidor <
const express = require('express')
const server = express()

//inportar nunjucks (nunjucks é uma engine tamplate.)
const nunjucks = require('nunjucks')
//configurar nunjucks
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//configurar arquivos estáticos (css, script, imagens).
server.use(express.static("public"))
//rotas a aplicaçã
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)

// Start do servidor
server.listen(5500)
// >