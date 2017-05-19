import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HistorymenuComponent} from "../historymenu/historymenu.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  kintaiFlg = false;
  yosanFlg = false;
  systemFlg = false;

  pageNum = 0;

  constructor(){
    localStorage.setItem("history",localStorage.getItem("history")+",main");
  }
  ngOnInit(){}

  actionClick(page:string){
    // console.log(num+"がclickされた");
    // localStorage.setItem("history",localStorage.getItem("history")+","+page);
    // alert(localStorage.getItem("save"));
  }

  changePage(event,num:number) {
    if (num == 1) {} else {}
  }


  openCloseContent(num:number){
    switch (num){
      case 0:
        this.yosanFlg = !this.yosanFlg;
        this.kintaiFlg = false;
        this.systemFlg = false;
        break;
      case 1:
        this.kintaiFlg = !this.kintaiFlg;
        this.yosanFlg = false;
        this.systemFlg = false;
        break;
      case 2:
        this.systemFlg = !this.systemFlg;
        this.kintaiFlg = false;
        this.yosanFlg = false;
        break;

    }
  }

}
