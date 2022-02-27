//Parte 1
let logGreeting = (miParametro) => miParametro();
//El parámetro es una función que se ejecuta sin necesidad de escribir otra línea.
logGreeting(function () {
    console.log('Hello from a function created on the fly');
});