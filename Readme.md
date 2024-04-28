**Registro de Jugador**

| **Actor Principal** | Jugador |
|---------------------|---------|
| **Disparador del Caso** | Jugador desea registrarse en el sistema |
| **Flujo de Ejecución paso 1** | El jugador accede a la opción de registro en el sistema. |
| **Flujo de Ejecución paso 2** | El sistema muestra el formulario de registro. |
| **Flujo de Ejecución paso 3** | El jugador completa el formulario con sus datos. |
| **Flujo de Ejecución paso 4** | El sistema valida la información ingresada. |
| **Flujo de Ejecución paso 5** | Si la validación es exitosa, el sistema registra al jugador en la base de datos. |

**Administrar Usuarios**

| **Actor Principal** | Administrador |
|---------------------|--------------|
| **Disparador del Caso** | Administrador necesita gestionar usuarios en el sistema |
| **Flujo de Ejecución paso 1** | El administrador accede a la sección de administración de usuarios. |
| **Flujo de Ejecución paso 2** | El sistema muestra una lista de usuarios registrados. |
| **Flujo de Ejecución paso 3** | El administrador selecciona una opción de gestión (editar, eliminar, bloquear, etc.). |
| **Flujo de Ejecución paso 4** | El sistema muestra las opciones correspondientes para la acción seleccionada. |
| **Flujo de Ejecución paso 5** | El administrador completa la acción requerida. |

**Administrar Partidas**

| **Actor Principal** | Jugador |
|---------------------|---------|
| **Disparador del Caso** | Jugador desea gestionar partidas en el sistema |
| **Flujo de Ejecución paso 1** | El jugador accede a la sección de administración de partidas. |
| **Flujo de Ejecución paso 2** | El sistema muestra una lista de partidas disponibles. |
| **Flujo de Ejecución paso 3** | El jugador selecciona una partida para gestionar. |
| **Flujo de Ejecución paso 4** | El sistema muestra opciones de gestión para la partida seleccionada (reproducir, guardar, eliminar, etc.). |
| **Flujo de Ejecución paso 5** | El jugador completa la acción requerida. |

**Conexión con Base de Datos (API)**

| **Actor Principal** | Sistema |
|---------------------|---------|
| **Disparador del Caso** | Sistema necesita acceder a la base de datos |
| **Flujo de Ejecución paso 1** | El sistema envía una solicitud a la API de la base de datos. |
| **Flujo de Ejecución paso 2** | La API verifica la solicitud y la autenticación del sistema. |
| **Flujo de Ejecución paso 3** | La API procesa la solicitud y accede a los datos requeridos en la base de datos. |
| **Flujo de Ejecución paso 4** | La API devuelve los datos solicitados al sistema. |
| **Flujo de Ejecución paso 5** | El sistema utiliza los datos recibidos según sus necesidades. |

**Conexión con Unity (API)**

| **Actor Principal** | Unity |
|---------------------|-------|
| **Disparador del Caso** | Unity necesita acceder a funcionalidades externas a través de una API |
| **Flujo de Ejecución paso 1** | Unity envía una solicitud a la API externa. |
| **Flujo de Ejecución paso 2** | La API verifica la solicitud y la autenticación de Unity. |
| **Flujo de Ejecución paso 3** | La API procesa la solicitud y ejecuta la funcionalidad correspondiente. |
| **Flujo de Ejecución paso 4** | La API devuelve la respuesta al sistema de Unity. |
| **Flujo de Ejecución paso 5** | Unity utiliza la respuesta recibida según sus necesidades (por ejemplo, actualización de objetos en el juego). |
