# Análisis Inicial de Requerimientos: Biblioteca Digital

Objetivo del documento: Realizar un primer análisis de los requerimientos comunicados por el cliente para identificar conceptos clave, detectar y formalizar ambigüedades, clasificar requerimientos y esbozar las primeras consideraciones técnicas y de negocio. Este documento servirá como base para la siguiente fase de especificación detallada.

**Cliente:** Stakeholder **Fecha de Análisis:** 16/09/2025 **Versión:** 1.0

---

## 1. Palabras Clave del Cliente

En este caso solo tenemos lo siguiente:

> "Hola, Tony. Necesito una pequeña página web personal, algo muy visual y limpio. Me gustaría tener un lugar donde pueda añadir los libros que voy leyendo. Cuando añado un libro, quiero poder poner su título, el autor y quizás una imagen de la portada. Lo más importante es que pueda marcar si **ya lo leí** o si está **pendiente** en mi lista de deseos. Ah, y sería genial poder darle una **calificación con estrellas**, de 1 a 5, a los que ya terminé. No necesito usuarios ni nada complejo, es solo para mí."

_En esta sección se transcribe un listado de términos, frases y conceptos clave mencionados directamente por el cliente durante las conversaciones. El objetivo es capturar el lenguaje del cliente ("customer's voice") sin interpretaciones iniciales._

-   Web personal
-   Visual y limpio
-   Añadir libros
-   Guardar estatus de lectura
-   Debe poder ponerle título, autor e imagen de portada.
-   Lista de deseos
-   Calificación de libros (1 a 5 estrellas) solo si ya los terminó

---

## 2. Desglose de Conceptos y Detección de Ambigüedades

_Aquí se toma cada concepto clave o requerimiento macro y se describe lo que se ha entendido. Inmediatamente después, se listan las posibles ambigüedades, inconsistencias o la falta de información._

### Concepto AAA: web personal

> El sistema debe ser creado a medida para el cliente.

-   **Posibles Ambigüedades:**
    -   ¿Podrá haber más de un perfil en la misma sesión?
    -   ¿Debería ser web o es mejor un programa?
    -   ¿Debería guardar datos del usuario (cliente)?

### Concepto BAA: visual y limpio

> El sistema debe ofrecer una interfaz agradable a la vista, fácil de encontrar libros y agregar nuevos. También algo más de información para poder hacer más sencilla la administración de estos.

-   **Posibles Ambigüedades:**
    -   ¿Limpio implica que no esté cargado de metadatos o descripciones?
    -   ¿Deberá poder leer el libro desde la web?

### **Concepto CAA: Añadir libros**

> Descripción inicial: El sistema debe tener una función para que el usuario ingrese nuevos libros a su colección personal.

-   **Posibles Ambigüedades:**
    -   **¿Cómo es el flujo para añadir un libro?** ¿Es un formulario manual o se podría automatizar la búsqueda de datos (autor, portada) a través de un servicio externo para facilitar el proceso? (Impacto en UX y esfuerzo técnico).
    -   ¿Hay un límite en la cantidad de libros que se pueden añadir?

### **Concepto DAA: Guardar estatus de lectura**

> Descripción inicial: El sistema debe permitir al usuario marcar el estado de un libro, específicamente si ya fue "leído" o si está "pendiente" en su lista de deseos.

-   **Posibles Ambigüedades:**
    -   ¿Son estos los únicos dos estados? ¿Sería útil un tercer estado como "Leyendo actualmente"?
    -   ¿Se puede cambiar el estado de un libro libremente (ej: de "Leído" a "Leyendo" otra vez)?

### Concepto FAA: Debe poder ponerle título, autor e imagen de portada.

> El sistema ofrece la posibilidad de asignar título, autor e imagen de portada a el registro del libro.

### Concepto GAA: Lista de deseos.

> El sistema debe tener un apartado para agregar libros deseados y tener un registro de que comprar a futuro.

-   **Posibles Ambigüedades:**
    -   ¿Los libros deben tener solo título y autor, o también portada como los libros de la colección principal?

### Concepto HAA: Calificación de libros

> El sistema permite a el usuario calificar sus lecturas de 1 a 5 estrellas, solo si se ha marcado como completada.

---

## 3. Formalización de Ambigüedades (Preguntas para el Cliente)

_Esta sección convierte las ambigüedades detectadas en preguntas claras y directas para la siguiente reunión con el cliente. El objetivo es resolver estas dudas para poder especificar los requerimientos sin suposiciones._

