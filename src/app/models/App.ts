export interface App {
  id: number;
  nombre: string;
  categoria: number;
  dev: string;
  calificacion: number;
  precio: number;
  imagen: string;
  url: string;
  instalado: boolean;
  descripcion: string;
  comentarios: Comentario[];
}

export interface Comentario {
  id:number;
  usuario: string;
  comentario: string;
  appid:number;
}