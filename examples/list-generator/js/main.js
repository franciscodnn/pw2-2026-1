
function generate() {
    // pegar o valor do input
    const input = document.querySelector('input[name="total"]');
    let valorInput = input.value;

    valorInput = (isNaN(valorInput)) ? 0 : Number(valorInput);

    // gerar a lista conform o valor do input
    const list = generateList(valorInput);

    // renderizar na tela a lista criada
    document.querySelector('.generated-items > ul').innerHTML = list;

}

function generateList(value) {
    let result = "";
    
    for(let i = 0; i < value; i++) {
        result += `<li>Item ${i + 1}</li>`;
    }

    return result;
}