import {Component, OnInit, ViewChild} from '@angular/core';
import {YosanmodalComponent} from "../yosanmodal/yosanmodal.component";
import { DateModel, DatePickerOptions } from '../ng2-datepicker/ng2-datepicker.component';
import {Kinmudata} from "./yosan.kinmudata";
import {Request, Response, Http} from "@angular/http";

@Component({
  selector: 'app-yosan',
  templateUrl: './yosan.component.html',
  styleUrls: ['./yosan.component.css']
})
export class YosanComponent implements OnInit {

  constructor(private http: Http) {
    this.options = new DatePickerOptions();
    console.log("constractor");
  }

  tabFlg1=true;
  tabFlg2=false;
  tabFlg3=false;
  filterpara="none";

  nameS = "開始日付";
  nameE = "終了日付";

  date: DateModel;
  date2: DateModel;
  options: DatePickerOptions;
  kinmudataArray:Kinmudata[]=[];


  //json読み取り
  updateStatus() {
    console.log("updateStatus()");
    this.http.request(new Request({
      method: "Get",
      url: "./kintai.json"
    })).subscribe((res: Response) => {
      var jsonObj = res.json();
      for(var key in jsonObj){
        var jsonDoc = jsonObj[key];
        this.kinmudataArray.push(new Kinmudata(jsonDoc["date"],jsonDoc["title"],jsonDoc["value"]));
      }
    });
  }



  @ViewChild(YosanmodalComponent)
  public readonly yosanmodal: YosanmodalComponent;

  ngOnInit() {
    this.updateStatus();
  }

  datePop(){
  }



  dispFilterPara(){
    console.log("filterbutton"+this.filterpara);
    if(this.filterpara=="none"){
      this.filterpara = "block";
      console.log(1);
    }else{
      this.filterpara = "none";
      console.log(2);
    }

  }


  changeTab(num:number){
    switch (num){
      case 1:
        this.tabFlg1=true;
        this.tabFlg2=false;
        this.tabFlg3=false;
        break;
      case 2:
        this.tabFlg1=false;
        this.tabFlg2=true;
        this.tabFlg3=false;
        break;
      case 3:
        this.tabFlg1=false;
        this.tabFlg2=false;
        this.tabFlg3=true;
        break;
    }
  }

}
