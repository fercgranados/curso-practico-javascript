//Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
  console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

  const perimemetroCuadrado = ladoCuadrado * 4;
    console.log("El perimetro del cuadrado es: " + perimemetroCuadrado + " cm");

const areaCuaadrado = ladoCuadrado * ladoCuadrado;
    console.log("El area del cuadrado es: " + areaCuaadrado + " cm^2");

console.groupEnd();

    //Código del triángulo
console.group("Triángulo");
    const ladoTriangulo1=6;
    const ladoTriangulo2=6;
    const baseTriangulo=4;

    console.log(
        "los lados del triángulo miden: "
         + ladoTriangulo1 
         + "cm, " 
         + ladoTriangulo2 
         + "cm, " 
         + baseTriangulo 
         + "cm, "
         );
    const alturaTriangulo=5.5; 
    console.log("la altura del triángulo es: " + alturaTriangulo + "cm");    
    
    const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
    console.log("el perimetro del triángulo es: " + perimetroTriangulo + "cm");

    const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
    console.log("el area del triángulo es: " + areaTriangulo + "cm^2");

    console.groupEnd();
   
    console.group("Círculo");
    //Radio
    const radioCirculo=4; 
    console.log("el radio del círculo es: " + radioCirculo + "cm");
    //Diámetro
    const diametroCirculo=radioCirculo*2;
    console.log("el diametro del círculo es:" + diametroCirculo + "cm");
    //PI
    const PI = Math.PI;
    console.log("la constante PI es: " + PI);
    //circunferencia
    const circunferenciaCirculo=diametroCirculo*PI;
    console.log("la circunferencia del círculo es: " + circunferenciaCirculo + "cm");
    //Área
    const areaCirculo=PI*(radioCirculo*radioCirculo);
    console.log("el área del círculo es: " + areaCirculo + "cm^2");
    console.groupEnd();

    


