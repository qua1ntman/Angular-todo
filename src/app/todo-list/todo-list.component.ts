import { Component, OnInit } from '@angular/core';
import { todoData } from '../todoData';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoData=todoData

  constructor() { }

  ngOnInit(): void {
    
  }

}


