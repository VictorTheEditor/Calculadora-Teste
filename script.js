var array = ['',0,'']

var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var resul = 0
var res = document.getElementById('res')

//======================================
var adi = document.getElementById('adi')
var sub = document.getElementById('sub')
var div = document.getElementById('div')
var mult = document.getElementById('mult')

adi.onclick = function(){
    res.innerHTML = '+'
    array[1] = '+'
}

sub.onclick = function(){
    res.innerHTML = '-'
    array[1] = '-'
}

div.onclick = function(){
    res.innerHTML = '%'
    array[1] = '/'
}

mult.onclick = function(){
    res.innerHTML = 'x'
    array[1] = '*'
}


//===================================
function adicionar1(){
    var n1 = Number(num1.value)
    res.innerHTML = `${n1}`
    array[0] = n1
}

function adicionar2(){
    var n2 = Number(num2.value)
    res.innerHTML = `${n2}`
    array[2] = n2
}
//===================================


function resultado(){
    if(isNaN(array[0])){
        alert('ERRO Número não digitado ou Não "adicionado"!!')
    } else if (isNaN(array[2])){
        alert('ERRO Número não digitado ou Não "adicionado"!!')
    }
    
    if(array[1] == 0){
        alert('ERRO não selecionada OPERAÇÂO')
    }

    if(array[1] === '+'){
    resul = 0
    resul = array[0] + array[2]
    res.innerHTML = `<strong>${resul}</strong>`
    }

    else if(array[1] === '-'){
    resul = 0
    resul = array[0] - array[2]
    res.innerHTML = `<strong>${resul}</strong>`
    }

    else if(array[1] === '*'){
    resul = 0
    resul = array[0] * array[2]
    res.innerHTML = `<strong>${resul}</strong>`   
    }

    else if(array[1] === '/'){
    resul = 0
    resul = array[0] / array[2]
    res.innerHTML = `<strong>${resul}</strong>` 
    }
}


function limpar(){
    array = []
    num1.value = ''
    num2.value = ''
    array[1] = ''
    res.innerHTML = ''
}