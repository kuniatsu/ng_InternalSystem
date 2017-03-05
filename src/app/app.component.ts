import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  value = 1;

  changePage(event,num:number){
    this.title = 'masao';
    this.value = num;
  }


}
