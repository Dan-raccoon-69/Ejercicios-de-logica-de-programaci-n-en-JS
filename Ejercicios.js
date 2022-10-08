// MI SOLUCION A LOS EJERCICIOS DE LOGICA DE PROGRAMACION PROPUESTOS POR JONMIRCHA REALIZADOS EN JAVASCRIPT.


/**
 * Autor: Daniel Gustavo De La Cruz Bautista
 * GitHub: Dan-raccoon-69
 */





/* 1) Programa una función que cuente el número de caracteres de una cadena de texto,
pe. miFuncion("Hola Mundo") devolverá 10. */
/**
 * Se debe considerar:
 * El programa solo podra recibir una cadena de texto, si es otra cosa mandara el mensaje de error. 
 */
const numeroCaracteres = (cadena = "") => (typeof cadena === "string")
? console.log(`Numero de caracteres de la cadena: ${cadena.length}`)  
: console.error(`Lo que ingresaste no es una cadena de texto.`); 

// Pruebas de escritorio
numeroCaracteres('Mi perro se llama Lucas'); // 23
numeroCaracteres(''); // 0
numeroCaracteres(true); // Lo que ingresaste no es una cadena de texto.





/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */
/**
 * Se debe considerar:
 * El programa solo podra recibir una cadena de texto y el numero de caracteres debe ser positivo, de lo contrario mandara el mensaje de error. 
 */
const recortarCadena = (cadena = "",num = cadena.length) => 
((typeof cadena === "string" && typeof num === "number" ) && (( num > 0) && (num <= cadena.length))) 
    ? console.log(`La cadena recortada es: ${cadena.slice(0,num)}`) 
    : console.error(`Datos invalidos, diferentes tipos de dato, cadena vacia o rango no valido.`);

// Pruebas de escritorio
recortarCadena("Lucas tiene un amigo llamado elmo"); //dado que no se coloco el parametro de num, el programa retorna la cadena original.
recortarCadena(""); //devuelve el mensaje del console.error
recortarCadena("Lucas tiene un amigo",5); //Lucas
recortarCadena("Lucas tiene un amigo","5"); //console.error
recortarCadena("Lucas tiene un amigo",18); //Lucas tiene un ami
recortarCadena("Lucas tiene un amigo",22); //rango invalido, console.error





/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
/**
 * Se debe considerar:
 * El programa solo podra recibir una cadena de texto y el separador de caracteres debe ser positivo, de lo contrario mandara el mensaje de error. 
 */
const devolverArray = (cadena = "",separador = " ") => {
    ((typeof cadena === "string" && typeof separador === "string" )) 
    ? console.log(cadena.split(separador)) 
    : console.error(`Datos invalidos, lo que ingresaste no es una cadena de texto o el separador no es de tipo cadena.`);
}
// Pruebas de escritorio
devolverArray("Lucas tiene un amigo llamado elmo");
/*se toma por defecto que el separador sera un espacio en blanco, retorna cada elemento en forma de arreglo.
ejemplo: array = [Lucas, tiene, un, amigo, llamado, elmo] */
devolverArray("Lucas tiene un amigo llamado elmo", 5); //console.error
devolverArray("nombre, apellido, sexo, edad", ","); //retorna cada elemento en forma de arreglo
devolverArray(true, ","); //console.error





/* 4) Programa una función que repita un texto X veces, 
pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
/**
 * Se debe considerar:
 * El programa solo podra recibir una cadena de texto y el numRepeticiones debe ser positivo, de lo contrario mandara el mensaje de error. 
 */
const repetirCadena = (cadena = "", numRepeticiones = 1) => {
    if((typeof cadena === "string") && (typeof numRepeticiones === "number") && (numRepeticiones > 0)){
        for(let i=0; i<numRepeticiones; i++) console.log(`${i+1}: ${cadena}\n`);
    }
    else console.error(`Datos invalidos, lo que ingresaste no es una cadena, el numero de repeticiones es negativo  o existen diferentes tipos de dato.`);
}
// Pruebas de escritorio
repetirCadena("Mi nombre es Daniel",4); //repite 4 veces
repetirCadena("Mi nombre es Daniel","4"); // console.error
repetirCadena(345971,4); // console.error
repetirCadena("345971",4); // repite 4 veces
repetirCadena("345971",-4); // console.error





