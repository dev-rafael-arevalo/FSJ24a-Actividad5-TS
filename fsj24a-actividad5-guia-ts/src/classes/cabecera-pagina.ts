export class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'centrado' | 'derecha' | 'izquierda';
  
    constructor(titulo: string, color: string, fuente: string) {
      this.titulo = titulo;
      this.color = color;
      this.fuente = fuente;
      this.alineacion = 'izquierda'; // Valor por defecto
    }
  
    setAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
      this.alineacion = alineacion;
    }
  
    getPropiedades(): string {
      return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineación: ${this.alineacion}`;
    }
  
    imprimirPropiedades(): void {
      console.log(this.getPropiedades());
    }
  }
