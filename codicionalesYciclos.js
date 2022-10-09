/*CONDICIONALES
 El código necesita tomar decisiones y llevar a cabo acciones en función de las 
diferentes entradas.
Por ejemplo, en un juego, si el número de vidas del jugador es 0, se termina el juego, 
recordar que la respuesta ante la pregunta condicional puede ser solo true o false*/

/*operadores logicos
&& — AND; le permite encadenar dos o más expresiones para que todas ellas se tengan que evaluar individualmente.
|| — OR; le permite encadenar dos o más expresiones para que una o más de ellas se tengan que evaluar individualmente.
! — NOT; puede ser usado para negar una expresión. 

*/
/*if and if ...else*/
const a = 5;
const b = 6;
if (a>b) 
    { console.log('a es mayor');} 
    else { if (a<b)
    {console.log('b es mayor');}

        else 
         {console.log('son iguales');}
         }   

/* BUCLES O CICLOS
Los bucles de programación tienen que ver con hacer lo 
mismo una y otra vez, lo que se denomina iteración en 
lenguaje de programación.*/

/*WHILE*/
let n = 0;
let x = 0;
while (n < 3) {  // mientras que la condicion sea verdadera ejecuta el codigo,  no se sabe las veces que realiza/ejecuta el codigo
  n++;
  x += n;
}

/*FOR*/
for (let step = 0; step < 5; step++) { // todo esta definido
    // Se ejecuta 5 veces, con valores del paso 0 al 4
    console.log('Camina un paso hacia el este');
  }
  //cuidado con caer en un bucle infinito 