/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
/**
 * Se debe considerar:
 * El programa solo podra recibir una cadena de texto, de lo contrario mandara el mensaje de error. 
 */
const invertirCadena = (cadena = "") => {
    ((typeof cadena !== "string") || (!cadena))
    ? console.error(`Lo que escribiste no es una cadena de texto o esta vacia.`)
    : console.log(cadena.split("").reverse().join(""))
}
// Pruebas de escritorio
invertirCadena("Hola Mundo"); //odnuM aloH
invertirCadena("Javascript es diferente que Java"); //avaJ euq etnerefid se tpircsavaJ
invertirCadena(""); //console.error
invertirCadena(true); //console.error





/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
/**
 * Se debe considerar:
 * El programa solo podra recibir cadenas, el texto y la palabra a buscar-contar las repeticiones, de lo contrario mandara el mensaje de error. 
 */
const countWords = (cadena = "", word = "") => {
    if((typeof cadena !== "string" || typeof word !== "string") || (!cadena) || (!word)) {
        return console.error(`Datos invalidos, la cadena y-o la palabra a buscar no es de tipo cadena o hay campos vacios.`);
    }
    let i = 0, contador = 0;
    while(i !== -1){
        i = cadena.indexOf(word, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.log(`La palabra "${word}" aparece ${contador} vez(ces) en el texto.`)
}
// Pruebas de escritorio
countWords("mundo hola mundo, algunas personas en el mundo a menudo me desilucionan (me incluyo en este mundo), pero algunas personas son grandiosas en este mundo, a veces me dan ganas de dejar este mundo","mundo"); //devuelve 6 veces
countWords("hola mundo adios mundo", "mundo");//devuelve 2 veces
countWords("hola mundo adios mundo", 5); //console.error
countWords("", ""); //console.error





/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/
/**
 * Se debe considerar:
 * El programa solo podra recibir una cadena, de lo contrario mandara el mensaje de error. 
 */
const capicua = (cadena = "") => {
    if((typeof cadena !== "string") || (!cadena)){
        return console.error(`Lo que escribiste no es una cadena de texto o el campo esta vacio.`);
    } 
    cadena = cadena.toLocaleLowerCase();
    let newCadena = cadena.split("").reverse().join("");
    (newCadena === cadena) ? console.log(true) : console.log(false); 
}
// Pruebas de escritorio
capicua("oso"); //true 
capicua("Daniel"); //false
capicua("Salas"); //true
capicua(""); //console.error
capicua(true); //console.error





/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
/**
 * Se debe considerar:
 * El programa solo podra recibir datos de tipo string, de lo contrario mandara el mensaje de error. 
 */
const eliminar = (cadena = "",edelete = "") => {
    if((typeof cadena !== "string" || typeof edelete !== "string" ) || (!cadena) || (!edelete)) {
        return console.error(`Lo que escribiste no es una cadena de texto o hay campos vacios.`);
    }
    let cadena2 = cadena.split(edelete).join("");
    return console.log(cadena2);
}
// Pruebas de escritorio
eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5.", "xy"); // retorna z, z2, z3, z4 y z5.
eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5.", "xyz");// retorna 1, 2, 3, 4 y 5.
eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5.", "");// console.error
eliminar("", "xyz");// console.error
eliminar(true, "xyz");// console.error





/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
const aleatorio = () => console.log(Math.round(Math.random()*100 + 500));
// Pruebas de escritorio
aleatorio() //algun numero entre 501 y 600
aleatorio() //algun numero entre 501 y 600
aleatorio() //algun numero entre 501 y 600





/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */
/**
 * Se debe considerar:
 * El programa solo podra recibir datos de tipo numerico, de lo contrario mandara el mensaje de error. 
 */
const numberCapicua = (numero = undefined) => {
    if((typeof numero !== "number")) return console.error(`El dato no es un numero o el campo esta vacio`);
    numero = numero.toString();
    let newNumber = numero.split("").reverse().join("");
    return console.log(newNumber === numero);
}
// Pruebas de escritorio
numberCapicua(212.212); //true
numberCapicua(2002); //true
numberCapicua("2002"); //console.error
numberCapicua(""); //console.error
numberCapicua(); //console.error





/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
/**
 * Se debe considerar:
 * El programa solo podra recibir datos de tipo numerico y positivos, de lo contrario mandara el mensaje de error. 
 */
const factorial = (numero = undefined) => {
    if((typeof numero !== "number") || (numero < 0)) return console.error(`El dato no es un numero o es negativo o el campo esta vacio.`);
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial = i * factorial;
    }
    return console.log(factorial);
}
// Pruebas de escritorio
factorial(5); //120
factorial(3); //6
factorial(9); //362,880
factorial(6); //720
factorial(-5); //console.error
factorial("5"); //console.error





/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */
/**
 * Se debe considerar:
 * El programa solo podra recibir 1 dato de tipo numerico y positivo, de lo contrario mandara el mensaje de error. 
 */
const numeroPrimo = (numero = undefined) => {
    if((typeof numero !== "number") || (numero < 0) || (numero === 0) || (numero ===1) ) return console.error(`Ingresa datos validos (solo valores numericos, no negativos, no 0 ni 1).`);
    let bandera = false;
    for(let i=2; i < numero; i++){    
        (numero%i === 0) ? bandera = false : bandera = true;
        break; 
    }
    return (bandera) ? console.log(`El numero ${numero} SI es primo`): console.log(`El numero ${numero} NO es primo`);
}
// Pruebas de escritorio
numeroPrimo(13); //true
numeroPrimo(200); //false
numeroPrimo(39); //true
numeroPrimo(320); //false
numeroPrimo(0); //console.error
numeroPrimo(1); //console.error
numeroPrimo(true); //console.error





/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
/**
 * Se debe considerar:
 * El programa solo podra recibir 1 dato de tipo numerico, de lo contrario mandara el mensaje de error. 
 */
const parOimpar = (numero = undefined) => {
    if((typeof numero !== "number")) return console.error(`El dato no es un numero o el campo esta vacio.`);
    (numero % 2 === 0) ? console.log(`El numero ${numero} es par.`) : console.log(`El numero ${numero} es Impar.`);
}
// Pruebas de escritorio
parOimpar(29); //impar
parOimpar("29"); //console.error
parOimpar(6); //par
parOimpar(""); //console.error
parOimpar(true); //console.error
parOimpar(-6); //impar





/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F. */
/**
 * Se debe considerar:
 * El programa podra recibir 1 dato de tipo numerico (valor) y 1 dato de tipo cadena (C-F), este ultimo dato puede ser mayuscula o miniscula, de lo contrario mandara el mensaje de error. 
 */
const clima = (valor = undefined, tipo = "") => {
    if((typeof valor !== "number")){
        return console.error(`Solo valores numericos, ingresa correctamente el valor.`);
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
// Pruebas de escritorio
clima(0,"C"); // 0 °C son 32 °F
clima(0,"a"); // console.error, datos validos solo C y F
clima(132,"c"); // 132 °C son 269.6 °F
clima("132","c"); // console.error, solo valores numericos, ingresa correctamente el valor
clima(50,"f"); // 50 °F son 10.00 °C
clima(132,"f"); // 132 °F son 55.56 °C
clima(32,"Celsius"); // console.error, dato invalido, solo C o F
clima(32,"C"); // 32 °C son 89.6 °F





/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) 100 devolverá 4 base 10. */
/**
 * Se debe considerar:
 * El programa debe recibir 2 datos de tipo numerico (valor) y (base), de lo contrario mandara el mensaje de error.
 * El campo tipo solo puede aceptar dos valores, 10 decimal y 2 si es binario, de no ser asi, mandara un error.
 * Si se indica que es base binaria, el valor solo puede contener 1s y 0s, de lo contrario mandara un error.
 */
const conversion = (valor = undefined,tipo = undefined) => {
    // validaciones
    if(typeof valor !== "number"){
        return console.error(`Dato invalido o campo vacio, ingresa el valor a transformar.`)
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
        for(let i = 0; i < toDecimal.length; i++){
            if(toDecimal[i] === "1"){
                valorFinal = valorFinal + multi;
            }
            multi = multi * 2;
        }
        console.log(`${valor} binario = ${valorFinal} decimal`);
    }

    // de decimal a binario
    else{
        if((valor === 0) || (valor < 0)){
            return console.error(`No puedes colocar ni ceros ni numeros negativos`);
        }
        const valorDecimal = valor;
        let modulo = "";
        let resultado = "";
        while(valor >= 2){
            modulo = valor%2;
            resultado =  resultado + modulo;
            valor = Math.floor(valor / 2); 
        }
        resultado += valor;
        console.log(`${valorDecimal} decimal = ${resultado.split("").reverse().join("")} binario`);
    }
}
// Pruebas de escritorio
conversion(100,2); //100 binario = 4 decimal
conversion(10101,2); // 10101 binario = 21 decimal
conversion(1011110,2); // 1011110 binario = 94 decimal
conversion(1011010101,2); // 1011010101 binario = 725 decimal
conversion(1110010,2); // 1110010 binario = 114 decimal
conversion(15,10); // 15 decimal = 1111 binario
conversion(8,10); // 8 decimal = 1000 binario
conversion(16,10); // 16 decimal = 10000 binario
conversion(19,10); // 19 decimal = 10011 binario
conversion(114,10); // 114 decimal = 1110010 binario
conversion(114,3); //console.error
conversion("114",3); // console.error





/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.*/
/**
 * Se debe considerar:
 * El programa debe recibir 2 datos de tipo numerico (montoTotal) y (montoDescuento), de lo contrario mandara el     mensaje de error.
 * El montoTotal debe ser mayor a $0, de lo contrario mandara error.
 * El montoDescuento debe de encontrarse entre un rango de 0% a 100%, de lo contrario mandara un error.
 */
const descuento = (montoTotal = undefined,montoDescuento = undefined) => {
    // validaciones
    if(typeof montoTotal !== "number"){
        return console.error(`Dato invalido, agrega un valor numerico al monto Total.`);
    }
    if(typeof montoDescuento !== "number"){
        return console.error(`Dato invalido, agrega un valor numerico al porcentaje del descuento.`);
    }
    if(montoTotal <= 0){
        return console.error(`El monto total debe ser mayor a 0`);
    }
    if((montoDescuento < 0) || (montoDescuento > 100)){
        return console.error(`El monto del descuento debe estar en un rango del 0% al 100%`);
    }

    let descuentoTotal = montoTotal * (100 - montoDescuento) / 100;
    return console.log(`El producto con un costo de $${montoTotal} con un descuento del ${montoDescuento}% da un total de $${descuentoTotal.toFixed(2)}`);  
}
// Pruebas de escritorio
descuento(1000,40); // El producto con un costo de $1000 con un descuento del 40% da un total de $600.00
descuento(1573,20); // El producto con un costo de $1573 con un descuento del 20% da un total de $1258.40
descuento(1373,13.5); // El producto con un costo de $1373 con un descuento del 13.5% da un total de $1187.64
descuento(-1573,20); // console.error, monto Totalmayor a 0
descuento(1573,110); // console.error, monto del descuento en un rango de 0% a 100%
descuento("1573",80); // console.error, el monto Total no es un valor numerico





/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 38 años (en 2022).*/
/**
 * Se debe considerar:
 * Todos los datos deben de ser de tipo numerico, de lo contrario mandara un error.
 * El año no debe de ser mayor al año en el que nos encontramos ni menor a 1, de lo contrario mandara un error.
 * El mes debe de estar en un rango de 1 a 12, de lo contrario, mandara un error.
 * El dia debe de estar en un rango del 1 al 30, de lo contrario, mandara un error.
 */
const calcularAños = (año = undefined, mes = undefined, dia = undefined) => {
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
    return console.log(`Han pasado ${añoActual-año} año(s) desde ${año} a ${añoActual}. `)
}
// Pruebas de escritorio
calcularAños(1984,4,23); // Han pasado 38 año(s) desde 1984 a 2022. 
calcularAños(1980,4,30); // Han pasado 42 año(s) desde 1980 a 2022. 
calcularAños(2021,1,1); // Han pasado 1 año(s) desde 2021 a 2022. 
calcularAños(2021,1,"1"); // console.error, Datos invalidos, debes de colocar solamente datos numericos.





/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
/**
 * Se debe considerar:
 * El unico dato a recibir es de tipo cadena, de lo contrario mandara un error.
 */
const contar = (texto = undefined) => {
    if(typeof texto !== "string"){
        return console.error(`Dato ivalido, ingresa una cadena de texto`);
    }
    if(!texto){
        return console.error(`Campo vacio, ingresa una cadena de texto`);
    }
    const cadenaTexto = texto;
    texto = texto.toLowerCase().split("");
    let contadorV = 0, contadorC = 0;
    texto.forEach(element => {
        if(/[aeiouáéíóú]/.test(element)) contadorV++;
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(element)) contadorC++;
    });
    return console.log(`La cadena: \n"${cadenaTexto}" \n\nContiene: \nNumero de vocales: ${contadorV}\nNumero de consonantes: ${contadorC}`);
}
// Pruebas de escritorio
contar("Hola, (Mundo)."); // Numero de vocales: 4, Numero de consonantes: 5
contar("ñoño"); // Numero de vocales: 2, Numero de consonantes: 2
contar(""); // console.error, campo vacio.
contar("Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion."); // Numero de vocales: 40, Numero de consonantes: 47
contar(true); // console.error, ingresa una cadena de texto.





/* 19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/
/**
 * Se debe considerar:
 * El nombre debe de ser de tipo cadena, de lo contrario mandara un error.
 * El nombre no debe de contener numeros, caracteres especiales, signos.
 */
const validarNombre = (nombre = undefined) => {
    if(typeof nombre !== "string" || nombre === ""){
        return console.error(`Dato ivalido o vacio, ingresa una cadena de texto`);
    }
    // 
    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/.test(nombre);
    (expReg) ? console.log(`${nombre} es un nombre Valido.`) : console.error(`${nombre} NO es un nombre Valido.`);
}
// Pruebas de escritorio
validarNombre("Daniel"); // Daniel es un nombre Valido.
validarNombre(true); // console.error, Dato ivalido o vacio, ingresa una cadena de texto.
validarNombre("Daniel Gustavo"); // Daniel Gustavo es un nombre Valido.
validarNombre("Daniel14"); // console.error, nombre no valido
validarNombre("$aniel*"); // console.error, nombre no valido
validarNombre(""); // console.error, Dato ivalido o vacio, ingresa una cadena de texto
validarNombre("Lucas"); // Lucas es un nombre Valido.





/* 20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
/**
 * Se debe considerar:
 * El correo debe de ser de tipo cadena, de lo contrario mandara un error.
 * El correo debe de contener todos los elementos necesarios para poder considerarse como tal.
 */
const validarEmail = (correo = undefined) => {
    if((typeof correo !== "string") || correo === ""){
        return console.error(`Dato invalido o campo vacio, ingresa tu correo electronico.`)
    }
    let expReg =/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
    (expReg) ? console.log(`El correo: ${correo}\nes un correo Valido.`) : console.error(`El correo: ${correo}\nNO es un correo Valido.`);
}
// Pruebas de escritorio
validarEmail("Daniel"); //El correo: Daniel NO es un correo Valido.
validarEmail("Daniel Gustavo"); //El correo: Daniel Gustavo NO es un correo Valido.
validarEmail("gustavobautista2001@gmail.com"); // El correo: gustavobautista2001@gmail.com es un correo Valido.
validarEmail("dbcruzb4000@alumno.unam.mx"); // El correo: dbcruzb4000@alumno.unam.mx es un correo Valido.
validarEmail("guas123@gmail.com"); // El correo: guas123@gmail.com es un correo Valido.
validarEmail("agus@gmail.com"); // El correo: agus@gmail.com es un correo Valido.
validarEmail("123agus@gmail.com"); // El correo: 123agus@gmail.com es un correo Valido.
validarEmail(""); // console.error, Dato invalido o campo vacio, ingresa tu correo electronico.
validarEmail(true); // console.error, Dato invalido o campo vacio, ingresa tu correo electronico.





/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */
/**
 * Se debe considerar:
 * Si el campo no es de tipo arreglo, debera mandar error, asi mismo si es un arreglo pero esta vacio debe mandar error.
 * Todos los elementos del arreglo deben de ser de tipo numerico, de lo contrario es un error.
 */
const elevar = (arreglo = undefined) => {
    // validando si es un arreglo
    if(arreglo instanceof Array === false) return console.error(`El valor que ingresaste no es un arreglo, debes de ingresar un arreglo.`); 
    
    // validando si no esta vacio
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.")

    // Validando que todos los numeros sean de tipo numerico
    const allNumbers = arreglo.every((numero) => typeof numero === "number");
    if(allNumbers === false) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.`);

    let arregloElevado = arreglo.map((valor) => Math.pow(valor,2));
    console.log(`Tu arreglo es:\n[${arreglo.join(" ")}]\nArreglo elevado al cuadrado:\n[${arregloElevado.join(" ")}]`);
}
// Pruebas de escritorio
elevar([12,14,16,18,20]); // [144 196 256 324 400]
elevar([2,4,6,8,"10"]); // console.error, arreglo solo debe contener numeros de tipo numerico
elevar([2,4,6,8,10]); // [4 16 36 64 100]
elevar(["1", "3", 15, 10,"Hola"]); // console.error, arreglo solo debe contener numeros de tipo numerico
elevar([]); // console.error, arreglo vacio
elevar([3,6,9,12,15]); // [9 36 81 144 225]





/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */
/**
 * Se debe considerar:
 * Si el campo no es de tipo arreglo, debera mandar error, asi mismo si es un arreglo pero esta vacio debe mandar error.
 * Todos los elementos del arreglo deben de ser de tipo numerico, de lo contrario es un error.
 * Los numeros pueden ser de tipo negativos, positivos y decimales.
 */
const maxAndmin = (arreglo = undefined) => {
    // Validando que sea arreglo y no se encuentre vacio
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.");
    
    // Validando que todos los numeros sean de tipo numerico
    const allNumbers = arreglo.every((numero) => typeof numero === "number");
    if(allNumbers === false) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.`);

    let arreglo2 = [Math.max(...arreglo), Math.min(...arreglo)];
    return console.log(`Arreglo original:\n[${arreglo.join(" ")}]\nMaximo y minimo:\n[${arreglo2}]`);
};
// Pruebas de escritorio
maxAndmin([2,4,6,8,10]); // [10,2]
maxAndmin([1,3,20,15,0.5,50]); // [50,0.5]
maxAndmin([2,95,71,105,-4,0,-69, "-200"]); // console.error, todos los datos deben de ser de tipo numerico.
maxAndmin([1,33,10,-15,0.5,-50]); // [33,-50]
maxAndmin([1,"5",10,true,0.5,"hola"]); // console.error, todos los datos deben de ser de tipo numerico.





