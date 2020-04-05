import { Component } from "@angular/core";
import { Todo } from "../interfaces/todo";
import { NgForm } from "@angular/forms";

@Component({
  selector: "todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent {
  todos: Todo[] = [
    {
      task: "fold clothes",
      completed: false
    },
    {
      task: "put clothes in dresser",
      completed: true
    },
    {
      task: "relax",
      completed: false
    }
  ];

  // todo: Todo = {
  //   task: "",
  //   completed: false
  // };

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  // addTodo() {
  //   this.todos.push(this.todo);
  //   this.todo = {
  //     task: "",
  //     completed: false
  //   };
  // }
  addTodo(form: NgForm) {
    console.log(form);
    this.todos.push({
      task: form.value.penguin,
      completed: false
    });
    form.reset();
  }
}