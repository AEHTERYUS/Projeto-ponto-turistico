
const modalContainer = document.getElementById('modal-container');
const modalImagem = document.getElementById('modal-imagem');
const botaoFechar = document.getElementById('modal-fechar');
const imagensDaGaleria = document.querySelectorAll('.galeria-imagem');


imagensDaGaleria.forEach(imagem => {
  imagem.addEventListener('click', () => {
  
    modalContainer.style.display = 'block'; 
    modalImagem.src = imagem.src; 
    document.body.classList.add('modal-aberto'); 
  });
});


function fecharModal() {
  modalContainer.style.display = 'none'; 
  document.body.classList.remove('modal-aberto'); 
}


botaoFechar.addEventListener('click', fecharModal); 

modalContainer.addEventListener('click', (event) => {

  if (event.target === modalContainer) {
    fecharModal();
  }
});