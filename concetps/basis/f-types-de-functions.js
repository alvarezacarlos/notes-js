// JavaScript admite varios tipos de funciones que puedes utilizar según tus necesidades. Algunos de los tipos de funciones más comunes en JavaScript son:

// Funciones Declarativas:
function sum(a, b) {
    return a + b;
}


// Expresiones de Función:
const product = function(a, b) {
    return a * b;
};

// Funciones Flecha (Arrow Functions):
const divide = (a, b) => a / b;

// Funciones Anónimas:
// Las funciones que no tienen un nombre se llaman funciones anónimas. Se utilizan a menudo como argumentos para otras funciones o en contextos donde no se necesita un nombre explícito.
setTimeout(function() {
    console.log("Ejecutado después de un tiempo");
}, 1000);


// Funciones Callback:
// Las funciones que se pasan como argumentos a otras funciones y se ejecutan después de que se complete una operación se llaman funciones de devolución de llamada (callbacks).
function fetchData(callback) {
    // Hacer algo para obtener datos
    const data = "Datos obtenidos";
    callback(data);
}

fetchData(function(result) {
    console.log(result);
});


// Funciones Constructoras:
// Las funciones constructoras se utilizan para crear objetos con propiedades y métodos específicos.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const person1 = new Person("Alice", 25);


// Métodos de Objeto:
// Los métodos de objeto son funciones que están asociadas a objetos y se invocan en el contexto de ese objeto.
const myObject = {
    property: "Valor",
    myMethod: function() {
        console.log(this.property);
    }
};
myObject.myMethod();

// Funciones Recursivas:
// Las funciones recursivas son aquellas que se llaman a sí mismas durante su ejecución.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}