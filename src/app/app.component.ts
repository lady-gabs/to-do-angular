import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { InsertComponent } from './components/insert/insert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, InsertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-angular';
}