/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */
/**
 * Se debe considerar:
 * Si el campo no es de tipo arreglo, debera mandar error, asi mismo si es un arreglo pero esta vacio debe mandar error.
 * Todos los elementos del arreglo deben de ser de tipo numerico, de lo contrario es un error.
 */
const objetoArrays = (arreglo = undefined) => {
    // Validando que sea arreglo y no se encuentre vacio
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.");

    // Validando que todos los numeros sean de tipo numerico
    const allNumbers = arreglo.every((numero) => typeof numero === "number");
    if(allNumbers === false) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.`);
    
    let objeto = {
        pares: arreglo.filter(valor => valor%2 === 0),
        impares: arreglo.filter(valor => valor%2 === 1)
    }
    
    return console.log(objeto);
}
// Pruebas de escritorio
objetoArrays([1,2,3,4,5,6,7,8,9,10]); // retorna el objeto con sus respetivos valores
objetoArrays([5,69,12,4,75,100,39,42,38]); // retorna el objeto con sus respetivos valores
objetoArrays([2,95,71,105,"-4",0,-69, "-200"]); // console.error, todos los datos deben de ser de tipo numerico.
objetoArrays([1,"5",10,true,0.5,"hola"]); // console.error, todos los datos deben de ser de tipo numerico.





/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */
/**
 * Se debe considerar:
 * Si el campo no es de tipo arreglo, debera mandar error, asi mismo si es un arreglo pero esta vacio debe mandar error.
 * Todos los elementos del arreglo deben de ser de tipo numerico, de lo contrario es un error.
 */
const ordenacion = (arreglo = undefined) => {
    // Validando que sea arreglo y no se encuentre vacio
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.");
    // Validando que todos los numeros sean de tipo numerico
    const allNumbers = arreglo.every((numero) => typeof numero === "number");
    if(allNumbers === false) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.`);

    //ordenamiento ascendente usando metodo burbuja
    const arregloReal = [...arreglo];
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

