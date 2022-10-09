/*javascript entrega dinamismo web al interaccionar con las el ususariocon esta

Los lenguajes más próximos a la arquitectura hardware se denominan lenguajes de bajo nivel y los 
que se encuentran más cercanos a los programadores y usuarios se denominan lenguajes de alto nivel


JavaScript es un lengiaje de alto nivel e interpretado
Contiene;*/
    /* tipos*/
   /* OPERADORES*/
        /* permiten realizar pruebas, calculos matematicos, unir cadenas etc
        /*hay operadores aritmenticos */
        "AB" + 123 /*concatenación*/
        3-2         /*resta*/
        5 / 2       /*division*/
        5 % 2       /*modulo*/
        3 * 2       /*multiplicacion*/
        /*Incrementos y decrementos (++   --). Incrementa o decrementa el valor de una variable 
        numérica en una unidad.*/

        /*operadores de asignacion */
       /* En JavaScript el operador de asignación tiene la particularidad de que puede combinarse con algunos de los operadores aritméticos, dando lugar a toda una familia de nuevos operadores:

        A += B   Ejemplo equivalente: A = A + B
        A -= B   Ejemplo equivalente: A = A - B
        A /= B   Ejemplo equivalente: A = A / B 
        A *= B   Ejemplo equivalente: A = A * B
        A %= B   Ejemplo equivalente: A = A % B
        A &= B   Ejemplo equivalente: A = A & B
        A ^= B   Ejemplo equivalente: A = A ^ B
        A |= B   Ejemplo equivalente: A = A | B */

        /*operadores de comparación
        Nos devuelve true o false*/
/*Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato.
        Por ejemplo: 2 == "2" devuelve True
Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos.
        Por ejemplo: 2 === "2" devuelve False
Desigualdad (!=) Funciona de la misma forma que la igualdad, pero negándola.
        Por ejemplo: 2 != "2" devuelve False
Desigualdad estricta (!==) Lo mismo que la igualdad estricta, pero negándola.
        Por ejemplo: 2 !== "2" devuelve True

Y estos cuatro, seguro que ya sabes cómo funcionan:
Mayor que (>)
Mayor o igual que (>=)
Menor que (<)
Menor o igual que (<=)*/

   /* OBJETOS*/ 
   /* METODOS*/

   /*  existen errores logicos y ortograficos*/

     /*  LAS VARIABLES son cotenedores de valores, puede ser un string o boolean, 
     se usa el codigo var (codigo antiguo),let (se puede reasignar) y const (por defecto)*/
     var name = "james bond";

    
   /*  existen errores logicos y ortograficos
   tipos de datos
   PRIMITIVOS
        null o nulo
        undefined o aun no definido
        number nomeros enteros o con coma flotante
        boolean true y/o false
        string o secuencia de caracteres
        bigint numero entero enormes
        simbolo
    NO PRIMITIVOS
        objeto/object*/ 

/*String
 Es una concatenación de caracteres.
Sirven para crear palabras o frases*/
let mystring = "Ada School";
mystring.length;
mystring[3];
mystring.indexOf;
mystring.slice (0,3);
mystring.replace ("da","pa");
mystring.toUpperCase;
mystring.toLowerCase;

/*Array
Es un objeto que permite guardar de manera ordenada una 
serie de datos.
Se puede acceder a elementos individuales de un array 
utilizando la notación de corchetes*/

let myarray = ["conejo", "gato", "perro"];
myarray[3];
myarray.length;
 /* Conversion string -> array
        split()
 Conversion array -> string
        join()
        toString()*/

 /* agregar/quitar elementos
        push()
        pop()
        shift()
        Unshift()*/