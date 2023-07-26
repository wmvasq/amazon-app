import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon-app';
  showModal = false;
  selectedApp: any;
  categories = [
    { id: '0', name: 'Todas las categorías' }, 
    { id: '1', name: 'Categoria 1' },
    { id: '2', name: 'Categoria 2' },
  ];
  selectedCategory: any = '0'; 
  onCategorySelect(event: any) {
    const selectedCategory = event?.target?.value;
    this.selectedCategory = selectedCategory || '0'; 
  }
  openModal(app: any) {
    this.selectedApp = app;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
