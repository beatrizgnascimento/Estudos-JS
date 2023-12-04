const resultado = prompt("Escolha uma alternativa:\na)\nb)\nc)\n")
const resultadoNumerico = parseFloat(resultado)
//parseFloat -> transforma string em num

switch(resultado){
  case 1:
    alert("O resultado é a")
    break
  case 2:
    alert("O resultado é b")
    break
  case 3:
    alert("O resultado é a")
    break
  default:
    alert("Finalizando...")
}