//Parte 1
let logGreeting = (miParametro) => miParametro();
//El parámetro es una función que se ejecuta sin necesidad de escribir otra línea.
logGreeting(function () {
    console.log('Hello from a function created on the fly');
});

//Parte 2: Interpolación de strings
let logGreeting1 = (miNombre, miColor) => {
    console.log("¡Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}
logGreeting1("Tirzo", "naranja");