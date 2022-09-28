// MI SOLUCION A LOS EJERCICIOS DE LOGICA DE PROGRAMACION PROPUESTOS POR JONMIRCHA REALIZADOS EN JAVASCRIPT.


/**
 * Autor: Daniel Gustavo De La Cruz Bautista
 * GitHub: Dan-raccoon-69
 */


/*1) Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10. */
/*
const numeroCarac = function (cadena = ""){
    (typeof cadena === "string") 
    ? console.log(`Numero de caracteres de la cadena: ${cadena.length}`)  
    : console.error(`Lo que ingresaste no es una cadena de texto.`) 
}
numeroCarac("Mi perro se llama Lucas");
*/





// *******************************************************************
/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
/*
const recortarCadena = function (cadena = "",num = cadena.length){
    ((typeof cadena === "string") && ((num > 0))) 
    ? console.log(`La cadena recortada es: ${cadena.slice(0,num)}`) 
    : console.error(`Lo que ingresaste no es una cadena de texto o esta fuera del rango.`)
}
recortarCadena("Lucas tiene un amigo llamado elmo");
*/





// ********************************************************************
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
/*
const devolverArray = function (cadena = "",separador = " "){
    let resultado = ((typeof cadena === "string")) 
    ? cadena.split(separador) 
    : console.error(`Lo que ingresaste no es una cadena de texto.`)
    return resultado;
}
console.log(devolverArray("Lucas tiene un amigo llamado elmo"," "))
*/





// ********************************************************************
/* 4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
/*
const repetirCadena = function (cadena = "",numRepeticiones = 1){
    let resultado = "";
    if((typeof cadena === "string") && numRepeticiones > 0){
        for(let i=0; i<numRepeticiones; i++){
            resultado += "-" + cadena + "\n";
        }  
    }
    else resultado = "Lo que ingresaste no es una cadena de texto o el numero de repeticiones en negativo."
    
    return resultado;
}
console.log(repetirCadena("Mi nombre es Daniel",-4));
*/





// ********************************************************************
/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
/*
const invertirCadena = (cadena = "") => {
    // Version sin metodos de JS
    // let resultado = "";
    // if((typeof cadena !== "string") || (!cadena)) {
    //     return console.error(`Lo que escribiste no es una cadena de texto o esta vacia.`);
    // }
    // for(let i=cadena.length-1; i>=0; i--){
    //     resultado += cadena[i];
    // }
    // console.log(resultado);
    

    // Version con metodos de JS
    ((typeof cadena !== "string") || (!cadena))
    ? console.error(`Lo que escribiste no es una cadena de texto o esta vacia.`)
    : console.log(cadena.split("").reverse().join(""))
}
invertirCadena("Hola Mundo");
invertirCadena("Javascript es diferente que Java");
*/





/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

/*
const countWords = (cadena = "", word = "") => {
    if((typeof cadena !== "string") || (!cadena) || (!word)) {
        return console.error(`Lo que escribiste no es una cadena de texto o hay campos vacios.`);
    }
    let i = 0, contador = 0;
    while(i !== -1){
        i = cadena.indexOf(word, i);
        // console.log(i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.log(`La palabra ${word} aparece ${contador} vez(ces) en el texto.`)
}

countWords("mundo hola mundo, algunas personas en el mundo a menudo me desilucionan (me incluyo en este mundo), pero algunas personas son grandiosas en este mundo, a veces me dan ganas de dejar este mundo","mundo");
countWords("hola mundo adios mundo", "mundo");
*/

/*
    Codigo sin el metodo indexOf
    if((typeof cadena !== "string") || (!cadena) || (!word)) {
        return console.error(`Lo que escribiste no es una cadena de texto o hay campos vacios.`);
    }
    let cadenaAArray = cadena.split("(").join().split(")").join().split(" ").join().split(",");
    let contador = 0;
    cadenaAArray.forEach( (i,indice) => {
        if(cadenaAArray[indice] === word){
            contador++;
        }
    });
    console.log(`La palabra ${word} aparece ${contador} vez(ces) en el texto.`)
*/








