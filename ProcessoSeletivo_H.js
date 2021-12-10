function Cadastro(nome, endereço, CEP, telefone){

    this.nome = nome;
    this.endereço = endereço;
    this.CEP = CEP;
    this.telefone = telefone;

}
registro = new Cadastro('Daniel Sonobe Silveira','R. Major Dantas Cortez','00000-000','(11) 94969-7778');
console.log(registro); 

function Financeiro(banco, agencia, conta, tipo, cidade){
    
    this.banco = banco;
    this.agencia = agencia;
    this.conta = conta;
    this.tipo = tipo;
    this.cidade = cidade;

}
funcionarioTI = new Financeiro('Santander', '234', '067222-3', 'Pessoa Física', 'São Paulo/SP');
console.log(funcionarioTI); 
