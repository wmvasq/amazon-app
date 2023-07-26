import { Component } from '@angular/core';
import { CategoryService } from './services/app.service';

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

  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.getCategorias();
  }
  getCategorias(): void {
    this.categoryService.getCategorias().subscribe(
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
}
