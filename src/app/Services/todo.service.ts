import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Interfaces/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'https://demo6193376.mockable.io/todos';

  constructor(private http: HttpClient) {}

  getToDos(): Observable<ToDo[]>{
    return this.http.get(this.url) as Observable<ToDo[]>;
  }
}
