import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css' 
})
export class ItemsComponent {
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() check: EventEmitter<any> = new EventEmitter();
  
  toCheck() {
    this.check.emit(); 
  }
  
  toRemove(){
    this.remove.emit();
  }

}
