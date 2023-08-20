// El hoisting es un comportamiento en JavaScript por el cual las declaraciones de variables y funciones se "elevan" al principio de su ámbito, es decir, se mueven a la parte superior del ámbito en el que se encuentran antes de que se ejecute el código. Esto significa que puedes hacer referencia a una variable antes de su declaración real en el código, pero su valor será undefined en ese punto.


// Sin embargo, a diferencia de las variables declaradas con var, las variables declaradas con let y const no son inicializadas automáticamente con undefined durante el proceso de hoisting. En cambio, mantienen un estado temporal llamado "temporal dead zone" (zona muerta temporal), durante el cual no se puede acceder a ellas ni utilizarlas antes de su declaración. Esto evita que se produzcan comportamientos inesperados.

console.log(x); // No dará un error, sino que imprimirá "undefined"
var x = 10;

console.log(y); // Dará un error en tiempo de ejecución
let y = 20;

console.log(z); // Dará un error en tiempo de ejecución
const z = 20;