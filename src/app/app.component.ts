import {Component, ViewChild, Input} from '@angular/core';
import {YosanmodalComponent} from "./yosanmodal/yosanmodal.component";
import {MainComponent} from "./main/main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  value = 1;



  // @Input() mainComponent:MainComponent;




  //アクセス履歴
  s = localStorage;
  setData(){
    var a = this.s.getItem("save")
    this.s.setItem("save",a+":a");
  }
  getData(){
    console.log(this.s.getItem("save"));
  }
  clearData(){
    this.s.clear();
  }

}