/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/
/*
const capicua = (cadena = "") => {
    if((typeof cadena !== "string") || (!cadena)){
        return console.error(`Lo que escribiste no es una cadena de texto o el campo esta vacio.`);
    } 
    cadena = cadena.toLocaleLowerCase();
    let newCadena = cadena.split("").reverse().join("");
    // console.log(newCadena);
    (newCadena === cadena) ? console.log(true) : console.log(false); 
}
capicua("Daniel")
capicua("Salas")
*/







/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
/*
const eliminar = (cadena = "",edelete = "") => {
    if((typeof cadena !== "string") || (!cadena) || (!edelete)) {
        return console.error(`Lo que escribiste no es una cadena de texto o hay campos vacios.`);
    }
    let cadena2 = cadena.split(edelete).join("");    
    return console.log(cadena2);
}
eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5.", "xy");
eliminar("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae natus id, quas labore, quos quibusdam in debitis aspernatur corporis facere minus molestiae aliquid consequatur repellat cupiditate tempore. Commodi, debitis? Nam!","o")
*/






/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
/*
const aleatorio = () => console.log(Math.round(Math.random()*100 + 500));
aleatorio()
*/






/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */
/*
const numberCapicua = numero => {
    if((typeof numero !== "number")) return console.error(`El dato no es un numero o el campo esta vacio`);
    numero = numero.toString();
    let newNumber = numero.split("").reverse().join("");
    return console.log(newNumber === numero);
}
numberCapicua(212.212);
numberCapicua(2002);
*/





/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
/*
const factorial = numero => {
    if((typeof numero !== "number") || (numero < 0)) return console.error(`El dato no es un numero o es negativo o el campo esta vacio.`);
    
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial = i * factorial;
    }
    return console.log(factorial);
}
factorial(5);
*/






/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */
/*
const numeroPrimo = (numero) => {
    if((typeof numero !== "number") || (numero < 0) || (numero === 0) || (numero ===1) ) return console.error(`Ingresa datos validos (solo valores numericos, no negativos, no 0 ni 1).`);
    let bandera = false;
    for(let i=2; i < numero; i++){    
        (numero%i === 0) ? bandera = true : bandera= false;
        break; 
    }
    return (bandera) ? console.log(`El numero ${numero} NO es primo`) : console.log(`El numero ${numero} SI es primo`);
}
numeroPrimo(0);
numeroPrimo(1);
numeroPrimo(true);
numeroPrimo(13);
numeroPrimo(200);
*/






/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
/*
const parOimpar = (numero) =>{
    if((typeof numero !== "number")) return console.error(`El dato no es un numero o el campo esta vacio.`);
    (numero%2 ===0) ? console.log(`El numero ${numero} es par`) : console.log(`El numero ${numero} es Impar`);
}
parOimpar(29);
parOimpar(6);
parOimpar(-6);
*/





/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F. */
/*
const clima = (valor="",tipo="") => {
    if((typeof valor !== "number")){
        return console.error(`Solo valores numericos, ingresa correctamente el valor de los grados.`);
    }
    if((typeof tipo !== "string")){
        return console.error(`Ingresa C si es Celsius y F si es Fahrenheit`);
    } 
    tipo = tipo.toLowerCase();
    if(tipo != "f" && tipo!= "c"){
        return console.error(`Dato invalido, datos validos: C o F.`);
    }
    (tipo === "c") ? console.log(`${valor} °C son ${(valor*1.8)+32} °F`) : console.log(`${valor} °F son ${((valor-32)/1.8).toFixed(2)} °C`);
}

clima(0,"C");
clima(132,"c");
clima(50,"f");
clima(132,"f");
*/






