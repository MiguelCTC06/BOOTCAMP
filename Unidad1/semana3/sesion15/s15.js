var clima = "nublado"; //modificar los valores con las estudiantes
clima = "soleado";
clima="";
switch (clima) {
    case 'lluvioso':
      console.log('Recuerda llevar un paraguas.');
      break;
    case 'soleado':
      console.log('Viste ligero.');
    case 'nublado':
      console.log('Sal a la calle.');
      break;
    default:
      console.log('Tipo de Clima desconocido.');
      break;
  }

  var num = 30;
  num = 20;
  switch(num){
    case 20:
      console.log("Menor");
      break;
      case 30:
        console.log("Igual");
        break;
        case 50:
          console.log("Mayor");
          break;
          default:
            console.log("no hay valores");
            break;
  }
  
var variable = "variable2";


switch(variable){
  case "variable1" :
    console.log("Esta es la variable 1");
    break;
    case "variable2" : 
    console.log("Esta es la varibale 2");
    variable = "variable3";
    console.log(variable);
    break;
    case "variable3" :
      console.log("Esta es la variable 3");
      break;
      default:
        console.log("No se sabe que variable es");
        break;

}

var puntaje=3;
if(0<puntaje&&puntaje<=1){
  console.log("uwu");
}else{console.log("xd");}
 
