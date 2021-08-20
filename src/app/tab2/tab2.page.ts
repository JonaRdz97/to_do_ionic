import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';
import { ToDo } from '../Interfaces/to-do';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  todos: ToDo[];

  constructor(private toDoService: TodoService) {}

  ngOnInit(){
    this.toDoService.getToDos().subscribe((todo) => {
      this.todos = todo.filter((element) =>  element.active === false);
    });
  }

}