/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) 100 devolverá 4 base 10. */
/*
const conversion = (valor,tipo) => {
    // validaciones
    if(typeof valor !== "number"){
        return console.error(`Dato invalido o campo vacio, ingresa el valor a trasnformar.`)
    }
    if(typeof tipo !== "number"){
        return console.error(`Dato invalido o campo vacio, ingresa la base correctamente.`)
    }
    if((tipo !== 2) && (tipo !== 10)){
        return console.error(`Dato no reconocido de la base, datos validos 2 y 10.`)
    }
    
    // de binario a decimal
    if(tipo === 2){
        // validación de 1s y 0s
        let toDecimal = valor.toString().split("").reverse();
        for(let j=0; j < toDecimal.length; j++){
            if((toDecimal[j] !== "1") && (toDecimal[j] !== "0")){
                return console.error(`Datos invalidos en el valor, solo recibe numeros 1s y 0s.`)
            }
        }
        // parte logica
        let multi = 1, valorFinal = 0;
        for(let i=0; i < toDecimal.length; i++){
            if(toDecimal[i] === "1"){
                valorFinal = valorFinal + multi;
            }
            multi = multi * 2;
        }
        console.log(`${valor} binario = ${valorFinal} decimal`);
    }

    // de decimal a binario
    else{
        // console.log(valor, tipo);
        if((valor === 0) || (valor < 0)){
            return console.error(`No puedes colocar ni ceros ni numeros negativos`);
        }
        valorVerdadero =  valor;
        let modulo = "";
        let resultado = "";
        while(valor >= 2){
            modulo = valor%2;
            resultado =  resultado + modulo;
            valor = Math.floor(valor / 2); 
        }
        resultado += valor;
        console.log(`${valorVerdadero} decimal = ${resultado.split("").reverse().join("")} binario`);
    }
}
conversion(100,2);
conversion(10101,2);
conversion(1011110,2);
conversion(1011010101,2);
conversion(1110010,2);
conversion(15,10);
conversion(8,10);
conversion(16,10);
conversion(19,10);
conversion(4,10);
conversion(114,10);
conversion(114,3);
*/








/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.*/
/*
const descuento = (montoTotal,montoDescuento) => {
    if(typeof montoTotal !== "number"){
        return console.error(`Dato invalido, agrega un valor numerico al monto Total.`)
    }
    if(typeof montoDescuento !== "number"){
        return console.error(`Dato invalido, agrega un valor numerico al porcentaje del descuento.`)
    }
    if(montoTotal <= 0){
        return console.error(`El monto total debe ser mayor a 0`)
    }
    if((montoDescuento < 0) || (montoDescuento > 100)){
        return console.error(`El monto del descuento debe estar en un rango del 0% al 100%`)
    }

    let descuentoTotal = montoTotal * (100 - montoDescuento) / 100;
    console.log(`El producto con un costo de $${montoTotal} con un descuento del ${montoDescuento}% da un total de $${descuentoTotal}.`);  
}
descuento(1000,40);
descuento(1573,20);
descuento(-1573,20); //error
descuento(1573,110); //error
*/







/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 38 años (en 2022).*/
/*
const calcularAños = (año, mes, dia) => {
    let añoActual = 2022;
    if((typeof año !== "number") || (typeof mes !== "number") || (typeof dia !== "number")){
        return console.error(`Datos invalidos, debes de colocar solamente datos numericos.`)
    }
    if((año < 1) || (año > añoActual)){
        return console.error(`El año no puede ser cero, ni negativo, ni sobrepasar al año en el que estamos (${añoActual}).`)
    }
    if((mes < 1) || (mes > 12)){
        return console.error(`El mes no puede ser cero ni negativo y debe encontrarse en un rango de 1 a 12.`)
    }
    if((dia < 1) || (dia > 30)){
        return console.error(`El dia no puede ser cero ni negativo y debe encontrarse en un rango de 1 a 30.`)
    }
    console.log(`Han pasado ${añoActual-año} año(s) desde ${año} a ${añoActual}. `)
}

calcularAños(1984,4,23);
calcularAños(1980,4,30);
calcularAños(2021,1,1);
*/







