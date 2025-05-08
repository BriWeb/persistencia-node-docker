Ejecutar el comando para crear el volumen

```bash
docker volume create mi-vol
```

Construir la imagen

```bash
docker build -t mi-node .
```

Correr el contenedor

```bash
docker run -p 3000:3000 -v mi-vol:/app mi-node
```

- Enviar a través del query param `?msg=` texto para guardar en el archivo `texto.txt`.
- Visitando el endpoint `/ver` se visualiza el contenido del archivo `texto.txt`.

- Probar creando otro contenedor y asignarle el mismo volumen, al visitar el endpoint `/ver` se visualizarán los cambios realizados en los otros contenedores.
