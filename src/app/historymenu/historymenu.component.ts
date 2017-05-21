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
    if(his==null){return;}
    if(his.indexOf(',')!==-1) {//,を含んでいること
      his.split(',').reverse().forEach((hisc,i) => {
        if(i>=10){return;}
        var history = hisc.split(':');
        if (history[0]!=="null") {
            this.objArray.push({str: history[0], url: history[1]});
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
