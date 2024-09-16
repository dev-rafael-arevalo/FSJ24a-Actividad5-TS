export class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;
  
    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.tipoCuenta = tipoCuenta;
      this.numeroCuenta = numeroCuenta;
    }
  
    // Método para depositar una cantidad
    depositar(cantidad: number): string {
      if (cantidad < 5) {
        return 'El valor a depositar debe ser mayor a $5.00';
      }
      this.cantidad += cantidad;
      return `Se ha depositado correctamente $${cantidad}. Saldo actual: $${this.cantidad}`;
    }
  
    // Método para retirar una cantidad
    retirar(valor: number): string {
      if (valor > this.cantidad) {
        return 'No hay suficiente saldo en la cuenta.';
      }
      if (valor < 5) {
        return 'El valor a retirar debe ser mayor a $5.00';
      }
      this.cantidad -= valor;
      return `Has retirado $${valor}. Saldo restante: $${this.cantidad}`;
    }
  
    // Método para mostrar los datos de la cuenta
    mostrarDatos(): string {
      return `Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}, Saldo: $${this.cantidad}`;
    }
  }
  