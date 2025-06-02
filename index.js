
const botaoMudarTexto = document.getElementById('btnMudarTexto');
const paragrafo = document.getElementById('paragrafo')

botaoMudarTexto.addEventListener('click', () => {
    paragrafo.innerText = "Esta é minha primeira página usando HTML e JavaScript!"

});
const botaoMudarCor = document.getElementById('btnMudarCor');

botaoMudarCor.addEventListener('click', () => {
  document.body.style.backgroundColor = '#e1bee7';
});



