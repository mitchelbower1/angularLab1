import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDoArray: Todo[] = [
    { task: "do laundry", isDone: false },
    { task: "dishes", isDone: true },
    { task: "drugs", isDone: false },
    { task: "go to the store", isDone: false },
    { task: "give the cat food and attention", isDone: false },
    { task: "drugs", isDone: true }
  ];
  constructor() {}

  ngOnInit(): void {}
}
