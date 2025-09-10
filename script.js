
// Datos iniciales

// Lista de productos (con nombre y precio)
var productos = [
  { id: 1, nombre: "Camisa", precio: 5000 },
  { id: 2, nombre: "Pantalón", precio: 8000 },
  { id: 3, nombre: "Zapatillas", precio: 12000 }
];

// Carrito de compras (vacío al principio)
var carrito = [];


// Función para mostrar los productos
function mostrarProductos() {
  var mensaje = "Productos disponibles:\n\n";
  mensaje += "1. Camisa - $5000\n";
  mensaje += "2. Pantalón - $8000\n";
  mensaje += "3. Zapatillas - $12000\n";
  alert(mensaje);
}


// Función para agregar productos
function agregarProducto() {
  var seguir = true;

  while (seguir) {
    mostrarProductos(); // Mostramos opciones

    var opcion = prompt("Ingrese el número del producto que desea comprar (1, 2 o 3):");

    // Verificamos qué producto eligió
    if (opcion == "1") {
      carrito.push({ nombre: "Camisa", precio: 5000 });
      alert("Agregaste una Camisa al carrito.");
    } else if (opcion == "2") {
      carrito.push({ nombre: "Pantalón", precio: 8000 });
      alert("Agregaste un Pantalón al carrito.");
    } else if (opcion == "3") {
      carrito.push({ nombre: "Zapatillas", precio: 12000 });
      alert("Agregaste unas Zapatillas al carrito.");
    } else {
      alert("Opción inválida. Por favor, ingresá 1, 2 o 3.");
    }

    // Preguntamos si quiere seguir comprando
    seguir = confirm("¿Querés agregar otro producto?");
  }
}


// Función para mostrar el carrito
function mostrarCarrito() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
  } else {
    var mensaje = "Productos en tu carrito:\n\n";
    var total = 0;

    for (var i = 0; i < carrito.length; i++) {
      mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
      total += carrito[i].precio;
    }

    mensaje += "\nTotal a pagar: $" + total;

    alert(mensaje);
  }
}


// Función principal
function iniciarSimulador() {
  alert("¡Bienvenido al simulador de compras!");

  agregarProducto(); // Paso 1: elige productos
  mostrarCarrito();  // Paso 2: mostramos resumen

  alert("¡Gracias por comprar con nosotros!");
}


// Iniciamos el programa
iniciarSimulador();