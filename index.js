const meuBotao = document.getElementById('meuBotao');

// muda a cor do botão quando o usuário clica nele
meuBotao.addEventListener('mousedown', function() {
  this.style.backgroundColor = 'red';
});

// retorna a cor original do botão quando o clique é liberado
meuBotao.addEventListener('mouseup', function() {
  this.style.backgroundColor = '';
});

const voltar = document.getElementById('voltar');
voltar.addEventListener('click', function(event) {
  event.preventDefault(); // impede que a página seja recarregada
  // Adicione aqui o código para a transição que você deseja
  window.location.href = voltar.href; // redireciona para a URL definida no href do link
});
