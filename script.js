
async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        consultaCEPConversor= await consultaCEP.json();
        if(consultaCEPConversor.erro){
            throw Error ('Cep nao existente');
        }

        var cidade= document.getElementById('cidade')
        var logradouro= document.getElementById('endereco')
        var estado= document.getElementById('estado')
        var numero= document.getElementById('numero')
        var bairro= document.getElementById('bairro')
        var complemento = document.getElementById('complemento')
        cidade.value = consultaCEPConversor.localidade
        logradouro.value = consultaCEPConversor.logradouro
        estado.value = consultaCEPConversor.uf
        bairro.value = consultaCEPConversor.bairro
        numero.value = consultaCEPConversor.siafi
        complemento.value = consultaCEPConversor.complemento
        console.log(consultaCEPConversor);
        return consultaCEPConversor
    } catch(erro) {
        mensagemErro.innerHTML = `<p>CEP invalido. Tente novamente!</p>`
        console.log(erro);
}     
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


