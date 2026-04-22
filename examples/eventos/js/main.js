const inputNome = document.querySelector('input[name=nome]');
inputNome.addEventListener('input', function(event) {
    updateSpan(event.target);    
});

const inputEmail = document.querySelector('input[name=email]');
inputEmail.addEventListener('input', function(event) {
    updateSpan(event.target);
    // const email = document.querySelector('input[name=email]').value;
    //document.querySelector('#email').innerHTML = email;

    // const value = event.target.value;
    // document.querySelector(`#{event.target.name}`) = value;

    // console.log(event);
})
/*
inputNome.addEventListener('input', function() {
    console.log('tratando evento input...');
    updateNomeContent();
});
*/

// function updateSpan(event) {
function updateSpan({ name, value}) {
    // const name = event.target.name;
    // const value = event.target.value;
    document.querySelector(`#${name}`).innerHTML = value;
}

function updateNomeContent(){
    const nome = document.querySelector('input[name=nome]').value;
    document.querySelector('#nome').innerHTML = nome;
}
/*
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    window.alert('Botão clicado!');
});

btn.addEventListener('click', function(){
    imprimir();
});
*/

/*
btn.onclick = function() {
    imprimir();
}

btn.click();
*/
function imprimir() {
    window.print();
}

window.imprimir = imprimir;
