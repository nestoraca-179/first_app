import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'first_app';
  users = ['john', 'mark', 'will', 'erick', 'peter', 'edward', 'frank', 'robert', 'lawrence', 'brandon', 'zack', 'sam'];

  helloUser (user: string) {
    alert('hello ' + user);
  }

  deleteUser (user: string) {
    var index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}