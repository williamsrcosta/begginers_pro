const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const desenhar = () => {
    const canvas = document.getElementById('meuCanvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2); // Círculo exterior
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI); // Boca (sentido horário)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2); // Olho esquerdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2); // Olho direito
    ctx.stroke();
}
document.onload = desenhar();