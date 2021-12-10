function CadastroPessoaFisica(Nome, Endereço, CEP, Telefone){

    this.Nome = Nome;
    this.Endereço = Endereço;
    this.CEP = CEP;
    this.Telefone = Telefone;

}
dadosCadastrais = new CadastroPessoaFisica('Daniel Sonobe Silveira','Viveiros de Castro', 02044130, 999997777);

console.log(dadosCadastrais);   