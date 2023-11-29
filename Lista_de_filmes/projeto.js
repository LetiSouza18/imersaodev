var listaFilmes = []
var listaTrailer = []

function adicionarFilme(){
  // guarda os valores de entrada dos usuários em variáveis
  var filmeFavorito = document.getElementById('filme').value
  var trailerFilme = document.getElementById('trailer').value

  
  // só aceita imagens no formato JPEG ou JPG
  if((filmeFavorito.endsWith('jpeg')) || (filmeFavorito.endsWith('jpg'))){
      var elementoListaFilmes = document.getElementById('listaFilmes')
      listaFilmes.push(filmeFavorito) // adiciona o filme à lista de filmes
      listaTrailer.push(trailerFilme) // adiciona o trailer à lista de trailers
      
      for(i=0; i<listaFilmes.length; i++){
        elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<a href =' + listaTrailer[i] + '><img src=' + listaFilmes[i] + '></a>' // adiciona os filmes com seus links na tela até a lista de filmes chegar ao fim
        
        // limpa o que o usuário tinha adicionado
        document.getElementById('filme').value = ''
        document.getElementById('trailer').value = ''
      }
  }
  else{
    alert("Não foi possível adicionar, pois o link não contém uma imagem em JPG/JPEG");
  }
}
