/* Definindo o nome do site */
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

/* localizando o paciente */
var pacientes = document.querySelectorAll('.paciente')

for(var posicao = 0; posicao < pacientes.length; posicao++){
    
    var paciente = pacientes[posicao]

    /* localizando o peso do paciente */
    var tdPeso = paciente.querySelector('.info-peso')
    var peso =tdPeso.textContent;

    
    /* localizando a Altura do paciente */
    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent;

    
    /* localizando Imc na tabela */
    var tdImc = paciente.querySelector(".info-imc")
    
    /* Validação de dados */
    var pesoEhValido = validaPeso(peso)
    var alturaEhValida = validaAltura(altura)
    
    if (!pesoEhValido){
        tdImc.textContent = 'Peso invalido'
        pesoEhValido = false
        paciente.classList.add('paciente-invalido')
    }

    if (!alturaEhValida){
        tdImc.textContent = 'Altura invalida'
        alturaEhValida = false 
        paciente.classList.add('paciente-invalido')
    }
    
    if (pesoEhValido && alturaEhValida){
        
        /* Calculando IMC */
        var imc = calculaImc(peso, altura)

        /* Adicionando Imc a tabela */
        tdImc.textContent = imc
        
    }
}
function validaPeso (peso)
{
    if( peso >= 0 && peso <= 250) 
    {
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0 ){
        return true
    }else{
        console.log(altura)

        return false
    }
}

function calculaImc(peso, altura){
    var imc = 0
    imc =  peso /( altura * altura)

    return imc.toFixed(2)
}




