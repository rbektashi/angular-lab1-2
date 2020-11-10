import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  list: Todo[] = [
    {
      task: 'Do Homework',
      completed: true,
    },
    {
      task: 'Water Plants',
      completed: true,
    },
    {
      task: 'Fold Laundry',
      completed: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  removeTask = (eventItem: Todo): void => {
    const index = this.list.findIndex((item) => {
      return eventItem.task === item.task;
    });
    this.list.splice(index, 1);
  };
  addTask = (event, form): void => {
    event.preventDefault();
    this.list.push({
      task: form.form.value.add,
      completed: false,
    });
  };
  completeTask = (item: Todo): void => {
    item.completed = true;
  };
}
