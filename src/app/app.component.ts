import { Component } from '@angular/core';
import { AppService, } from './services/app.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon-app';
  showModal = false;
  selectedApp: any;
  categories: any = [
    // { id: '0', name: 'Todas las categorías' }, 
    //{ id: '1', name: 'Categoria 1' },
    // { id: '2', name: 'Categoria 2' },
  ];
  selectedRating: number = 0;
  showSuccessMessage = false;
  constructor(private appService: AppService) { }
  ngOnInit(): void {
    this.getCategorias();
  }
  getCategorias(): void {
    this.appService.getCategorias().subscribe(
      (categorias) => {
        this.categories = categorias;
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }
  selectedCategory: number = 0;
  onCategorySelect(categoryId: number): void {

    this.selectedCategory = categoryId;

  }
  openModal(app: any) {
    this.selectedApp = app;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  //
  //actualizar calificacion
  actualizarCalificacion(rating: number): void {
    this.selectedApp.calificacion = rating;

    this.appService.actualizarCalificacion(this.selectedApp.id, this.selectedApp.calificacion).subscribe(
      (gg) => {

        //controllar error
        if (gg.status == 200)
          this.mostrarMensajeExito();
      },
      (error) => {
        console.error('Error al procesar resp:', error);
      }
    );
    this.mostrarMensajeExito();
  }
  mostrarMensajeExito(): void {
    this.showSuccessMessage = true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000); // Desaparecerá después de 3 segundos (3000 ms)
  }
}
