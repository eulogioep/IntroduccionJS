// Variables con const

// Esta es la forma actual de crear constantes. Variables que no modifica su valor durante la
// ejecución del script.


const producto = 'Auriculares Gamer'; //Iniciamos la variable y le asignamos un valor.
//const disponible; // A las constantes SIEMPRE hay que asignarles un valor.
//producto = true; // Al ser una constante, no podemos cambiar el valor almacenado.

const producto1 = 'Ordenador',
    disponible1 = true,
    categoria = 'Ordenadores'; // Se pueden inicializar y asginar valor a múltiples variables.

// Estilos para nomrbrar las variables.
// No pueden empezar ni con número ni con -

// const 1disponible; No se puede nombrar empezando con número y son keys sensitive.
const _disponible_ = true;

// Estilos para las variables.
const nombre_producto = 'Monitor HD'; // underscore
const nombreProducto = 'Monitor HD'; // CamelCase. Es el más utilizado
const NombreProducto = 'Monitor HD'; // Pascal Case. Sólo se utiliza para crear clases.
const nombreproducto = 'MonitorHD'; // lowercase. No se utiliza en javascript.