let enviar = document.querySelector(".botao");
let numero = 1;
enviar.onclick = formulario;
enviar.focus ();

function formulario (){
  if ( enviar != numero)
  alert("você enviou o formulário!")
}