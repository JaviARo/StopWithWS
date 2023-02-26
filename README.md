# StopWithWS

Presentación: https://view.genial.ly/63d168dd064bc200193e102c/presentation-procesos-y-web-sockets

Vídeo demostrativo del funcionamiento de la aplicación: https://youtu.be/j9_rMXnb1ow

## Como ejecutar la aplicación
Debemos previamente tener instalado node.js y clonar nuestro código con

```
git clone https://github.com/JaviARo/StopWithWS/
```

Luego dentro de la carpeta de backend y frontend ejecutamos los siguientes comandos

```
npm install
cp .env.example .env
npm start
```

Y se ejecutará la aplicación.

## Descripción del programa

La aplicación se trata del juego del Stop desarrollado con WebSockets. Partiendo de la base del código presentado en el repositorio https://github.com/tcrurav/WebsocketsReactNodeJS realicé algunos cambios para poder almacenar una letra, sobre la que jugaran los usuarios, una colección de objetos que seran los elementos del stop y dos estados para saber cuando la letra se envía y cuando uno de los usuarios pulsa el Stop.

Al final del juego, solo he conseguido mostrar los datos del usuario que envía el Stop.

## Modificaciones y adiciones al código

En el backend generé dos casos en el switch para enviar la letra y el stop, además de las variables pertinentes y en el frontend las variables, las funciones que envían la petición al WebSocket, los setters y el contenido de la página mediante renderizado condicional.

