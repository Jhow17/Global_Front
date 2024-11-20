const paises = ['Estados Unidos','França','China','Rússia','Coreia do Sul','Índia','Canadá']
const reatores = [93,56,55,37,25,19,19]

function transMaiusculos (paises){
    return paises.map(pais => pais.toUpperCase())
}


function criarCards(paisMaiusculo){
    const container = document.querySelector('#container')
    container.innerHTML = ''
    paisMaiusculo.forEach((nacao,index) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const titulo = document.createElement('h3')
        titulo.innerText = nacao
        card.appendChild(titulo)

        const info = document.createElement('p')
        info.innerText = `Numero de reatores: ${reatores[index]}`
        card.appendChild(info)
        
        container.appendChild(card)
    });
}

const paisMaiusculo = transMaiusculos(paises)
criarCards(paisMaiusculo)
