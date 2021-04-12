function generarObjetivo() {

  var uno = ["Investigar", "Aprender", "Mejorar"];
  var dos = [" mi ingles", " el cluster de desarrollo", " Curso en Millicom University"];
  var dos = [" mi ingles", " el cluster de desarrollo", " Curso en Millicom University"];
  var tres = [" a la mañana", " a la siesta", " despues de la ofi"];

  var unoLength = parseInt(uno.length);
  var dosLength = parseInt(dos.length);
  var tresLength = parseInt(tres.length);
  var rndUno = Math.floor(Math.random()* unoLength );
  var rndDos = Math.floor(Math.random()* dosLength );
  var rndTres = Math.floor(Math.random()* tresLength );
  
  document.getElementById('display').innerText = uno[rndUno] + dos[rndDos] + tres[rndTres];
}