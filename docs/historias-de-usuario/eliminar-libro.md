# Eliminar libros

## **_Descripción:_**

Como usuario quiero poder eliminar mis libros, para no almacenar libros que ya no sean de mi interés.

## **_Hipótesis de valor:_**

Creemos que con esta funcionalidad el usuario tendrá una sensación de control total sobre sus gustos. Esperamos que el usuario elimine por lo menos un libro por año.

## **_Requerimientos no funcionales:_**

-   El usuario necesita a lo sumo 3 clicks para eliminar un libro.
-   El usuario necesita a lo sumo 4 clicks para eliminar múltiples libros.
-   El usuario debe ser advertido sobre lo que sucede al eliminar un libro.
-   El sistema debe permitir la eliminación de múltiples libros de una manera sencilla.
-   El sistema permite la eliminación de libros de manera local y actualizarse cuando se reestablezca la conexión.

## **_Criterio de aceptación:_**

### **Caso de éxito:**

#### _Eliminar un libro:_

Dado que el libro a eliminar es “Don quijote”, cuando presiono el botón de eliminar, entonces el sistema me pregunta si estoy seguro de eliminarlo; acepto y desaparece de la colección.

#### _Eliminar múltiples libros:_

Dado que quiero eliminar algunos libros, cuando selecciono los libros y presiono el botón de eliminar, entonces el sistema me pregunta si estoy seguro de eliminar los libros elegidos; acepto y desaparecen de la colección.

### **Casos especiales:**

#### _No seleccionar libros a eliminar:_

Dado que quiero eliminar algunos libros, cuando no selecciono libros, entonces el botón de eliminar está inactivo hasta que seleccione al menos un libro.

#### _Cancelar la eliminación al seleccionar múltiples libros:_

Dado que quiero eliminar algunos libros, cuando selecciono o no libros y presiono el botón cancelar, entonces no pasa nada y la colección sigue igual.

#### _No aceptar la advertencia:_

Dado que quiero eliminar algún o algunos libros, cuando el sistema me advierte si estoy seguro de eliminar o eliminarlos y no acepto, entonces no pasa nada y la colección sigue igual.

## **_Valor de comercial para el usuario:_**

Permite al usuario administrar sus libros sin conexión lo cual garantiza una gran usabilidad, además le da una sensación real de control total sobre su biblioteca.

## **_Costo de retraso:_**

Al ser una funcionalidad básica, afecta directamente en por lo menos la primera entrega.

## **_Tiempo crítico:_**

Es una funcionalidad requerida relativamente sencilla por lo que se estima una duración de un día.

## **_Notas:_**

Usar tecnologías para la interacción offline.
