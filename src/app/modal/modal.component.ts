import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input() showModal: boolean = false;
    @Output() closeModalEvent = new EventEmitter<void>(); // Evento para cerrar el modal
  
    closeModal() {
      this.closeModalEvent.emit(); // Emitir evento para cerrar el modal
    }
}