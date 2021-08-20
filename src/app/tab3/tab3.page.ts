import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';
import { ToDo } from '../Interfaces/to-do';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  todos: ToDo[];

  constructor(private toDoService: TodoService) {}

  ngOnInit(){
    this.toDoService.getToDos().subscribe((todo) => {
      this.todos = todo.filter((element) =>  element.active === true);
    });
  }


}
