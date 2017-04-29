import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  kintaiFlg = false;
  yosanFlg = false;
  systemFlg = false;

  constructor() { }
  ngOnInit() {
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
