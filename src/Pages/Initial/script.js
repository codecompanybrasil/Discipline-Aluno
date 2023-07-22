const frases = [
    '"A educação é a arma mais poderosa que você pode usar para mudar o mundo." - Nelson Mandela',
    '"O objetivo da educação é a formação de pessoas capazes de fazer coisas novas e não simplesmente repetir o que outras gerações fizeram." - Jean Piaget',
    '"A educação é a chave para abrir a porta de ouro da liberdade." - George Washington Carver',
    '"Uma vez que você aceita a possibilidade de olhar para o mundo de uma nova perspectiva, você nunca consegue voltar atrás para o seu antigo modo de pensar." - Albert Einstein',
    '"Aprender é a única coisa que a mente nunca se cansa, nunca tem medo e nunca se arrepende." - Leonardo da Vinci',
    '"A verdadeira educação consiste em pôr a descoberto ou fazer atualizar o melhor de uma pessoa." - Mahatma Gandhi'
]

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)]
const fraseMotivacional = document.getElementById("fraseMotivacional")


window.addEventListener("load", e => {
    fraseMotivacional.innerHTML = fraseAleatoria
})