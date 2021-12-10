class Paralalelepipedo {
    constructor(largura, altura, comprimento) {
        this.largura = largura;
        this.altura = altura;
        this.comprimento = comprimento;
    }
    get area() {
        return this.calculateArea();
    }
    calculateArea() {
        return this.altura * this.largura * this.comprimento;
    }
}
const block = new Paralalelepipedo(10, 20, 30);
console.log(block.area);