// ordenamiento descendiente copiando y dando un reverse
// va entre corchetes para que no se pase por referencia, ya que si se pasa por referencia el ascendente se ve afectado
let descendiente = [...arreglo].reverse();

let ordenaciones = {
    arregloReal,
    ascendente,
    descendiente
}
return console.log(ordenaciones);
}
// Pruebas de escritorio
ordenacion([42,16,91,8]); // retorna el objeto con sus respetivos valores
ordenacion([5,69,12,4,75,100,39,42,38]); // retorna el objeto con sus respetivos valores
ordenacion([1,33,10,-15,0.5,-50]); // retorna el objeto con sus respetivos valores
objetoArrays([2,95,71,105,"-4",0,-69, "-200"]); // console.error, todos los datos deben de ser de tipo numerico.
objetoArrays([1,5,10,true,0.5,3]); // console.error, todos los datos deben de ser de tipo numerico.





/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */
/**
 * Se debe considerar:
 * Si el campo no es de tipo arreglo, debera mandar error, asi mismo si es un arreglo pero esta vacio debe mandar error.
 */
const eliminarDuplicados = (arreglo = undefined) => {
    // validaciones
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.");

    let arregloOriginal = [...arreglo];
    
    /*  // 1era solución
    let auxV, iteracion;
    for(let i = 0; i<arreglo.length; i++){
        auxV = arreglo[i];
        iteracion = i;
        for(let j = 0; j<arreglo.length; j++){
        if((arreglo[j] === auxV) && (iteracion < j)){
            arreglo.splice(j,1);
            j--;
        }
    }
    }  */

    // 2da solución, utilizando Set
    arreglo = [... new Set(arreglo)];

    // almacenando en un objeto para mostrar
    let objeto = {
        arregloOriginal,
        arreglo
    }

    return console.log(objeto);
};
// Pruebas de escritorio
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]); // retorna un objeto con sus respectivos valores
eliminarDuplicados(["x", "x", "x", 2, "10", true, 10, 2, true, true]); // retorna un objeto con sus respectivos valores
eliminarDuplicados(true, false, 14); // console.error, debes de ingresar un arreglo
eliminarDuplicados(["x", 10, "x", 10, 2, "10", 10, true, false]); // retorna un objeto con sus respectivos valores
eliminarDuplicados([]); // console.warn, el arreglo esta vacio
eliminarDuplicados([true, false, 14, "true", 14]); // retorna un objeto con sus respectivos valores





