var numeroSecreto = Math.ceil(Math.random() * 1000);
i = 0;
console.log(i);

function adicionarChute(){
if (i < 10){
  var chute = document.getElementById('chute').value;
  i++;
   
  
  if(chute != numeroSecreto) {
    alert('Essa é a sua tentativa número ' + i + '.');
    if (chute > numeroSecreto) {
        alert('Você errou... o número secreto é menor do que ' + chute);
    }else if (chute < numeroSecreto) {
        alert('Você errou... o número secreto é maior do que ' + chute);
    }
  }else if (chute == numeroSecreto) {
      alert('Acertou! Parabéns!');
      alert('Duvido você a acertar de novo...');
      location.reload();
    }
  
  document.getElementById('chute').value = '';

}else{
    alert('Acabaram suas chances... inicie o jogo novamente!');
    process.exit();
  }   
  }

function reiniciarJogo(){
    location.reload();
    alert('Jogo reiniciado')
   }