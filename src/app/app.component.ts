import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: '';

  constructor (title: any) {
    this.title = title
  }

  addTodo(): void {
  //   if (this.title) {
  //     title = this.title
  //   }
  }
}
