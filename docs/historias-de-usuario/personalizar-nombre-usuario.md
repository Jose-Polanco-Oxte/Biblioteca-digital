# Personalizar nombre de usuario

## **_Descripción:_**

Como nuevo usuario, quiero personalizar mi perfil con mi nombre, para que la aplicación se sienta como un espacio propio y personal.

## **_Hipótesis de valor:_**

Creemos que con esta funcionalidad lograremos que el usuario no abandone la colección en los primeros 10 días.

## **_Requerimientos no funcionales:_**

-   El usuario no debe realizar más de tres pasos para agregar o cambiar su nombre.
-   El sistema debe permitir caracteres globales para soportar nombres de distintos países y localidades.
-   El sistema permite cambiar el nombre sin conexión y actualizarse cuando esta se reestablezca.

## **_Criterio de aceptación:_**

### **Caso de éxito:**

#### _Ver nombre por defecto:_

Dado que soy un usuario nuevo, cuando visito mi perfil por primera vez, entonces mi nombre se muestra como “usuario”.

#### _Agregar un nombre por primera vez:_

Dado que mi nombre actual es “usuario”, cuando ingreso un nombre válido (ej. “Carlos”) y guardo los cambios, entonces el perfil se actualiza y muestra “Carlos”.

#### _Actualizar un nombre existente:_

Dado que mi nombre actual es “Carlos”, cuando ingreso un nuevo nombre válido y guardo los cambios, entonces el perfil se actualiza y muestra el nuevo nombre.

### **Casos de error:**

#### _Ingresar un nombre inválido (caracteres especiales o números):_

Dado que estoy editando mi perfil, cuando ingreso un dato inválido en el campo de nombre (ej. “Lector123”) y guardo, entonces el cambio no se guarda y aparece un mensaje de error explicando por qué el nombre es incorrecto.

#### _Ingresar un nombre vacío:_

Dado que estoy editando mi perfil, cuando borro mi nombre lo dejo vacío e intento guardar, entonces la operación se considera una entrada inválida y se muestra un mensaje de error.

### **Casos especiales:**

#### _Ingresar el mismo nombre:_

Dado que mi nombre actual es “Carlos”, cuando ingreso “Carlos” de nuevo y guardo, entonces el sistema acepta la operación sin realizar cambios y no muestra ningún error.

## **_Valor de comercial para el usuario:_**

Permite al usuario tener una sensación completa sobre lo que es una colección personal de libros y a nosotros como empresa nos hace más cercanos al usuario.

## **_Costo de retraso:_**

Esta funcionalidad no afecta a las otras historias, pero sí podría causar el abandono de la app y un golpe en la usabilidad.

## **_Tiempo crítico:_**

Es una de las funcionalidades requeridas por lo que se espera una fecha límite de 3 días desde que se ejecuten las tareas de desarrollo.

## **_Notas:_**

Ninguna
