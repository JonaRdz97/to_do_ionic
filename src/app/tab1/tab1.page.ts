import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';
import { ToDo } from '../Interfaces/to-do';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  name: string;
  todos: ToDo[];
  date: DateTime;
  constructor(private toDoService: TodoService) {
    this.name = 'Jonathan';
    const now = DateTime.now();
    this.date = now.toLocaleString(DateTime.DATE_HUGE);
  }

  ngOnInit(){
    this.toDoService.getToDos().subscribe((todo) => this.todos = todo);
  }

}
