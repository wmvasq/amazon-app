import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-apps-grid',
  templateUrl: './apps-grid.component.html',
  styleUrls: ['./apps-grid.component.css']
})
export class AppsGridComponent {
  @Output() openModalEvent = new EventEmitter<any>();
  apps = [
    { nombre: 'App 1', dev: 'Desarrollador 1', calificacion:2, precio:3.12,imagen:"/assets/img/app-icons/1.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 2', dev: 'Desarrollador 2', calificacion:2, precio:3.82,imagen:"/assets/img/app-icons/2.webp",url:"/assets/img/app-screenshots/2.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa."},
    { nombre: 'App 3', dev: 'Desarrollador 3', calificacion:2, precio:2.60,imagen:"/assets/img/app-icons/3.webp",url:"/assets/img/app-screenshots/3.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 4', dev: 'Desarrollador 4', calificacion:1, precio:4.11,imagen:"/assets/img/app-icons/4.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 5', dev: 'Desarrollador 5', calificacion:2, precio:2.49,imagen:"/assets/img/app-icons/5.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa."},
    { nombre: 'App 6', dev: 'Desarrollador 6', calificacion:2, precio:2.48,imagen:"/assets/img/app-icons/6.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 7', dev: 'Desarrollador 7', calificacion:1, precio:0.25,imagen:"/assets/img/app-icons/7.webp",url:"/assets/img/app-screenshots/2.webp",instalado:true,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 8', dev: 'Desarrollador 8', calificacion:1, precio:3.20,imagen:"/assets/img/app-icons/8.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 9', dev: 'Desarrollador 9', calificacion:4, precio:1.98,imagen:"/assets/img/app-icons/9.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 10', dev: 'Desarrollador 10', calificacion:4, precio:1.45,imagen:"/assets/img/app-icons/10.webp",url:"/assets/img/app-screenshots/2.webp",instalado:true,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 11', dev: 'Desarrollador 11', calificacion:1, precio:4.75,imagen:"/assets/img/app-icons/11.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 12', dev: 'Desarrollador 12', calificacion:1, precio:2.76,imagen:"/assets/img/app-icons/12.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 13', dev: 'Desarrollador 13', calificacion:3, precio:3.12,imagen:"/assets/img/app-icons/13.webp",url:"/assets/img/app-screenshots/2.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 14', dev: 'Desarrollador 14', calificacion:2, precio:0.49,imagen:"/assets/img/app-icons/14.webp",url:"/assets/img/app-screenshots/1.webp",instalado:true,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 15', dev: 'Desarrollador 15', calificacion:4, precio:3.12,imagen:"/assets/img/app-icons/15.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 16', dev: 'Desarrollador 16', calificacion:1, precio:3.14,imagen:"/assets/img/app-icons/16.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 17', dev: 'Desarrollador 17', calificacion:3, precio:6,imagen:"/assets/img/app-icons/17.webp",url:"/assets/img/app-screenshots/2.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
    { nombre: 'App 18', dev: 'Desarrollador 18', calificacion:3, precio:2,imagen:"/assets/img/app-icons/18.webp",url:"/assets/img/app-screenshots/1.webp",instalado:false,descripcion:"El jugador va disponiendo diferentes plantas mutantes con distintas características de ataque o defensa. "},
  ];

 selectedApp: any; // 

  openModal(app: any) {
    this.openModalEvent.emit(app);
  }
}
