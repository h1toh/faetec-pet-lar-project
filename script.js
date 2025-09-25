const cidadesDoRioDeJaneiro = ["Angra dos Reis", "Aperibé", "Araruama", "Areal", "Aramação de Búzios", "Arraial do Cabo", "Barra do Piraí", " Barra Mansa", "Belford Roxo", "Bom Jardim", "Bom Jesus do Itapaboana", "Cachoeiras de Macacu", "Cambuci", "Campos dos Goytacazes", "Cantagalo", "Carapebus", "Cardoso Moreira", "Carmo", "Casimiro de Abreu", "Comendador Levy Gasparian", "Cordeiro", "Duas Barras", "Duque de Caxias", "Engenheiro Paulo de Frontin", "Guapimirim", "Iguaba Grande", "Italva", "Itaocara", "Itaperuna", "Itatiaia", "Japeri", "Laje de Muriaé", 'Macaé', "Macuco", "Magé", "Mangaratiba", "Maricá", "Mendes", "Mesquita", " Miguel Pereira", "Miracema", "Natividade", "Nilópolis", "Niterói", "Nova Friburgo", "Nova Iguaçu", "Paracambi", "Paraíba do Sul", "Paraty", "Paty dos Alfares", "Pinheiral", "Piraí", "Porciúncula", "Porto Real", "Quatis", "Queimados", " Quissamã", "Resende", "Rio Bonito", "Rio Claro", "Rio das Flores", "Rio das Ostras", "Rio de Janeiro", "Santa Maria Madalena", "Santo Ântonio de Pádua", "São Fidélis", "São Francisco de Itabapoana", "São Gonçalo", "São João da Barra", "São João de Meriti", "São Joao de Ubá", "São José do Vale do Rio Preto", "São Pedro da Aldeia", "São Sebastião do Alto", "Sapucaia", "Seropédica", "Silva Jardim", "Sumidouro", "Tanguá", "Teresópolis", "Trajano de Moraes", "Três Rios", "Valença", "Varre-Sal", "Vassouras", "Volta Redonda"]

const especiesParaDoacao = ["Cachorro", "Gato", "Tartaruga", "Peixe", "Hamster", "Coelho"]

const temperamentosDoAnimal = ["Tranquilo", "Sociavel", "Medroso", "Brincalhão", "Ativo", "Agressivo", "Feroz", "Dócil"]

const selectCidades = document.getElementById('cidades')
const selectEspecie = document.getElementById('especies')
const selectTemperamento = document.getElementById('temperamento')
const uploadDiv = document.getElementById('picture-background')
const fileInput = document.getElementById('fileInput')
const preview = document.getElementById('preview')
const camera = document.getElementById('camera')
const textoImg = document.getElementById('textoImg')
const outroTemperamento = document.getElementById('outroTemperamento')

const bar = document.querySelector('.bar')
const main = document.querySelector('main')
const btnBar = document.getElementById('btnBar')

let barAtivada = false

btnBar.addEventListener('click', () => {
    if (!barAtivada) {
        barAtivada = true
        bar.style.display = 'flex'
    } else if (barAtivada) {
        barAtivada = false
        bar.style.display = 'none'
    }
})

main.addEventListener('click', () => {
    barAtivada = false
    bar.style.display = 'none'
})

uploadDiv.addEventListener("click", () => {
    fileInput.click()
})

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const img = document.createElement('img')
            img.src = e.target.result
            preview.innerHTML = ""
            camera.style.display = 'none'
            textoImg.style.display = 'none'
            preview.appendChild(img)
        }
        reader.readAsDataURL(file)
    }
})


cidadesDoRioDeJaneiro.forEach(cidade => {
    const optionCidades = document.createElement('option')
    optionCidades.value = cidade
    optionCidades.textContent = cidade
    selectCidades.appendChild(optionCidades)
})

especiesParaDoacao.forEach(especie => {
    const optionEspecies = document.createElement('option')
    optionEspecies.value = especie
    optionEspecies.textContent = especie
    selectEspecie.appendChild(optionEspecies)
})

temperamentosDoAnimal.forEach(temperamento => {
    const optionTemperamento = document.createElement('option')
    optionTemperamento.value = temperamento
    optionTemperamento.textContent = temperamento
    selectTemperamento.appendChild(optionTemperamento)
})

function emBreve(){
    alert('Esta funcionalidade estará disponível em breve!')
}