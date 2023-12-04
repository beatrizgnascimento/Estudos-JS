let velocidade = 80

while(velocidade > 0){
  alert("O carro está a " + velocidade + "km/h")
  velocidade -=20
  alert('Diminuindo 20km/h')
}

  alert('O carro parou')


velocidade = 0

do{
  alert("O carro está a " + velocidade + "km/h")
  velocidade -=20
  alert('Diminuindo 20km/h')

}while(velocidade > 0)

alert('O carro parou')

let nome = "Beatriz"
for(let i=0; i<nome.length;i++){
  console.log(nome[i])
  break
  i++
}