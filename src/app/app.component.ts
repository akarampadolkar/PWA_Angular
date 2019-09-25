import { Component , OnInit} from '@angular/core';
import { PwaServiceService } from './pwa-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'myApp';
  todos = [];

  addForm = new FormGroup({
    name: new FormControl('')
  })

  constructor(public Pwa: PwaServiceService) {}
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }

  ngOnInit() {
    this.getTodo();
  }
  
  getTodo(){
    this.todos = JSON.parse(localStorage.getItem('todolist'));
  }
  submit(){
    let oldItems = JSON.parse(localStorage.getItem('todolist')) || [];
    oldItems.push(this.addForm.value);

    localStorage.setItem('todolist', JSON.stringify(oldItems));

    //call method for add recenr todo in list 
    this.getTodo();
    this.addForm.reset();
  }

  // deleteTodo(deletingTodo){
  //   console.log(deletingTodo)
  // }
}
