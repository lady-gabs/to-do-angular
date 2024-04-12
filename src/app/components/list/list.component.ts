import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items/items.component';
import { InsertComponent } from '../insert/insert.component';
import { Task } from '../../Task';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemsComponent, InsertComponent], 
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  tasks: Task[] = [];
  textDecoration : string = '';

  constructor() {
    this.getTasks();
  }

  getTasks()  {
    this.tasks = [
      {
        "info": "task 1",
        "check": false
      },
      {
        "info": "task 2",
        "check": true
      },
      {
        "info": "task 3",
        "check": true
      },
      {
        "info": "task 4",
        "check": false
      },
      {
        "info": "task 5",
        "check": false
      }
    ]
  }

  insertTask(value: string) {
    if (value === '') {
      alert("Insira um valor!");
    } else {
        if (this.tasks.find(element => value.trim().toLowerCase() === element.info.trim().toLowerCase())) {
          alert("Essa task já existe!");
        } else {
          this.tasks.push({"info": value,"check": false});
          console.log(this.tasks);
        }
    }
  }

  checkTask(task: Task){
    if (task.check) {
      task.check = false;
    } else {
      task.check = true;
    }
  }

  removeTask(task: Task){
    this.tasks = this.tasks.filter((elem)=> task.info !== elem.info);
  }
}