$(function(){
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');

  // Rectangle plein
  context.fillStyle = '#7a6155';
  context.fillRect(/* offset().left */ 20,/* offset().top */ 20,/* width */ 80,/* height */ 40);

  // Rectangle bordures
  context.strokeStyle = '#7a6155';
  context.strokeRect(120, 46, 80, 40);

  // Rectangle vide pour effacer
  context.clearRect(80, 45, 80, 20);

  // Dessiner une ligne
  context.beginPath();
  context.moveTo(/* x */ 50,/* y */ 25);
  context.lineTo(250, 50);
  // Deuxième ligne
  context.moveTo(250, 125);
  context.lineTo(75, 10);
  context.strokeStyle= '#bf6b44';
  context.lineWidth= 2;
  context.stroke();

  // Cercle bordure
  context.beginPath();
  context.lineWidth = '3';
  context.strokeStyle = '#c6a08f';
  context.arc(/* offset().left */ 50,/* offset().top */ 120,/* Rayon */ 40,/* Rotation initiale */ Math.PI,/* Rotation finale */ 2.1*Math.PI);
  context.closePath();
  context.stroke();

  // Courbe
  context.beginPath();
  context.lineWidth = '2';
  context.strokeStyle = '#463730';
  context.moveTo(200, 125);
  context.arcTo(/* .left point1 */ 150,/* .top point1 */ 100,/* .left point2 */ 150,/* .top point2 */ 50,/* Rayon */ 50);
  context.stroke();

  // Second canvas
  var canvas2 = document.getElementById('canvas2');
  var context2 = canvas2.getContext('2d');

  // Création d'un gradient
  var lineaire = context2.createLinearGradient(25, 25, 100, 25)/* offset().left et .top des couleurs ( début, fin ) */;
  lineaire.addColorStop(/* position dans le gradient */ 0, '#4C8'); //Vert
  lineaire.addColorStop(0.5, '#48C'); //Bleu
  lineaire.addColorStop(1, '#A4A'); //Violet
  // Rectangle plein gradient
  context2.fillStyle = lineaire;
  context2.fillRect(15, 7, 75, 50);

  // Création du gradient radial
  var radial = context2.createRadialGradient(150 ,45, 8, 150, 45, 30)/* (.left et .top du cercle central, Rayon du cercle central, .left et .top du cercle totam, Rayon du cercle total ) */;
  radial.addColorStop(0,'#DD4'); //Jaune
  radial.addColorStop(1, '#D44'); //Rouge
  // Cercle plein
  context2.beginPath();
  context2.fillStyle = radial;
  context2.arc(150, 45, 30, 0, 2*Math.PI);
  context2.fill();

  // Association d'une image à un pattern
  imgPattern = new Image();
  imgPattern.src = 'https://www.pierre-giraud.com/wp-content/uploads/2019/06/emoji-smile.png';
  imgPattern.onload = function() {
    let pattern = context2.createPattern(imgPattern, 'repeat');
    // Création du rectangle avec le pattern
    context2.fillStyle = pattern;
    context2.fillRect(250, 0, 50, 150);
  };

  // Transparence ( directement de le rgba )
  context2.fillStyle = 'rgba(255, 0, 0, 0.2)';
  context2.fillRect(30, 45, 50, 50);
  // Transparence totale des objets du canvas
  /* context2.globalAlpha = 0.5; */

  // Ombres de tous les objets du canvas
  /* context2.shadowColor = 'black';
  context2.shadowOffsetX = 5;
  context2.shadowOffsetY = 15;
  context2.shadowBlur = 10; */

  // Texte plein
  context2.font = 'bold 20px Verdana, Arial, serif';
  context2.fillStyle = '#48B';
  context2.textAlign = 'center';
  context2.fillText('Texte plein', 150, 100);

  // Texte bordures
  context2.strokeStyle = '#48B';
  context2.strokeText('Texte creux', 150, 120)
});
