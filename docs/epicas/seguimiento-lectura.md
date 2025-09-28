# Seguimiento del progreso de lectura

## Descripción

Esta épica se centra en permitir a los usuarios realizar un seguimiento de su progreso de lectura, facilitando la gestión de los libros que están leyendo, han leído o desean releer.

| Historias de usuario |                                                                                                                                | Criterio de aceptación                                                                                        |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| Finalizar lectura    | Como **_usuario_** Termino de leer un libro, entonces se refleja en la interfaz.                                               | Dado que termine un libro, cuando marque el libro como leído, entonces debe cambiar su estado a “leído”.      |
| Releer libro         | Como **_usuario_** Quiero volver a leer un libro, entonces presiono el botón de releer y vuelve a estar en su estado original. | Dado que visualice el libro, cuando esté en estado “leyendo”, entonces no debe mostrarse la opción de releer. |
