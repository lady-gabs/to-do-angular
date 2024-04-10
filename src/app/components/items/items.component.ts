import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Task } from '../../Task';
import { ListService } from "../../services/list.service";

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  tasks: Task[] = [];
  textDecoration : string = '';
  
  constructor(private listService: ListService) {
    this.getTasks();
  }
  getTasks():void  {
    this.listService.getAll().subscribe((tasks) => this.tasks = tasks);
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
    this.listService.remove(task.id).subscribe();
  }
}
