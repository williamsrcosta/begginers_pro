var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'darkgreen';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(300, 20);
pincel.lineTo(20, 200);
pincel.lineTo(300, 380);
pincel.lineTo(580, 200)
pincel.fill();

pincel.fillStyle = 'blue';
pincel.beginPath();
pincel.arc(300, 200, 140, 0, 2 * 3.14);

pincel.fill();