/*Qué es un algoritmo?
cualquier cosa que funcione paso a paso, donde cada paso se pueda describir sin ambigüedad 
y tiene un límite fijo en cuanto a la cantidad de datos que se pueden leer y escribir.

Es una secuencia de pasos ordenados que permiten la ejecución de una tarea, esta formado por:
● Un estado inicial o input 
● Secuencia ordenada de instrucciones
● Una salida o output

Características de los algoritmos
Son:
Precisos. Objetivos, sin ambigüedad. 
Ordenados. Presentan una secuencia clara y precisa para poder llegar a la solución.
Finitos. Contienen un número determinado de pasos.
Concretos. Ofrecen una solución determinada para la situación o problema planteados.
Definidos. El mismo algoritmo debe dar el mismo resultado al recibir la misma entrada.
var diasVida = parseInt(prompt("Cuántos días has vivido",""));*/

var numAnos = Math.floor(diasVida / 365);
var diasRestantes = diasVida % 365 ;
var numMeses = Math.floor(diasRestantes / 30);
diasRestantes = diasRestantes % 30;

alert("Ha vivido " + numAnos + " años, " + numMeses + " meses y " + diasRestantes + " días.");

/*Diagramas de flujo
Es una representación gráfica de un proceso o algoritmo que nos permite divisar 
de una manera más clara el flujo de nuestro proceso o algoritmo.*/

/*TIPOS DE ALGORITMOS 
● Algoritmo ordenamiento BURBUJA Consiste en ciclar repetidamente a través de la lista, 
    comparando elementos adyacentes de dos en dos.*/
const bubbleSort = arr => {
  const l = arr.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( arr[ j ] > arr[ j + 1 ] ) {
        [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
      }
    }
  }

  return arr;
};

const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
const result = bubbleSort(arr);

result; // [1, 4, 19, 12, 31, 32, 40, 43, 65, 67]

/*● Algoritmo ordenamiento por inserción es un algoritmo de ordenación simple basado en la comparación, similar a como
ordenamos las cartas de una baraja.*/

const insertionSort = arr2 => {
    const l = arr2.length;
    let j, temp;
  
    for ( let i = 1; i < l; i++ ) {
      j = i;
      temp = arr2[ i ];
      while ( j > 0 && arr2[ j - 1 ] > temp ) {
        arr2[ j ] = arr2[ j - 1 ];
        j--;
      }
      arr2[ j ] = temp;
    }
  
    return arr2;
  };
  
  const arr2 = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result2 = insertionSort(arr);
  
  result2; // [1, 4, 19, 12, 31, 32, 40, 43, 65, 67]

/*● Algoritmo ordenamiento por selección consiste en encontrar el menor de todos los elementos
 del vector e intercambiarlo con el que está en la primera posición. Luego el segundo mas pequeño,
  y así sucesivamente hasta ordenarlo todo.
*/

const selectionSort = arr3 => {
    for ( let j = 0; j < arr3.length; ++j ) {
      let i = iMin = j;
      for ( ++i; i < arr3.length; ++i ) {
        ( arr3[ i ] < arr3[ iMin ] ) && ( iMin = i );
      }
      [ arr3[ j ], arr3[ iMin ] ] = [ arr3[ iMin ], arr3[ j ] ];
    }
  
    return arr3;
  }
  
  const arr3 = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result3 = selectionSort(arr);
  
  result; // [1, 4, 19, 12, 31, 32, 40, 43, 65, 67]

  //bonus:ARREGLO DE CADENAS
  
  const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];

  equipos.sort(); // en orden alfabetico de A a Z

// ['Bayern Munich', 'Juventus', 'Manchester Utd', 'Real Madrid']

equipos.reverse(); // en orden alfabetico de Z a A

// ['Real Madrid', 'Manchester Utd', 'Juventus', 'Bayern Munich']