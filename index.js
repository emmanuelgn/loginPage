const meuBotao = document.getElementById('meuBotao');

// muda a cor do botão quando o usuário clica nele
meuBotao.addEventListener('mousedown', function() {
  this.style.backgroundColor = 'red';
});

// retorna a cor original do botão quando o clique é liberado
meuBotao.addEventListener('mouseup', function() {
  this.style.backgroundColor = '';
});
