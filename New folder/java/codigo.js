const mapa = document.querySelector('.mapa');
//tiempo
let temporizador;
//medidas del mapa
const m = [1280, 720];
//medidas obstaculo
const bloquem = [20, 100];
class Bloquev{
    constructor(ejeX, ejeY){
        this.bottomLeft = [ejeX, ejeY];
        this.bottomRigth = [ejeX + bloquem[0], ejeY];
        this.topLeft = [ejeX, ejeY + bloquem[1]];
        this.topRigth = [ejeX + bloquem[0], ejeY + bloquem[1]];
    }
}
class Bloqueh{
    constructor(ejeX, ejeY){
        this.bottomLeft = [ejeX, ejeY];
        this.bottomRigth = [ejeX + bloquem[1], ejeY];
        this.topLeft = [ejeX, ejeY + bloquem[0]];
        this.topRigth = [ejeX + bloquem[1], ejeY + bloquem[0]];
    }
}
//bloques en el mapa
const bloquesv = [
    new Bloquev(200, 0),
    new Bloquev(1030,0),
    new Bloquev(200, 620),
    new Bloquev(1030, 620),
    new Bloquev(640, 320)
];
const bloquesh = [
    new Bloqueh(0 , 360),
    new Bloqueh(100, 360),
    new Bloqueh(1180, 360),
    new Bloqueh(1080, 360)
];
function addBloquesv(){
    for(let i = 0; i < bloquesv.length; i++){
        const bloque = document.createElement('div');
        bloque.classList.add('bloquev');
        bloque.style.left = bloquesv[i].bottomLeft[0] + 'px';
        bloque.style.bottom = bloquesv[i].bottomLeft[1] + 'px';
        mapa.appendChild(bloque);
    }
}
function addBloquesh(){
    for(let i = 0; i < bloquesh.length; i++){
        const bloque = document.createElement('div');
        bloque.classList.add('bloqueh');
        bloque.style.left = bloquesh[i].bottomLeft[0] + 'px';
        bloque.style.bottom = bloquesh[i].bottomLeft[1] + 'px';
        mapa.appendChild(bloque);
    }
}
addBloquesv(); addBloquesh();
//declarar
var posicion1 = [50, 640, 148.5, 698]; // 98.5, 58
function generarjugador1(){
    tank1.style.left = posicion1[0] + 'px';
    tank1.style.top = posicion1[1] + 'px';
    tank1.style.right = posicion1[2] + 'px';
    tank1.style.bottom = posicion1[3] + 'px';
}
function generarjugador2(){
    tank2.style.left = 1100 + 'px';
    tank2.style.top = 20 + 'px';
    tank2.style.rotate = 180 + 'deg';   
}
//renderizar jugador
const tank1 = document.createElement('div');
const tank2 = document.createElement('div');
tank1.classList.add('tank');
tank2.classList.add('tank');
mapa.appendChild(tank1);
mapa.appendChild(tank2);
generarjugador1();
generarjugador2();
//movimiento
var tank1_speed = 0; var tank2_speed = 0;  var tank1_angle = 0;
function mover1(){
    var tank1_x = posicion1[0]; var tank1_y = posicion1[1];
    if (posicion1[0] >= 0 && posicion1[2] <= 1280 && posicion1[1] >= 20 && posicion1[3] <= 702){
        tank1_x += Math.cos( Math.PI * tank1_angle / 180 ) * tank1_speed;
        tank1_y += Math.sin( Math.PI * tank1_angle / 180 ) * tank1_speed;
        posicion1[0] = tank1_x; posicion1[1] = tank1_y; posicion1[2] = tank1_x + 98.5; posicion1[3] = tank1_y + 58;
        tank1.style.left = tank1_x + 'px';
        tank1.style.top = tank1_y + 'px';
        tank1.style.right = posicion1[2] + 'px';
        tank1.style.bottom = posicion1[3] + 'px';
        tank1.style.rotate = tank1_angle + 'deg';
        console.log(tank1.style.top + ', '+ tank1.style.left + ', ' + tank1.style.bottom + ', ' + tank1.style.right);
    } if(posicion1[0]< 0){
        tank1_x += 0.2;
        posicion1[0] = tank1_x;
    } if (posicion1[1]< 20){
        tank1_y += 0.2;
        posicion1[1] = tank1_y;
    } if (posicion1[2] > 1280){
        tank1_x -= 0.2;
        posicion1[2] = tank1_x;
    } if (posicion1[3] > 702){
        tank1_y -= 0.2;
        posicion1[3] = tank1_y;
    }
    }
const keys = {
    w: {
        press: false
    },
    s: {
        press: false
    },
    a: {
        press: false
    },
    d: {
        press: false
    },
    Space: {
        press: false
    }
}
function animar(){
    window.requestAnimationFrame(animar);
    if(keys.w.press && keys.d.press){
        if(tank1_speed<3){
            tank1_speed += 1;
        }
        tank1_angle += 2;
        mover1();
    }else if(keys.w.press && keys.a.press){
        if(tank1_speed<3){
            tank1_speed += 1;
        }
        tank1_angle -= 2;
        mover1();
    }else if(keys.w.press){
        if(tank1_speed<3){
            tank1_speed += 1;
        }
        mover1();
    }else if (keys.s.press && keys.d.press){
        if(tank1_speed>-3){
            tank1_speed -= 1;
        }
        tank1_angle += 2;
        mover1();
    } else if(keys.s.press && keys.a.press){
        if(tank1_speed>-3){
            tank1_speed -= 1;
        }
        tank1_angle -= 2;
        mover1();
    }else if(keys.s.press){
        if(tank1_speed>-3){
            tank1_speed -= 1;
        }
        mover1();
    }else if (keys.a.press){
        tank1_speed = 0;
        tank1_angle -= 2;
        mover1();
    }else if (keys.d.press){
        tank1_speed = 0;
        tank1_angle += 2;
        mover1();
    }
    if (keys.Space.press){
        diparar();
    }
}
temporizador =setInterval(animar(), 20);
window.addEventListener('keydown', (event) =>{
    switch (event.key){
        case 'Space':
            keys.Space.press = true;
            break;
        case 'w':
            keys.w.press = true;
            break;
        case 's':
            keys.s.press = true;
            break;
        case 'a':
            keys.a.press = true;
            break;
        case 'd':
            keys.d.press = true;
            break;
    }
})
window.addEventListener('keyup', (event) =>{
    switch (event.key){
        case 'Space':
            keys.Space.press = false;
            break;
        case 'w':
            tank1_speed = 0;
            keys.w.press = false;
            break;
        case 's':
            tank1_speed = 0;
            keys.s.press = false;
            break;
        case 'a':
            keys.a.press = false;
            break;
        case 'd':
            keys.d.press = false;
            break;
    }
})
//generar disparo
const bullet = document.createElement('div');
bullet.classList.add('bala');
function generarbala(){
    mapa.appendChild(bullet);
    bullet.style.left = tank1.style.left + 'px';
    bullet.style.top = tank1.style.top + 'px';
}
//disparar
function diparar(){
    var bullet_angle = tank1_angle;
    var bullet_speed = 8;

}