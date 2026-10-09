# HTTP
- Protocolo de Transferencia de Hiper Texto
- Comunicación entre dispositivos que comprendan este protocolo.
- En el frontend, quien comprende el protocolo es el navegador
- En el backend, el servidor mismo estará ESCUCHANDO las PETICIONES que lleguen
- A toda petición debe haber una respuesta. Incluso si no hay una respuesta del servidor, habrá una respuesta que diga que no hubo respuesta.
- Partes:
- - URL
- - Método (GET, POST, PUT, DELETE, etc).
- - Body (cuerpo)
- - Encabezados (metadata, info extra)

- - status code
- - body de la respuesta
- - encabezados de respuesta


# ¿Qué hace el servidor?
El servidor va a definir las urls que posee, los métodos que recibe en cada url, qué body recive, que encabezados necesita, etc. 