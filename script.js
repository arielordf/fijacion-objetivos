function generarObjetivo() {

  var uno = ["Investigar", "Aprender", "Mejorar", "Presentar", "Crear", "Depurar", "Arreglar"];
  var dos = [" mi ingles", " el cluster de desarrollo"," Mi tesis", " Guarani"," ishus del sonar", " Proyectos paralelos", " Curso en Millicom University", " Angular", " Kubernetes", " Tests Unitarios"];
  var tres = [" a la mañana","en el almuerzo","durante mis vacaciones", " en mi flex", " a la siesta", " despues de la ofi", " entre pacientes", " de madrugada", " en el after"];

  var unoLength = parseInt(uno.length);
  var dosLength = parseInt(dos.length);
  var tresLength = parseInt(tres.length);

  var rndUno = Math.floor(Math.random()* unoLength );
  var rndDos = Math.floor(Math.random()* dosLength );
  var rndTres = Math.floor(Math.random()* tresLength );
  document.getElementById('display').innerText = uno[rndUno] + dos[rndDos] + tres[rndTres];
}
