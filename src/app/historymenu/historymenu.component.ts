import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {HistoryServiceService} from "./history-service.service";

@Component({
  selector: 'app-historymenu',
  templateUrl: './historymenu.component.html',
  styleUrls: ['./historymenu.component.css']
})
export class HistorymenuComponent implements OnInit {
  private objArray:any = [];

  constructor(
    private _historyServiceService: HistoryServiceService
  ) {
    this.dispHistry();
  }
  ngOnInit() {}

  dispHistry(){
    var his = localStorage.getItem("history");
    if(his.indexOf(',')!==-1) {//,を含んでいること
      his.split(',').reverse().forEach((hisc,i) => {
        if(i>10){return;}
        var name = hisc.split(':');
        if (this.objArray.indexOf(name) === -1) {
          this.objArray.push({str: name[0], url: name[1]});
        }
      });
    }
  }



  onClick(){
    this._historyServiceService.emitChange('Data from child');
  }



  changeDisp(){}
  //アクセス履歴
  setData(pName){
    localStorage.setItem("history",localStorage.getItem("history")+","+pName);
  }
  getData(){
    console.dir(localStorage.getItem("history"));
  }
  clearData(){
    localStorage.clear();
  }

}
