# FSJ24a - Guía de Programación Orientada a Objetos con TypeScript

Este proyecto tiene como objetivo evaluar el conocimiento en programación orientada a objetos utilizando TypeScript. A través de este proyecto, se aplican los pilares de la programación orientada a objetos mediante la implementación de diferentes ejercicios.

## Ejercicios Implementados

1. **Ejercicio 1: Cabecera Página** - Creación de una clase `cabecera-pagina` con métodos para gestionar el título, color, fuente y alineación de una cabecera de página.
2. **Ejercicio 2: Calculadora** - Creación de una clase `calculadora` con métodos para realizar operaciones matemáticas básicas: suma, resta, multiplicación, división, potencia y factorial.
3. **Ejercicio 3: Canción** - Creación de una clase `cancion` que gestiona los atributos de una canción (título, género, autor) utilizando métodos `get` y `set`.
4. **Ejercicio 4: Cuenta** - Creación de una clase `cuenta` con métodos para depositar, retirar y mostrar la información de la cuenta bancaria.
5. **Ejercicio 5: Empleado** - Creación de una clase abstracta `persona` y una clase derivada `empleado` que hereda de `persona`, con métodos adicionales para gestionar el sueldo y mostrar la información del empleado.

## Tecnologías Utilizadas

- **Vite**: Herramienta de desarrollo rápida para proyectos web.
- **TypeScript**: Lenguaje de programación que extiende JavaScript con tipos estáticos.
- **HTML/CSS**: Para el diseño básico y la estructura de la página web.

## Requisitos

Asegúrate de tener instalado lo siguiente antes de ejecutar el proyecto:

- **Node.js** (versión 14 o superior)
- **npm** (Gestor de paquetes de Node.js)

## Configuración del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador web en la dirección proporcionada por Vite (normalmente `http://localhost:3000`).

## Estructura del Proyecto

```plaintext
my-ts-project/
├── index.html
├── package.json
├── src/
│   ├── classes/
│   │   ├── cabecera-pagina.ts
│   │   ├── calculadora.ts
│   │   ├── cancion.ts
│   │   ├── cuenta.ts
│   │   └── empleado.ts
│   └── main.ts
├── style.css
└── vite.config.ts
```

## Cómo Probar los Ejercicios

Una vez que el servidor de desarrollo esté en ejecución, verás una página con diferentes secciones para cada ejercicio. Cada sección contiene un botón para probar la funcionalidad correspondiente:

- **Ejercicio 1: Cabecera Página** - Haz clic en "Probar Ejercicio 1" para ver los resultados.
- **Ejercicio 2: Calculadora** - Haz clic en "Probar Ejercicio 2" para ver los resultados de las operaciones matemáticas.
- **Ejercicio 3: Canción** - Haz clic en "Probar Ejercicio 3" para ver los datos de la canción.
- **Ejercicio 4: Cuenta** - Haz clic en "Probar Ejercicio 4" para ver las operaciones de depósito y retiro.
- **Ejercicio 5: Empleado** - Haz clic en "Probar Ejercicio 5" para ver los datos del empleado y su sueldo.
