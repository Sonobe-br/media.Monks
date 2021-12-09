let datasNascimento = [
    
    new Date(1978,05,27), 
    new Date(2008,05,06), 
    new Date(2011,03,17),
    new Date(1998,10,08)  

];

datasNascimento.sort(function (dataA, dataB) {

    return dataA.getTime() - dataB.getTime();

});
  
console.log(datasNascimento);






/* let Group1 = function (nome, sobrenome) {
this.nome = nome;
this.sobrenome = sobrenome;
}
  
let Group2 = function (nome, email) {
this.nome = nome;
this.email = email;
}
  
let pessoas1 = [
new Group1("Daniel", "Sonobe"),
new Group1("Pedro", "Fratelli"),
new Group1("João", "Paulo"),
new Group1("Augusto", "Sonobe")
];
  
let pessoas2 = pessoas1.map(function (pessoa1) {
let nome = pessoa1.nome + " " + pessoa1.sobrenome;
let email = nome.toLowerCase().replace(" ", ".") + "@stack.com";
return new Group2(nome, email);
});
  
console.log(pessoas2); */