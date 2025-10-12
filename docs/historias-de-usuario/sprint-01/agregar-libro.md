# Agregar nuevos libros

## **_Descripción:_**

Como usuario, quiero agregar nuevos libros con su título, autores y portada, para que pueda tener un registro de mis libros.

## **_Hipótesis de valor:_**

Creemos que con esta funcionalidad esperamos resolver el problema del cliente al querer tener una biblioteca digital lo cual implica que registre varios libros, la correcta implementación de esta funcionalidad logrará que haya al menos 15 libros.

## **_Requerimientos no funcionales:_**

-   El usuario necesita a lo sumo 2 clicks para agregar un libro.

-   El sistema debe permitir caracteres globales para soportar libros de diferentes idiomas.

-   El sistema debe permitir únicamente los formatos: jpg, jpeg, png y gif. Para la portada.

-   El sistema debe rechazar portadas de más de 80 Kb de peso.

-   El sistema debe reconocer falsos jpg, jpeg, png y gif.

-   El sistema permite agregar libros de manera local y actualizarse cuando se reestablezca la conexión.

## **_Criterio de aceptación:_**

### **Caso de éxito:**

#### _Agregar un libro nuevo:_

Dado que el libro a agregar es “Don quijote”, cuando ingreso un título válido (ej. “Don quijote”), un autor válido (ej. “José Rondan”), una portada válida (formato jpg y tamaño de 23Kb); entonces se guardan sus datos y ahora es parte de la colección.

#### _Agregar un libro existente:_

Dado que el libro a agregar es “Don quijote”, cuando ingreso un título válido y autor válido, entonces el sistema me indica que este libro ya existe en la colección.

### **Casos de error:**

#### _Ingresar un título vacío:_

Dado que estoy agregando un libro, cuando dejo el título vacío, entonces el sistema me indica que no puede estar vacío.

#### _Ingresar un nombre de autor inválido:_

Dado que estoy agregando un libro, cuando ingreso un título inválido, entonces entonces el sistema me indica que cambie el título por uno válido.

#### _Ingresar un nombre de autor vacío:_

Dado que estoy agregando un libro, cuando dejo vacío el nombre del autor, entonces el sistema me indica que no puede estar vacío.

#### _Ingresar una portada inválida:_

Dado que estoy agregando un libro, cuando el archivo no es un formato válido o sobrepasa el peso máximo, entonces el sistema indica que no puede aceptar la portada y que la cambie por una diferente.

### **Casos especiales:**

#### _Agregar un libro sin portada:_

Dado que estoy agregando un libro, cuando no agrego un archivo de portada, entonces se completa correctamente la acción sin ningún problema.

#### _Cancelar durante la agregación de un libro:_

Dado que estoy agregando un libro, cuando cancelo la operación, entonces se cierra el formulario.

## **_Valor de comercial para el usuario:_**

Permite al usuario agregar libros sin conexión lo cuál impacta positivamente en la usabilidad de la aplicación y además puede agregar características importantes para generar una sensación real de biblioteca personal.

## **_Costo de retraso:_**

Esta funcionalidad afecta directamente en otras historias al ser una de las historias con mayor prioridad en cuanto a requisitos mínimos del sistema.

## **_Tiempo crítico:_**

Es una de las funcionalidades requeridas, pero también no es una implementación sencilla por los criterios de aceptación por lo que se estiman 5 días de realización.

## **_Notas:_**

Usar tecnologías offline para asegurar al máximo la usabilidad.
