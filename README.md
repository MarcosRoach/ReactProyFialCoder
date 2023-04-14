# **Proyecto _Tienda Online_**

Proyecto de tienda online realizado con React, la tienda cuenta con 4 paginas(home - shop - contact - Cart).
Los Productos que se utilizan, son de la api de fakeappi, estos se cargarron a firebase para usarlos en el proyecto.

---

> Todas las páginas contienen un nav con un icono de carrito que te dirige a la página "carrito" con un indicador de cuantos artículos hay en el mismo.

### **LAS PÁGINAS QUE DISPONE SON:**

1.  Home
    Presentacion de la Tienda

2.  Shop

    - Se cargan todos los artículos desde firebase.
    - ya con los articulos cargados se presentan en la pantalla.
    - posee un menu lateral con las categorias de los articulos existentes, que se usa para filtar los mismo en caso de requerirlo.
    - al hacer click sobre un producto, nos lleva a la descripcion individual del mismo en donde se puede agregar al carrito la cantidad deceada.

3.  Carrito

    - Tiene un listado de todos los artículos agregados al carrito presentados en forma de tarjetas,
      En Cada tarjeta de producto se puede

              - Sumar:
                - Incrementa en 1 la cantidad.
              - Restar:
                - Decrementa en 1 la cantidad.
              - Eliminar :
                - Elimina el producto del carrito

    - Tiene un botón para LIMPIAR el carrito, que elimina todos los priductos del mismo

    - Tiene un botón finalizar compra que simula la compra.
      - al finalizar la compra, se le pide al usuario que ingrese
        - Nombbre
        - Apellido
        - Email
        - Telefono
        - Direccion
      - una vez ingresado esos datos al confirmar, se crea en firebase una orden, con los datos del usuario y los items del carrito.
      - una vez cargada la orden se limpia el carrito.

4.  Contact:
    Datos de contacto con la tienda
