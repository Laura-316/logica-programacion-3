// solicitud  de datos 
let numeroIngresadoTexto = prompt("Ingresa un numero entero positivo para calcular su factorial:");

// Transformamos el texto a numero entero
let numeroValido = Number(numeroIngresadoTexto);

// Verificamos  que se numero,  mayor 0,  no ser decimal
if (isNaN(numeroValido) || numeroValido < 0 || !Number.isInteger(numeroValido)) {
    console.log("⚠️ Error: Debes ingresar un numero entero positivo valido.");
} else {

    // Creamos una variable que resultade de la multiplicacion. Empieza en 1.
    let resultadoFactorial = 1;

    // EL BUCLE O CICLO (El motor de la logica):
    // Crea un contadorPaso que empieza en 1. 
    // Se va a repetir MIENTRAS 'contadorPaso' sea menor o igual al 'numeroValido'.
    // En cada vuelta, 'contadorPaso' aumenta de 1 en 1 (gracias al contadorPaso++).
    for (let contadorPaso = 1; contadorPaso <= numeroValido; contadorPaso++) {
        
        // Resultado de multiplicacion, se acumula y sigue  multiplicando coen el siguiente nuemro de bucle 
        resultadoFactorial = resultadoFactorial * contadorPaso;
        
     
    }

    //  RESULTADO FINAL:
    console.log(`🎉 ¡Listo! El factorial de ${numeroValido}! es: ${resultadoFactorial}`);
}