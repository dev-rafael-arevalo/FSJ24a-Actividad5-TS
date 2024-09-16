import { Persona } from './persona';

// Clase derivada Empleado
export class Empleado extends Persona {
  private sueldo: number;

  constructor(
    nombre: string,
    apellido: string,
    direccion: string,
    telefono: string,
    edad: number,
    sueldo: number
  ) {
    super(nombre, apellido, direccion, telefono, edad);
    this.sueldo = sueldo;
  }

  // Método para establecer el sueldo
  cargarSueldo(sueldo: number): void {
    this.sueldo = sueldo;
  }

  // Método para obtener el sueldo
  imprimirSueldo(): string {
    return `Sueldo: $${this.sueldo}`;
  }

  // Implementación del método abstracto
  mostrarDatos(): string {
    return `Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}, ${this.esMayorDeEdad()}`;
  }
}
