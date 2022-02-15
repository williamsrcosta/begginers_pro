const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const desenhar = () => {
    const ctx = document.getElementById('meuCanvas').getContext('2d');
    ctx.font = '48px sans-serif';
    ctx.fillText('Olá amigos', 10, 50);
}
document.onload = desenhar();