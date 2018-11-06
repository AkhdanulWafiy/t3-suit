function cekcomputer(){
    var computer = ['gunting','kertas','batu']
    var index = Math.floor(Math.random() * computer.length)
    var hasil = computer[index]
    document.getElementById('enemy').setAttribute("src","img/"+hasil+".png");
    document.getElementById('hasil1').setAttribute("src","img/"+hasil+".png");
    return hasil
}
 function logika(com,you){
    if (com == you){
        document.getElementById('audio').setAttribute("src","audio/Seri.m4a");
        return 'Seri'
    }else if (com == 'gunting' && you == 'batu'){
        document.getElementById('audio').setAttribute("src","audio/Kalah.m4a");
        return 'Menang'
    }else if (com == 'gunting' && you == 'kertas'){
        document.getElementById('audio').setAttribute("src","audio/Menang.m4a");
        return 'Kalah'
    }else if (com == 'kertas' && you == 'gunting'){
        document.getElementById('audio').setAttribute("src","audio/Menang.m4a");
        return 'kalah'
    }else if (com == 'kertas' && you == 'batu'){
        document.getElementById('audio').setAttribute("src","audio/Kalah.m4a");
        return 'menang'
    }else if (com == 'batu' && you == 'kertas'){
        document.getElementById('audio').setAttribute("src","audio/Kalah.m4a");
        return 'kalah'
    }else if (com == 'batu' && you == 'gunting'){
        document.getElementById('audio').setAttribute("src","audio/Menang.m4a");
        return 'menang'
    }
}
function gunting (){
var com = cekcomputer()
var you = 'gunting'
console.log(logika(com , you))
document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
document.getElementById('status').textContent = logika(com,you)
}
function kertas(){
var com = cekcomputer()
var you = 'kertas'
console.log(logika(com , you))
document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
document.getElementById('enemy').textContent = logika(com,you)
}
function batu(){
var com = cekcomputer()
var you = 'batu'
console.log(logika(com , you))
document.getElementById('hasil2').setAttribute("src","img/"+you+".png");
document.getElementById('enemy').textContent = logika(com,you)
}
function play(){
    document.getElementById('au').setAttribute("src","audio/1.mp3")
}