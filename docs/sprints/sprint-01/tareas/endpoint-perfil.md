# Crear endpoint para añadir el nombre de usuario y validaciones en el endpoint

Desarrollar los endpoints necesarios en el backend (Node.js/TS) para que el usuario pueda obtener y actualizar su nombre de perfil. Esta tarea incluye la creación de dos endpoints y la lógica de validación del nombre, siguiendo la arquitectura de 3 capas.

## Especificación de implementación

### 1. **Diseño de la API**:
   - Definición de los endpoints:
	 - `GET /api/profile`: Obtener el perfil del usuario.
	 - `PUT /api/profile`: Actualizar el nombre del usuario.
	 - `DELETE /api/profile`: Restaurar el nombre de usuario por defecto ("User").

### 2. **Implementación del Endpoint GET /api/profile**:
   - Creación del controlador para manejar la solicitud GET.
   - Recuperación del nombre de usuario desde el almacenamiento (archivo txt).
   - Validación de la existencia del archivo y manejo de errores.
   - Respuesta con el nombre de usuario actual.

### 3. **Implementación del Endpoint PUT /api/profile**:
   - Creación del controlador para manejar la solicitud PUT.
   - Validación del nombre de usuario:
	 - No vacío.
	 - Longitud entre 1 y 50 caracteres.
	 - No incluir numeros ni caracteres especiales.
	 - Solo caracteres válidos para nombres y espacios.
   - Actualización del nombre de usuario en el almacenamiento (archivo txt).
   - Manejo de errores y respuestas adecuadas.

### 4. **Implementación del Endpoint DELETE /api/profile**:
   - Creación del controlador para manejar la solicitud DELETE.
   - Restauración del nombre de usuario por defecto ("User") en el almacenamiento (archivo txt).
   - Manejo de errores y respuestas adecuadas.

### 5. **Manejo de errores**:
   - Implementación de manejo de errores para casos como:
	 - Archivo no encontrado.
	 - Errores de lectura/escritura.
	 - Validaciones fallidas.
   - Respuestas adecuadas con códigos de estado HTTP.
   - Creación de middleware para manejo de errores globales.
   - Registro de errores para facilitar la depuración.

### 6. **Pruebas**:
   - Desarrollo de pruebas unitarias para cada endpoint utilizando jest.
   - Pruebas de integración para asegurar el correcto funcionamiento de los endpoints.
   - Validación de casos de éxito y manejo de errores.
   - Verificcación de los criterios de aceptación.

## Criterios de aceptación
- [x] El endpoint `GET /api/profile` devuelve el nombre de usuario actual correctamente.
- [x] El endpoint `PUT /api/profile` actualiza el nombre de usuario correctamente.
- [x] Si el archivo de perfil no existe, todos los endpoints devuelven el nombre por defecto "User".
- [x] El endpoint `PUT /api/profile` acepta el mismo nombre que el actual sin errores.
- [x] Un nombre vacío en el endpoint `PUT /api/profile` devuelve un error de validación.
- [x] Un nombre con más de 50 caracteres en el endpoint `PUT /api/profile` devuelve un error de validación.
- [x] Un nombre con caracteres especiales o números en el endpoint `PUT /api/profile` devuelve un error de validación.
- [x] Un nombre válido en el endpoint `PUT /api/profile` se guarda correctamente.
- [x] El endpoint `DELETE /api/profile` restaura el nombre de usuario por defecto correctamente.
- [x] La validación soporta multiples idiomas.