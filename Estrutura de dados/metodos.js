let pessoa = {
  nome:'Beatriz',
  idade: 19,
  dizerOla(){ //é um método
    console.log('Olá, mundo. Meu nome é ' + this.nome) //this aponta para o proprio objeto
  }

}
console.log(pessoa)
typeof console.log //devolve function
/*
log é um método do objeto console
*/
pessoa.dizerOla()