const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const desenhar = () => {
    const ctx = document.getElementById('meuCanvas').getContext('2d');
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
                Math.floor(255 - 42.5 * j) + ')';
            ctx.beginPath();
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
            ctx.stroke();
        }
    }
}
document.onload = desenhar();