/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
/*
const contar = texto => {
    if(typeof texto !== "string"){
        return console.error(`Dato ivalido, ingresa una cadena de texto`);
    }
    cadenaTexto =  texto;
    texto = texto.toLowerCase().split("");
    let contadorV = 0, contadorC = 0;
    texto.forEach(element => {
        if(/[aeiouáéíóú]/.test(element)) contadorV++;
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(element)) contadorC++;
    });
    console.log(`La cadena: \n"${cadenaTexto}" \n\nContiene: \nNumero de vocales: ${contadorV}\nNumero de consonantes: ${contadorC}`)
}
contar("Hola, (Mundo).");
contar("ñoño");
contar("Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion.");
*/








/* 19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
/*
const validarNombre = (nombre) => {
    if(typeof nombre !== "string" || nombre === ""){
        return console.error(`Dato ivalido o vacio, ingresa una cadena de texto`);
    }
    // 
    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/.test(nombre);
    (expReg) ? console.log(`${nombre} es un nombre Valido.`) : console.log(`${nombre} NO es un nombre Valido.`);
}

validarNombre("Daniel");
validarNombre("Daniel Gustavo");
*/








/* 20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
/*
const validarEmail = (correo) => {
    if((typeof correo !== "string") || correo === ""){
        return console.error(`Dato invalido o campo vacio, ingresa tu correo electronico.`)
    }
    let expReg =/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
    (expReg) ? console.log(`El correo: ${correo}\n es un correo Valido.`) : console.log(`El ${correo}\n NO es un correo Valido.`);

}
validarEmail("Daniel");
validarEmail("Daniel Gustavo");
validarEmail("gustavodelacruz2010@gmail.com");
validarEmail("ddelacruzb2000@alumno.ipn.mx");
validarEmail("guas123@gmail.com");
validarEmail("agus@gmail.com");
validarEmail("123agus@gmail.com");
*/






/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */
/*
const elevar = (arreglo) => {
    if(arreglo instanceof Array === false) return console.error(`El valor que ingresaste no es un arreglo, debes de ingresar un arreglo.`); 

    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.")

    let contador = 0;
    arreglo.forEach(element => {
        if((typeof element === "number") && (/[1234567890]/g.test(element))){
            contador++;
        }
    });

    if(contador !== arreglo.length) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.\nTu arreglo:\n${arreglo.join(" ")}`);

    let arreglo2 = arreglo.map((valor) => Math.pow(valor,2));
    console.log(`Tu arreglo es:\n[${arreglo.join(" ")}]\nArreglo elevado al cuadrado:\n[${arreglo2.join(" ")}]`);
}
elevar([12,14,16,18,20]);
elevar([2,4,6,8,10]);
elevar(["1", "3", 15, 10,"Hola"]);
elevar([]);
elevar();
*/






/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */
/*
const maxAndmin = (arreglo => {
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.")
    let contador = 0;
    arreglo.forEach(element => {
        if((typeof element === "number") && (/[1234567890]/g.test(element))){
            contador++;
        }
    });
    if(contador !== arreglo.length) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.\nTu arreglo:\n[${arreglo.join(" ")}]`);

    // sin el metodo min, max
    // let auxMa = arreglo[0], auxMe = arreglo[0];
    // for(let i=0; i<arreglo.length; i++){
    //     if(auxMa < arreglo[i+1]) auxMa =  arreglo[i+1];
    //     if(auxMe > arreglo[i+1]) auxMe = arreglo[i+1];
    // }
    // let arreglo2 = [auxMa, auxMe];
     
    //con el metodo min max
    let arreglo2 = [Math.max(...arreglo), Math.min(...arreglo)];
    return console.log(`Arreglo original:\n[${arreglo.join(" ")}]\nMaximo y minimo:\n[${arreglo2}]`);
});
maxAndmin([2,4,6,8,10]);
maxAndmin([1,3,20,15,0.5,50]);
maxAndmin([1,33,10,-15,0.5,-50]);
maxAndmin([1,"5",10,true,0.5,"hola"]);
*/







