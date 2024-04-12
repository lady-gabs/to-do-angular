import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private urlApi = 'http://localhost:3000/tasks-todo';

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<Task>(`${this.urlApi}/${id}`);
  }
  getAll(): Observable<Task[]> { 
    return this.http.get<Task[]>(this.urlApi);  //consulta lista de tasks contida em db.json
  }

}
