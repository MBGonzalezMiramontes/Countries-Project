COUNTRIES | Proyecto Individual
📌 OBJETIVOS
Construir una Single Page Application utilizando las tecnologías: React, Redux, Node, Express, y Sequelize.
Implementar recursos básicos de estilos y diseño (UX: UI).
Aplicar y conectar los conceptos aprendidos en la carrera.
Aprender y seguir mejores prácticas de desarrollo.
Practicar el flujo de trabajo con GIT.
Implementar y practicar pruebas (testing).
⏱ HORARIOS Y FECHAS
El proyecto individual tiene una duración máxima de tres semanas. Comienza en la primera semana con una reunión de inicio, y se programará una revisión personalizada en la última semana.

Si completas todas las tareas antes de este plazo, puedes informar a tu instructor para coordinar una presentación del trabajo (DEMO).

⚠️ IMPORTANTE
Es necesario contar, al menos, con la última versión estable de NodeJS y NPM. Asegúrate de tenerlas instaladas correctamente para poder instalar las dependencias necesarias para ejecutar el proyecto. Actualmente, las versiones requeridas son:

Node: 12.18.3 o superior.
NPM: 6.14.16 o superior.
Puedes verificar las versiones instaladas con los siguientes comandos:

bash
Copy code
node -v
npm -v
Estás autorizado, bajo tu propia responsabilidad, a actualizar las dependencias a versiones más recientes si lo deseas. Ten en cuenta que versiones más recientes pueden tener configuraciones diferentes a las que hemos estado utilizando durante el bootcamp.

⛔️ Está estrictamente prohibido el uso de bibliotecas externas para aplicar estilos a la SPA. Debes utilizar CSS a través de alguna de las opciones enseñadas durante el bootcamp (CSS, Legacy, Inline Styling, CSS Modules o Styled Components).
📋 SOBRE LA API
En este proyecto, la API de Countries se ejecutará localmente en tu computadora. De esta manera, siempre tendrás acceso a los datos de forma local para trabajar en tu proyecto.

Para ejecutar esta API localmente desde tu computadora, debes abrir tu terminal, navegar hasta la carpeta server y ejecutar el siguiente comando:

bash
Copy code
npm start
Verás un mensaje similar al siguiente en tu terminal:

less
Copy code
[0] 
[0] > server@1.0.0 server
[0] > nodemon index.js
[0] 
[1] 
[1] > server@1.0.0 api
[1] > echo 'Local API listening on PORT 5000' & json-server --watch api/db.json -p 5000 -q
[1] 
[1] 'Local API listening on PORT 5000' 
[0] [nodemon] 2.0.22
[0] [nodemon] para reiniciar en cualquier momento, ingresa `rs`
[0] [nodemon] observando rutas: *.*
[0] [nodemon] observando extensiones: js, mjs, json
[0] [nodemon] iniciando `node index.js`
[0] Servidor escuchando en el puerto 3001
Esto significa que la API se está ejecutando en tu computadora en el puerto 5000. Puedes acceder a ella en la URL http://localhost:5000. Para comunicarte con esta API, debes mantener la terminal abierta.

IMPORTANTE: No debes realizar ninguna modificación en NINGÚN archivo dentro de la carpeta /server/api. Cualquier modificación en estos archivos puede alterar el funcionamiento normal de la API y de tu proyecto.

📋 PARA EMPEZAR...
Debes hacer un fork de este repositorio para tener una copia en tu cuenta personal de GitHub.

Clona el repositorio en tu computadora para comenzar a trabajar. Este repositorio contiene un BoilerPlate con la estructura general del proyecto, tanto para el servidor como para el cliente. El boilerplate consta de dos carpetas: api y client. En estas carpetas encontrarás el código para el back-end y el front-end, respectivamente.

En la carpeta api, debes crear un archivo llamado: .env con la siguiente estructura:

env
Copy code
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
Reemplaza usuariodepostgres y passwordDePostgres con tus propias credenciales para conectarte a PostgreSQL. Este archivo se ignorará al subirlo a GitHub, ya que contiene información sensible (las credenciales).

Además, deberás crear, a través de psql (shell o PGAdmin), una base de datos llamada countries. Si no realizas este paso manualmente, no podrás avanzar con el proyecto.

📖 ENUNCIADO GENERAL
La idea de este proyecto es construir una aplicación web basada en la API [countries] en la que se pueda:

Buscar países.
Visualizar la información de los países.
Filtrarlos.
Ordenarlos.
Crear actividades turísticas.
⚠️ Para las funcionalidades de filtrado y ordenamiento, **NO se pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados.

Único end-point que se puede utilizar
[http://localhost:5000/countries]
<div align="center">
📁 INSTRUCCIONES
</div>
🖱 BASE DE DATOS
Deberás crear dos modelos para tu base de datos: uno para los países y otro para las actividades turísticas (que pueden tener el nombre que desees). La relación entre estos modelos debe ser de muchos a muchos. A continuación, se detallan las propiedades que debe tener cada modelo. Aquellas marcadas con un asterisco son obligatorias.

📍 MODELO 1 | Country

ID (Código de tres letras). *
Nombre. *
Imagen de la bandera. *
Continente. *
Capital. *
Subregión.
Área.
Población. *
📍 MODELO 2 | Activity

ID. *
Nombre. *
Dificultad (número del 1 al
