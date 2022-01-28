console.group("Cuadrado");

function perimemetroCuadrado (lado){
    return lado*4;
}

function areaCuadrado (lado){
    return lado*lado;
}
console.groupEnd();



console.group("Triángulo");

function perimetroTriangulo (lado1, lado2, base){
    return lado1+lado2+base;
}
function areaTriangulo (base, altura){
    return (base*altura)/2;
}
console.groupEnd();

console.group("Círculo");

function diametroCirculo(radio){
    return radio*2;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*Math.PI;
}

function areaCirculo(radio){
    return Math.PI*(radio*radio);
}

console.groupEnd();
