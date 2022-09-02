const mapa = document.querySelector('.mapa');
//medidas del mapa
const altomapa = 720;
const anchomapa = 1280;
//medidas obstaculo
const altobloque = 20;
const anchobloque = 100;
//posicion
var tank_speed = 0;
var tank_x = 0;
var tank_y = 0;
var tank_angle = 0;
//jugador
const tank = document.createElement('div');

function renderizarjugador(){
    tank.className= 'tank';
}

window.onload = function(){
        document.onkeypress = mostrarInformacionCaracter;
    };
    
    function mostrarInformacionCaracter(evObject) {
        var msg = ''; var elCaracter = String.fromCharCode(evObject.which);
        eventoControlado=true;
        if(elCaracter==='w' && tank_speed<5) {
            tank_speed += 1;
        } else if(elCaracter==='s' && tank_speed>-5) {
            tank_speed -= 1;
        }
        if(elCaracter==='a') {
            tank1_speed = 0;
            tank_angle -= 2;
        } else if(elCaracter==='d') {
            tank_speed = 0;
            tank_angle += 2;
        } else if (elCaracter=== 'aw'){
            tank_speed += 1;
            tank_angle -=2;
        }
        console.log(document.getElementById('tank').style.left);
        tank_x += Math.cos( Math.PI * tank_angle / 180 ) * tank_speed;
        tank_y += Math.sin( Math.PI * tank_angle / 180 ) * tank_speed;

        // tank1 = document.getElementById('tank1');
        document.getElementById('tank').style.left = tank_x + 'px';
        document.getElementById('tank').style.top = tank_y + 'px';
        document.getElementById('tank').style.webkitTransform = 'rotate('+tank_angle+'deg)';
    }
