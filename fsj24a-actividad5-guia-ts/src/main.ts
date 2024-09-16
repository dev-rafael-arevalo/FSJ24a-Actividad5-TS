import './style.css';

// Importar las clases de los ejercicios
import { CabeceraPagina } from './classes/cabecera-pagina';
import { Calculadora } from './classes/calculadora';
import { Cancion } from './classes/cancion';
import { Cuenta } from './classes/cuenta';
import { Empleado } from './classes/empleado';

// Función para renderizar contenido dinámico
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>    
    <h1>Bootcamp FSJ24a - Guía POO con TS: Actividad 5</h1>   
    <!-- Separación de los ejercicios -->
    <div class="exercise" id="exercise1">
      <h2>Ejercicio 1: Cabecera Página</h2>
      <button id="testExercise1" type="button">Probar Ejercicio 1</button>
      <div id="outputExercise1"></div>
    </div>

    <div class="exercise" id="exercise2">
      <h2>Ejercicio 2: Calculadora</h2>
      <button id="testExercise2" type="button">Probar Ejercicio 2</button>
      <div id="outputExercise2"></div>
    </div>

    <div class="exercise" id="exercise3">
      <h2>Ejercicio 3: Canción</h2>
      <button id="testExercise3" type="button">Probar Ejercicio 3</button>
      <div id="outputExercise3"></div>
    </div>

    <div class="exercise" id="exercise4">
      <h2>Ejercicio 4: Cuenta</h2>
      <button id="testExercise4" type="button">Probar Ejercicio 4</button>
      <div id="outputExercise4"></div>
    </div>

    <div class="exercise" id="exercise5">
      <h2>Ejercicio 5: Empleado</h2>
      <button id="testExercise5" type="button">Probar Ejercicio 5</button>
      <div id="outputExercise5"></div>
    </div>
  </div>
`;

// Lógica para el Ejercicio 1
document.querySelector<HTMLButtonElement>('#testExercise1')!.addEventListener('click', () => {
  const miCabecera = new CabeceraPagina('Mi Página', 'Azul', 'Arial');
  miCabecera.setAlineacion('centrado');
  const output = miCabecera.getPropiedades();
  document.getElementById('outputExercise1')!.innerText = output;
});

// Lógica para el Ejercicio 2
document.querySelector<HTMLButtonElement>('#testExercise2')!.addEventListener('click', () => {
  const calculadora = new Calculadora();
  const resultados = `
    Suma: ${calculadora.sumar(5, 3)} \n
    Resta: ${calculadora.restar(5, 3)} \n
    Multiplicación: ${calculadora.multiplicar(5, 3)} \n
    División: ${calculadora.dividir(10, 2)} \n
    Potencia: ${calculadora.potencia(2, 3)} \n
    Factorial: ${calculadora.factorial(5)}
  `;
  document.getElementById('outputExercise2')!.innerText = resultados;
});

// Lógica para el Ejercicio 3
document.querySelector<HTMLButtonElement>('#testExercise3')!.addEventListener('click', () => {
  const cancion = new Cancion('Imagine', 'Rock');
  cancion.setAutor('John Lennon');
  const datosCancion = cancion.mostrarDatos();
  document.getElementById('outputExercise3')!.innerText = datosCancion;
});

// Lógica para el Ejercicio 4
document.querySelector<HTMLButtonElement>('#testExercise4')!.addEventListener('click', () => {
  const cuenta = new Cuenta('Juan Perez', 100, 'Ahorros', '123-456-789');
  const deposito = cuenta.depositar(20);
  const retiro = cuenta.retirar(10);
  const datosCuenta = cuenta.mostrarDatos();
  document.getElementById('outputExercise4')!.innerText = `${datosCuenta} \n${deposito} \n${retiro}`;
});

// Lógica para el Ejercicio 5
document.querySelector<HTMLButtonElement>('#testExercise5')!.addEventListener('click', () => {
  const empleado = new Empleado('Maria', 'Gonzalez', 'Av. Principal 123', '555-1234', 30, 2500);
  empleado.cargarSueldo(3000);
  const datosEmpleado = empleado.mostrarDatos();
  const sueldo = empleado.imprimirSueldo();
  document.getElementById('outputExercise5')!.innerText = `${datosEmpleado} \n${sueldo}`;
});
