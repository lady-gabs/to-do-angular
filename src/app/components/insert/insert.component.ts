import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { ListService } from "../../services/list.service";
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
}
