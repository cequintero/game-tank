const mapa = document.querySelector('.mapa');
//medidas del mapa
const m = [1280, 720];
//medidas obstaculo
const bloquem = [20, 100];
class Bloque{
    constructor(ejeX, ejeY){
        this.bottomLeft = [ejeX, ejeY];
        this.bottomRigth = [ejeX + bloquem[0], ejeY];
        this.topLeft = [ejeX, ejeY + bloquem[1]];
        this.topRigth = [ejeX + bloquem[0], ejeY + bloquem[1]];
    }
}
//bloques en el mapa
const bloques = [
    new Bloque(200, 250),
    new Bloque(1100,250)
];
function addBloques(){
    for(let i = 0; i < bloques.length; i++){
        const bloque = document.createElement('div');
        bloque.classList.add('bloque');
        bloque.style.left = bloques[i].bottomLeft[0] + 'px';
        bloque.style.bottom = bloques[i].bottomLeft[1] + 'px';
        mapa.appendChild(bloque);
    }
}
addBloques();
function generarjugador1(){
    tank1.style.left = 0 + 'px';
    tank1.style.bottom = 600 + 'px';
}
function generarjugador2(){
    tank1.style.left = 1100 + 'px';
    tank1.style.bottom = 600 + 'px';
}
var tank_speed = 0;
var tank_x = 0;
var tank_y = 0;
var tank_angle = 0;
//jugador
const tank1 = document.createElement('div');
const tank2 = document.createElement('div');
tank1.classList.add('tank');
tank2.classList.add('tank');
mapa.appendChild(tank1);
mapa.appendChild(tank2);
generarjugador1();
generarjugador2();


window.onload = function(){

    };
    