/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/
/**
 * Se debe considerar:
 * Si el campo no es de tipo arreglo, debera mandar error, asi mismo si es un arreglo pero esta vacio debe mandar error.
 * Todos los elementos del arreglo deben de ser de tipo numerico, de lo contrario es un error.
 */
const promedio = (arreglo = undefined) => {
    // validaciones
    if(arreglo instanceof Array === false) return console.error(`Debes de ingresar un arreglo`); 
    if(arreglo.length === 0) return console.warn("El arreglo esta vacio.");
    // Validando que todos los numeros sean de tipo numerico
    const allNumbers = arreglo.every((numero) => typeof numero === "number");
    
    if(allNumbers === false) return console.error(`Todo el arreglo debe contener valores de tipo numerico.\nTu arreglo contiene numeros como cadenas o cualquier otro tipo de dato.`);
    else{
        let resultado = 0;
        arreglo.forEach(valor => resultado += valor);
        return console.log(`El promedio es: ${(resultado/arreglo.length).toFixed(2)}`);
    }
    
}
// Pruebas de escritorio
promedio([9,8,7,6,5,4,3,2,1,1]); // El promedio es: 4.60
promedio([42,16,91,8]); // El promedio es: 39.25
promedio([5,69,12,4,75,100,39,42,38]); // El promedio es: 42.67
promedio([7,5,7,8,6]); // El promedio es: 6.60
promedio([1,3]); // El promedio es: 2.00
promedio([]); // console.warn, el arreglo esta vacio
promedio([true,10,25,45,7]); // console.error, todo el arreglo debe contener valores de tipo numerico.
promedio(true,10,25,45,7); // console.error, debes de ingresar un arreglo.