/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
/*
const objetoArrays = (arreglo) => {
    if(!arreglo) return console.error("Campo vacio")
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.")
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    let contador = 0;
    arreglo.forEach(element => {
        if((typeof element === "number") && (/[1234567890]/g.test(element))){
            contador++;
        }
    });
    if(contador !== arreglo.length) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.\nTu arreglo:\n[${arreglo.join(" ")}]`);

    // sin utilizar el metodo filter
    // let arregloPares = [], arregloImpares = [];
    // for (let elemento of arreglo) {
    // if(elemento%2 === 0) arregloPares.push(elemento);   
    // if(elemento%2 === 1) arregloImpares.push(elemento);   
    // }

    // let objeto = {
    //     arregloPares,
    //     arregloImpares
    // }
    
    let objeto = {
        pares: arreglo.filter(valor => valor%2 === 0),
        impares: arreglo.filter(valor => valor%2 === 1)
    }
    
    return console.log(objeto);
}
objetoArrays([1,2,3,4,5,6,7,8,9,10]);
objetoArrays([5,69,12,4,75,100,39,42,38]);
*/







/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */
/*
const ordenacion = (arreglo) => {
    //validaciones
    if(!arreglo) return console.error("Campo vacio")
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.")
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    let contador = 0;
    arreglo.forEach(element => {
        if((typeof element === "number") && (/[1234567890]/g.test(element))){
            contador++;
        }
    });
    if(contador !== arreglo.length) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.\nTu arreglo:\n[${arreglo.join(" ")}]`);
    
    //ordenamiento ascendente
    let aux;
    for(let i = 0; i<arreglo.length; i++){
        for(let j = 0; j<arreglo.length; j++){
        if(arreglo[j+1] < arreglo[j]){
            aux = arreglo[j];
            arreglo[j] = arreglo[j+1];
            arreglo[j+1] = aux;
        }
        }   
    }
    let ascendente = arreglo;
    let descendiente = [...arreglo].reverse();
    
    let ordenaciones = {
        ascendente,
        descendiente
    }
    return console.log(ordenaciones);
}
ordenacion([42,16,91,8]);
ordenacion([5,69,12,4,75,100,39,42,38]);
ordenacion([7,5,7,8,6]);
ordenacion([2,4,6,8,10]);
ordenacion([1,3,20,15,0.5,50]);
ordenacion([1,33,10,-15,0.5,-50]);
*/







/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */
/*
const eliminarDuplicados = (arreglo => {
    if(!arreglo) return console.error("Campo vacio");
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.");
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    let auxV, iteracion;
    let arregloOriginal = [...arreglo];
    for(let i = 0; i<arreglo.length; i++){
        auxV = arreglo[i];
        iteracion = i;
        for(let j = 0; j<arreglo.length; j++){
        if((arreglo[j] === auxV) && (iteracion < j)){
            arreglo.splice(j,1);
            j--;
        }
    }
    }
    let objeto = {
        arregloOriginal,
        arreglo
    }
    return console.log(objeto);
});
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
eliminarDuplicados(["x", "x", "x", 2, "10", true, 10, 2, true, true]);
eliminarDuplicados(["x", 10, "x", 2, "10", 10, 10, true]);
*/








/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
/*
const promedio = (arreglo) => {
    if(!arreglo) return console.error("Campo vacio")
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.")
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    let band = true;
    arreglo.forEach(valor => {
        if(!(typeof valor === "number" && valor > 0)){
            band = false;
        }
    });

    if(band){
        let resultado = 0;
        arreglo.forEach(valor => resultado += valor);
        return console.log(`El promedio es: ${(resultado/arreglo.length).toFixed(2)}`);
    }else{
        return console.error("Todos los elementos deben de ser numeros y mayores a 0.");
    }
    
}
promedio([9,8,7,6,5,4,3,2,1,1]);
promedio([42,16,91,8]);
promedio([5,69,12,4,75,100,39,42,38]);
promedio([7,5,7,8,6]);
promedio([1,3]);
*/

