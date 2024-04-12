import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './insert.component.html',
  styleUrl: './insert.component.css'
})

export class InsertComponent {
  placeholder:string = 'Insira uma tarefa';
  value: string = "";
  @Output() send: EventEmitter<any> = new EventEmitter();
  
  sendValue() {
    this.send.emit(this.value);
  }
}
