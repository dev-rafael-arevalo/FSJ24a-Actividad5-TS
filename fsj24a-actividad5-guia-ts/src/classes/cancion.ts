// src/classes/Cancion.ts

export class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;
  
    constructor(titulo: string, genero: string) {
      this.titulo = titulo;
      this.genero = genero;
      this.autor = '';
    }
  
    // Método para establecer el autor
    setAutor(autor: string): void {
      this.autor = autor;
    }
  
    // Método para obtener el autor
    getAutor(): string {
      return this.autor;
    }
  
    // Método para mostrar los datos de la canción
    mostrarDatos(): string {
      return `Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`;
    }
  }
  