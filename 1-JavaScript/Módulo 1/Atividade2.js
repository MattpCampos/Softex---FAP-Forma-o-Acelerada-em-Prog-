// Solicitando as notas ao usuário
let nota1 = parseFloat(prompt("Insira a primeira nota:"));
let nota2 = parseFloat(prompt("Insira a segunda nota:"));
let nota3 = parseFloat(prompt("Insira a terceira nota:"));

// Verificando se as entradas são válidas (números)
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("Por favor, insira valores numéricos válidos para as notas.");
} else {
    // Calculando a média
    let media = (nota1 + nota2 + nota3) / 3;

    // Exibindo o resultado no console
    console.log("A média das notas é: " + media.toFixed(2)); // Limitando a duas casas decimais
}

