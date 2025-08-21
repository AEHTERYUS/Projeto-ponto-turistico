/*
  DOCUMENTAÇÃO DO SCRIPT:
  Este script controla a funcionalidade da galeria de imagens expansível (modal).
*/

// 1. Seleciona os elementos do HTML que vamos usar.
const modalContainer = document.getElementById('modal-container');
const modalImagem = document.getElementById('modal-imagem');
const botaoFechar = document.getElementById('modal-fechar');
const imagensDaGaleria = document.querySelectorAll('.galeria-imagem');

// 2. Adiciona um "ouvinte" de clique para cada imagem da galeria.
imagensDaGaleria.forEach(imagem => {
  imagem.addEventListener('click', () => {
    // Quando uma imagem é clicada:
    modalContainer.style.display = 'block'; // Mostra o container do modal.
    modalImagem.src = imagem.src; // Define a imagem do modal para ser a mesma que foi clicada.
    document.body.classList.add('modal-aberto'); // Trava o scroll da página.
  });
});

// 3. Função para fechar o modal.
function fecharModal() {
  modalContainer.style.display = 'none'; // Esconde o container do modal.
  document.body.classList.remove('modal-aberto'); // Libera o scroll da página.
}

// 4. Adiciona "ouvintes" de clique para fechar o modal.
botaoFechar.addEventListener('click', fecharModal); // Fecha ao clicar no 'X'.

modalContainer.addEventListener('click', (event) => {
  // Fecha ao clicar no fundo preto (fora da imagem).
  if (event.target === modalContainer) {
    fecharModal();
  }
});