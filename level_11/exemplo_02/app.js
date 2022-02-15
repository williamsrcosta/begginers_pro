const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const desenhar = () => {
    const canvas = document.getElementById("meuCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)"; // cor
        ctx.fillRect(10, 10, 55, 50); // posicionamento e tamanho
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)"; // cor
        ctx.fillRect(30, 30, 55, 50); // posicionamento e tamanho
    } else {
        document.getElementById("erro").innerHTML = `
    <p>Seu navegador não suporta o canvas</p>
    `;
    };
};

document.onload = desenhar();