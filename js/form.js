var botao = document.querySelector("#adicionar-paciente")
botao.addEventListener('click', function(event)
{
    event.preventDefault()
    var form = document.querySelector("#form-adciona")
    
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    
    //criando paciente
    adicionaPacienteNaTabela(paciente)
    
    //validando paciente
    var erros = validaPaciente(paciente)
    console.log(erros)

    if (erros.length > 0){
        exibeMensagensDeErro(erros)
        return
    }
    
    //limpando o form
    form.reset()
    let mensagemErro = document.querySelector('#mensagens-erro')
    mensagemErro.innerHTML = " "
    
})

function obtemPacienteDoFormulario(form) 
{
    
    var paciente =
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function adicionaPacienteNaTabela(paciente){

    var pacienteTr = montaTr(paciente)   
    var tabela = document.querySelector("#tabela-pacientes")
    //adicionando paciente na tabela
    tabela.appendChild(pacienteTr)
}

function montaTr (paciente)
{
    var pacienteTr = document.createElement('tr')
    //adicionando classe a TR
    pacienteTr.classList.add('paciente')
    
    //Criando a TD com as informações do paciente e adcionando classe
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild( montaTd(paciente.imc, 'info-imc'))
    
    return pacienteTr
}

function montaTd(dado, classe)
{
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    
    return td
}

function validaPaciente(paciente){

    let erros = []

    if(paciente.nome.length == 0) erros.push('O nome não pode estar em branco')
    
    if(paciente.peso.length == 0) erros.push('O peso não pode estar em branco')

    if(paciente.altura.length == 0) erros.push('A altura não pode estar em branco')    

    if(paciente.gordura.length == 0) erros.push('A gordura não pode estar em branco')

    if (!validaPeso(paciente.peso)) erros.push('O peso é invalido')

    if (!validaAltura(paciente.altura)) erros.push('A altura é invalida')

    
   
    return erros
}

function exibeMensagensDeErro(erros){

    let ul = document.querySelector('#mensagens-erro')

    ul.innerHTML = ''

    erros.forEach(function (erro){
        let li = document.createElement('li')
        li.textContent = erro;
        ul.appendChild(li)
    });

}