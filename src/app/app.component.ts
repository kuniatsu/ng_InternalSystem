import {Component, ViewChild, Input, OnInit, OnChanges} from '@angular/core';
import {YosanmodalComponent} from "./yosanmodal/yosanmodal.component";
import {MainComponent} from "./main/main.component";
import {HistoryServiceService} from "./historymenu/history-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges  {
  title = 'app works!';
  value = 1;
  menudisp:boolean = true;

  constructor(private _historyServiceService: HistoryServiceService) {
    _historyServiceService.changeEmitted$.subscribe(
      text => {
        //historyServiceのイベント定義
        console.log("appcomponent:"+text);
        this.menudisp = !this.menudisp;
      });
  }

  onc(){
    this.menudisp = !this.menudisp;
  }


  ngOnChanges(){
    console.log("changechange ngOnchanges");
  }

  //アクセス履歴
  s = localStorage;
  setData(){
    var a = this.s.getItem("save");
    this.s.setItem("save",a+":a");
  }
  getData(){
    console.log(this.s.getItem("save"));
  }
  clearData(){
    this.s.clear();
  }

}
