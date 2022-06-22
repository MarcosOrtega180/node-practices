
fecha = "27102020";

convertirFecha = function (fecha){
  // return fecha.slice(0,2)+"-"+fecha.slice(2,4)+"-"+fecha.slice(4);
  return new Date(fecha.slice(4)+"-"+fecha.slice(2,4)+"-"+(fecha.slice(0,2))+" 00:00:00");
}


console.log(convertirFecha(fecha));