| ID                                        | Ambigüedad / Pregunta Directa                                                                                                                                                         | Concepto Relacionado           | Prioridad | Respuesta / Decisión del Cliente                                                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| AAA-01                                    | ¿Podrá haber más de un perfil en la misma sesión?                                                                                                                                     | Gestión de Perfiles de Usuario | Baja      | No desea manejo de perfiles.                                                                                                        |
| AAA-02                                    | ¿Por qué es necesaria una web si es personal?                                                                                                                                         | Plataforma de uso              | Alta      | “Podría convertirse en una idea más madura, pero quiero explorar como sería la funcionalidad y si me ayuda realmente a mi lectura.” |
| AAA-03                                    | ¿Debería solicitar datos del usuario?                                                                                                                                                 | Registro                       | Baja      | Indica que le parece correcto que se registre únicamente el nombre.                                                                 |
| BAA-01                                    | ¿Limpio implica que no esté cargado de metadatos o descripciones?                                                                                                                     | Diseño                         | Alta      | Propone una interfaz con solo los datos esenciales de un libro.                                                                     |
| BAA-02                                    | ¿Te imaginas usando una app nativa o prefieres que la misma página web se adapte perfectamente a la pantalla de tu móvil (diseño responsivo)?                                         | Diseño                         | Media     | Desea poder usarlo perfectamente en su celular.                                                                                     |
| CAA-01                                    | ¿Es un formulario manual o se podría automatizar la búsqueda de datos (autor, portada) a través de un servicio externo para facilitar el proceso? (Impacto en UX y esfuerzo técnico). | Usabilidad de la aplicación    | Alta      | Quiere solo un formulario de momento.                                                                                               |
| CAA-02                                    | ¿Hay un límite en la cantidad de libros que se pueden añadir?                                                                                                                         | Limitaciones                   | Media     | El cliente es el único usuario y por eso indica que no quiere un límite.                                                            |
| DAA-01                                    | ¿Son estos los únicos dos estados? ¿Sería útil un tercer estado como "Leyendo actualmente"?                                                                                           | Usabilidad de la aplicación.   | Alta      | Decide el agregar un estado.<br>Si me gustaría tener un estado “leyendo”.                                                          |
| DAA-02                                    | ¿Se puede cambiar el estado de un libro libremente (ej: de "Leído" a "Leyendo" otra vez)?                                                                                             | Robustez de la aplicación.     | Alta      | Indica que le gustaría poder cubrir el caso de relectura.                                                                           |
| GAA-01                                    | ¿Los libros deben tener solo título y autor, o también portada como los libros de la colección principal?                                                                             | Registro                       | Alta      | Menciona querer que solicite únicamente el título y autor.                                                                          |

---

## 4. Deliberación Inicial de Requerimientos

_Basado en la información (aún con ambigüedades), se realiza una primera clasificación de requerimientos funcionales y no funcionales._

### 4.1. Requerimientos Funcionales (RF) - ¿Qué debe hacer el sistema?

| ID         | Descripción del Requerimiento                                                                                                                                            | Prioridad (MoSCoW)                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| **RF-001** | El sistema debe permitir al usuario introducir su nombre de manera opcional.                                                                                             | <span style="color: gold;">Must Have</span>    |
| **RF-003** | El sistema debe permitir al usuario añadir un nuevo libro a su colección principal a través de un formulario manual que solicite: **título, autor e imagen de portada**. | <span style="color: gold;">Must Have</span>    |
| **RF-004** | El sistema debe permitir al usuario visualizar su colección principal de libros, mostrando la portada, título y autor de cada uno.                                       | <span style="color: gold;">Must Have</span>    |
| **RF-005** | El sistema debe permitir al usuario añadir un libro a su "Lista de deseos" solicitando únicamente **título y autor**.                                                    | <span style="color: gold;">Must Have</span>    |
| **RF-006** | El sistema debe permitir al usuario cambiar el estado de un libro en su colección principal entre los estados: **"Leyendo"** y **"Leído"**.                              | <span style="color: gold;">Must Have</span>    |
| **RF-007** | El sistema debe permitir al usuario cambiar libremente el estado de un libro para soportar la relectura (ej. de "Leído" a "Leyendo").                                    | <span style="color: gold;">Must Have</span>    |
| **RF-008** | El sistema debe permitir al usuario asignar una calificación de **1 a 5 estrellas** únicamente a los libros que estén marcados con el estado "Leído".                    | <span style="color: green;">Should Have</span> |
| **RF-009** | El sistema debe permitir al usuario buscar por nombre sus libros agregados.                                                                                              | <span style="color: purple;">Could Have</span> |

