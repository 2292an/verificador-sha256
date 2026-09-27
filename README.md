# Verificador de Integridad de Archivos con SHA-256

Aplicación web desarrollada para verificar la integridad de archivos mediante el algoritmo criptográfico SHA-256.

La solución permite seleccionar un archivo desde el equipo del usuario, calcular su hash SHA-256 y mostrar el valor completo en formato hexadecimal.

Posteriormente, el hash obtenido puede compararse de dos formas:

1. Contra un hash de referencia ingresado manualmente.
2. Contra el hash calculado de un segundo archivo.

A partir de esta comparación, la aplicación muestra de forma clara si:

- La integridad fue verificada.
- El archivo fue modificado.

Además, la aplicación permite consultar el hash calculado en VirusTotal mediante un enlace dinámico.

---

## Objetivo

El objetivo de esta aplicación es comprobar si un archivo conserva exactamente su contenido original después de haber sido almacenado, copiado, transmitido o modificado.

La verificación se realiza mediante SHA-256. Si el contenido del archivo cambia, aunque sea en un solo carácter o byte, el hash calculado también cambia.

## Instrucciones de ejecución

clonar el proyecto

```
npm install
```

```
npm run dev
```

---

## Funcionalidades

La aplicación permite:

- Seleccionar un archivo desde el equipo.
- Calcular el hash SHA-256 del archivo.
- Mostrar el hash completo en formato hexadecimal.
- Copiar el hash al portapapeles.
- Comparar el hash contra un valor de referencia.
- Comparar directamente dos archivos.
- Mostrar si la integridad fue verificada.
- Advertir si el archivo fue modificado.
- Mostrar el nombre del archivo.
- Mostrar el tamaño del archivo.
- Mostrar la fecha de última modificación.
- Consultar el hash SHA-256 en VirusTotal.

---

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Web Crypto API
- HTML
- CSS

### React

Se utiliza para construir la interfaz mediante componentes reutilizables.

### TypeScript

Se utiliza para agregar tipado estático y mejorar la claridad, mantenibilidad y control de errores del código.

### Vite

Se utiliza como herramienta para crear, ejecutar y compilar el proyecto.

### Web Crypto API

Se utiliza para calcular el hash SHA-256 directamente en el navegador.

La operación principal se realiza mediante:

```ts
crypto.subtle.digest("SHA-256", arrayBuffer);
```
