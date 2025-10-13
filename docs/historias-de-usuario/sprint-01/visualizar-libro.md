# Visualizar colección de libros

## **_Descripción:_**

Como usuario quiero ver mis libros, para poder administrar mi lectura y mis libros.

## **_Hipótesis de valor:_**

Creemos que con esta funcionalidad cumplimos con el principal objetivo del usuario que es poder administrar su biblioteca de una manera visual y sencilla. Esperamos que el usuario pueda visualizar al menos 5 libros.

## **_Requerimientos no funcionales:_**

-   El usuario puede visualizar correctamente la colección independientemente de su dispositivo.
-   El tamaño de los libros debe ser lo suficientemente grande como para poder reconocerlos por su portada.
-   El sistema debe permitir ajustar el diseño de una manera accesible para cualquier persona.
-   El sistema permite visualizar al menos 5 libros de manera local y actualizarse cuando se reestablezca la conexión.

## **_Criterio de aceptación:_**

### **Caso de éxito:**

#### _Iniciar la aplicación:_

Dado que estoy en el inicio, cuando entro a la aplicación, entonces visualizo correctamente todos mis libros agregados hasta el momento.

#### _Iniciar la aplicación por primera vez:_

Dado que estoy en el inicio, cuando sea la primera vez que accedo, entonces debo ver un cartel que diga “No hay libros disponibles aún”.

### **Casos especiales:**

#### _Eliminar todos los libros de la colección:_

Dado que estoy en el inicio, cuando elimino el último libro, entonces debo ver un cartel que diga “No hay libros disponibles aún”.

#### _Visualizar un libro sin portada:_

Dado que estoy en el inicio, cuando tenga un libro sin portada, entonces visualizo una portada con un logo genérico que indica que no hay portada.

## **_Valor de comercial para el usuario:_**

Permite al usuario administrar sus libros de manera rápida, sencilla y gráfica, además permite realizar todo esto de manera offline lo cuál agrega un valor gigantesco en cuanto a usabilidad.

## **_Costo de retraso:_**

Esta funcionalidad afecta realmente la entrega ya que es una de las historias con mayor prioridad en cuanto a requisitos mínimos del sistema.

## **_Tiempo crítico:_**

Es una de las funcionalidades requeridas, pero es una implementación relativamente sencilla, por lo que, se estiman 2 días para su finalización.

## **_Notas:_**

Usar tecnologías offline para asegurar al máximo la usabilidad.