_Nota: **MoSCoW** = <span style="color:gold;">**M**ust</span> (Debe tener), <span style="color:green;">**S**hould</span> (Debería tener), <span style="color:purple;">**C**ould</span> (Podría tener), <span style="color:red;">**W**on't</span> (No tendrá por ahora)._

### 4.2. Requerimientos No Funcionales (RNF) - ¿Cómo debe hacerlo el sistema?

| ID          | Categoría       | Descripción del Requerimiento                                                                                                        | Métrica de Aceptación                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **RNF-001** | **Usabilidad**  | La interfaz de usuario debe ser minimalista ("limpia"), mostrando solo los datos esenciales de cada libro para facilitar la gestión. | Un usuario nuevo debe poder añadir un libro y cambiar su estado en **menos de 4 clics** tras iniciar sesión.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **RNF-002** | Portabilidad    | El sistema web debe visualmente adaptable a pantallas de dispositivos móviles (diseño responsivo).                                   | Todas las funcionalidades deben ser operables sin necesidad de zoom horizontal en las resoluciones de los 3 navegadores móviles más usados (Chrome, Safari en sus últimas versiones).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **RNF-003** | **Performance** | La carga de la vista de la colección principal de libros debe ser rápida para no afectar la experiencia del usuario.                 | La biblioteca principal debe renderizarse en **menos de 2 segundos** con una base de datos de prueba que contenga 200 libros.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **RNF-005** | **Capacidad**   | El sistema no debe tener un límite predefinido en la cantidad de libros que un usuario puede registrar.                              | El sistema debe mantener su performance (según <span style="color: lightblue;">RNF-003</span>) y funcionalidad con más de **100 libros** registrados por un solo usuario.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **RNF-006** |                 | El sistema debe tener un control eficiente de las portadas de libros.                                                                | 1. **Optimización de Peso:** Cualquier imagen de portada procesada por el sistema, en su versión de tamaño medio (~480px de ancho), no debe superar los **80 KB**. <br><br> 2. **Generación de Versiones:** Al subir una nueva portada, el sistema debe generar y almacenar automáticamente al menos **3 versiones** en formato WebP (ej: `thumbnail`, `medium`, `large`). <br><br> 3. **Rendimiento de Carga:** En la vista de biblioteca, el LCP (Largest Contentful Paint), que corresponderá a una imagen de portada, debe ser inferior a **2.5 segundos**, cumpliendo con los Core Web Vitals.                                                                                                                       |
| **RNF-007** |                 | El sistema debe limitar el formato de las portadas para no permitir la carga de archivos maliciosos.                                 | 1. **Validación de Contenido Real:** El sistema debe rechazar la carga de cualquier archivo cuyos **"magic numbers"** (bytes de cabecera) no correspondan a un formato de imagen válido (JPEG, PNG, GIF). Una prueba subiendo un archivo `.php` renombrado a `.jpg` debe ser bloqueada. <br><br> 2. **Sanitización por Re-codificación:** El hash del archivo final servido a los clientes debe ser **diferente** al hash del archivo original subido por el usuario, demostrando que la imagen fue procesada y re-codificada, eliminando así posibles payloads maliciosos. <br><br> 3. **Eliminación de Metadatos:** La imagen de portada final, al ser descargada e inspeccionada, **no debe contener metadatos EXIF**. |

---

## 5. Determinación Preliminar de Detalles Técnicos

_Esta es una sección para notas iniciales del equipo de desarrollo, basadas en la primera interpretación. No son decisiones finales, sino puntos de partida para la fase de diseño técnico._

### Consideraciones Técnicas Iniciales

-   **Stack tecnológico potencial: Frontend con Vanilla CSR (TypeScript), Backend con Node.js, Base de datos con PostgreSQL**
-   **Arquitectura:** Monolítica con capas de tres niveles.
-   **Integraciones con sistemas externos:** Integración con la API expuesta del backend.
-   **Manejo de datos: Base de datos relacional.**
-   **Desafíos técnicos identificados:** El levantar el servidor y que todo funcione correctamente ya que no había hecho esto antes, además nunca he usado node.js.
