function precio_actualizado(){
    var precio = document.getElementById('precio').value;

    var total = precio * (1.21*1.30727573199763);
    var dos_decimales = total.toFixed(2);
    alert("El Precio actualizado es: " +dos_decimales);
}