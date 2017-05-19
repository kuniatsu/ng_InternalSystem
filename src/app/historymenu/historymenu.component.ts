import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-historymenu',
  templateUrl: './historymenu.component.html',
  styleUrls: ['./historymenu.component.css']
})
export class HistorymenuComponent implements OnInit {
  private strArray:string[] = ["予算","予算"];
  public static linkArray:string[];

  private disp:boolean;
  constructor() {
    this.disp = true;
    console.log("historymenu:constructor");
  }


  //スタフロ
  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  changeEmitted$ = this.emitChangeSource.asObservable();
  // Service message commands
  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
  //スタフロ





  ngOnInit() {}
  changeDisp(){
    this.disp = !this.disp;
  }
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
