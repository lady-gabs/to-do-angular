import { Component } from '@angular/core';
import { ItemsComponent } from '../items/items.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
}