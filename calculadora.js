class CalculadoraDeDesconto {
  calcular(valor, isVIP = false) {
    if (valor < 0) {
      throw new Error("Valor não pode ser negativo");
    }

    let desconto = 0;

    if (valor >= 100 && valor <= 500) {
      desconto = 0.10;
    } else if (valor > 500) {
      desconto = 0.20;
    }

    if (isVIP) {
      desconto += 0.05;
    }

    const valorFinal = valor - (valor * desconto);
    return valorFinal;
  }
}

module.exports = CalculadoraDeDesconto;