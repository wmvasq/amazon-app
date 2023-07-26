export interface App {
    nombre: string;
    categoria: number;
    dev: string;
    calificacion: number;
    precio: number;
    imagen: string;
    url: string;
    instalado: boolean;
    descripcion: string;
    comments: Comment[];
  }
  
  export interface Comment {
    username: string;
    comment: string;
  }