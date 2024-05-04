const carrito = [];

function sumarProductos() {
    const producto = parseInt(prompt("Elige algun producto:\n1. Camiseta titular de Boca Juniors 23/24 valor: $ 100\n2. Camiseta titular de Boca Juniors 21/22 valor: $ 90\n3. Campera de Boca azul y amariilo valor: $ 200\n4. Campera de Boca azul y celeste  valor: $ 190\n5. Buzo medio cierre de Boca valor: $ 150\n6. Short de Boca azul valor: $ 50\n7. Pelota de Boca Juniors valor: $ 130\n8. Zapatillas Adidas de Boca Juniors valor: $ 160 "));
    const cantidad = parseInt(prompt("Ingresa la cantidad"));
    let precioFinal = cantidad;

    switch (producto) {
        case 1:
            precioFinal = cantidad * 100;
            break;
        case 2:
            precioFinal = cantidad * 90;
            break;
        case 3:
            precioFinal = cantidad * 200;
            break;
        case 4:
            precioFinal = cantidad * 190;
            break;
        case 5:
            precioFinal = cantidad * 150;
            break;
        case 6:
            precioFinal = cantidad * 50;
            break;
        case 7:
            precioFinal = cantidad * 130;
            break;
        case 8:
            precioFinal = cantidad * 160;
            break;
        default:
            alert("Opción inválida. Por favor, ingrese un número válido.");
            return;
    }

    const productoElegido = {
        nombre: "",
        precio: precioFinal,
        cantidad: cantidad
    };
    
    switch (producto) {
        case 1:
            productoElegido.nombre = "Camiseta titular de Boca Juniors 23/24";
            break;
        case 2:
            productoElegido.nombre = "Camiseta titular de Boca Juniors 21/22";
            break;
        case 3:
            productoElegido.nombre = "Campera de Boca azul y amariilo";
            break;
        case 4:
            productoElegido.nombre = "Campera de Boca azul y celeste";
            break;
        case 5:
            productoElegido.nombre = "Buzo medio cierre de Boca";
            break;
        case 6:
            productoElegido.nombre = "Short de Boca azul";
            break;
        case 7:
            productoElegido.nombre = "Pelota de Boca Juniors";
            break;
        case 8:
            productoElegido.nombre = "Zapatillas Adidas de Boca Juniors";
            break;
        default:
            productoElegido.nombre = "Producto no especificado";
            break;
    }

    carrito.push(productoElegido);
    alert("Producto agregado al carrito: \n" + " " + productoElegido.nombre + " \n Cantidad: " + productoElegido.cantidad + "\n Total a pagar: $" + productoElegido.precio);
}

function verCarrito() {
    let preciosTotales = {};
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        if (preciosTotales[producto.nombre]) {
            preciosTotales[producto.nombre] += producto.precio;
        } else {
            preciosTotales[producto.nombre] = producto.precio;
        }
    }
    let total = 0;
    let mensaje = "Productos en el carrito:\n";
    for (let nombre in preciosTotales) {
        let precioTotal = preciosTotales[nombre];
        mensaje += nombre + ": $ " + precioTotal + "\n";
        total += precioTotal;
    }
    mensaje += "\nPrecio total: $ " + total;
    alert(mensaje);
}

function pagar() {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
    } else {
        alert("Pago exitoso.\n Muchas gracias por su compra.");
        carrito.length = 0; 
        return;
    }
}

function ingresarParaComprar() {
    let opcion = parseInt(prompt("Elegir una opcion para comenzar:\n1- Comprar Producto\n2- Ver Carrito\n3- Pagar\n4- Salir"));

    while (opcion !== 4) {
        switch (opcion) {
            case 1:
                sumarProductos();
                opcion = parseInt(prompt("Elegir una opcion para comenzar:\n1- Comprar Producto\n2- Ver Carrito\n3- Pagar\n4- Salir"));
                break;
            
            case 2:
                verCarrito();
                opcion = parseInt(prompt("Elegir una opcion para comenzar:\n1- Comprar Producto\n2- Ver Carrito\n3- Pagar\n4- Salir"));
                break;
            case 3:
                pagar();
                opcion = parseInt(prompt("Elegir una opcion para comenzar:\n1- Comprar Producto\n2- Ver Carrito\n3- Pagar\n4- Salir"));
                break;
            default:
                alert("Opción inválida. Por favor, ingrese un número válido.");
                opcion = parseInt(prompt("Elegir una opcion para comenzar:\n1- Comprar Producto\n2- Ver Carrito\n3- Pagar\n4- Salir"));
                break;
        }
    }
}