const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

function desenhar() {
    const ctx = document.getElementById('meuCanvas').getContext('2d');
    const imagem = new Image();
    imagem.onload = () => {
        ctx.drawImage(imagem, 0, 0);
        ctx.beginPath();
        ctx.moveTo(30, 96);
        ctx.lineTo(70, 66);
        ctx.lineTo(103, 76);
        ctx.lineTo(170, 15);
        ctx.stroke();
    };
    imagem.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
}
document.onload = desenhar();