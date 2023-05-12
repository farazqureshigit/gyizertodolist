import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variables
  public isupdateactive: boolean = false
  todos: any = [];
  
  constructor() {
    this.todos = this.todos.map((item: any) => ({
      ...item,
      isSelected: false
    }));
  }


  //add todo start

  addTodo(newTodoTitle: any, newTodoPriority: any) {

    var newTodo = {
      title: newTodoTitle,
      priority: newTodoPriority,
    };
    this.todos.push(newTodo);
    newTodoTitle = '';
    newTodoPriority = '';
  }

  // add todo end


  // edit todo start

  edittitle = ''
  editpro = ''
  updatelistid: any
  edit(i: any) {
    this.updatelistid = i
    this.edittitle = this.todos[i].title
    this.editpro = this.todos[i].priority
    console.log(this.todos[i].title);
    this.isupdateactive = true;

  }

  // edit todo end


  //update todo start

  updateaddTodo(newTodoTitle: any, newTodoPriority: any) {
    this.todos[this.updatelistid].title = newTodoTitle 
    this.todos[this.updatelistid].priority = newTodoPriority
    this.isupdateactive=false
  }

  // update todo end



  // Delete todo start

  delete(i: any) {
    this.todos.splice(i, 1)
    location.reload()
  }

  //delete todo end
}
