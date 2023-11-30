
function calcularDescuento() {
    // Obtener el precio de la entrada, cantidad de entradas y tipo de descuento
    var precioEntrada = 200;
    var cantidadEntradas = parseInt(document.getElementById('cantidadEntradas').value);
    var tipoDescuento = parseFloat(document.getElementById('descuentoTipo').value);

    // Calcular el descuento usando switch y multiplicarlo por la cantidad de entradas
    var montoDescuento;
    switch (tipoDescuento) {
        case 10:
            montoDescuento = (precioEntrada * 10) / 100;
            break;
        case 15:
            montoDescuento = (precioEntrada * 15) / 100;
            break;
        case 20:
            montoDescuento = (precioEntrada * 20) / 100;
            break;
        default:
            montoDescuento = 0;
            break;
    }

    // Calcular el total con descuento multiplicado por la cantidad de entradas
    var totalConDescuento = (precioEntrada * cantidadEntradas) - (montoDescuento * cantidadEntradas);

    // Mostrar el total con descuento en la página
    document.getElementById('total').innerText = totalConDescuento.toFixed(2); 

}