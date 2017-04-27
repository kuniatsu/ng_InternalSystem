import {Component, OnInit, ViewChild} from '@angular/core';
import {YosanmodalComponent} from "../yosanmodal/yosanmodal.component";
import { DateModel, DatePickerOptions } from '../ng2-datepicker/ng2-datepicker.component';
import {Kinmudata} from "./yosan.kinmudata";
import {Request, Response, Http} from "@angular/http";
import {CalendarComponent} from "ap-angular2-fullcalendar";
import {Router} from '@angular/router';

@Component({
  selector: 'app-yosan',
  templateUrl: './yosan.component.html',
  styleUrls: ['./yosan.component.css']
})
export class YosanComponent implements OnInit {

  constructor(private http: Http,public router: Router) {
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

  ngOnInit() {
    this.updateStatus();//json読み込み
  }


  //json読み取り
  updateStatus() {
    console.log("updateStatus()");
    this.http.request(new Request({
      method: "Get",
      url: "./kintai.json"
    })).subscribe((res: Response) => {
      console.log("json読み出し開始");
      var jsonObj = res.json();
      for(var key in jsonObj){
        var jsonDoc = jsonObj[key];
        console.log(jsonDoc["date"]+" : "+jsonDoc["title"]+" : "+jsonDoc["value"]);
        this.kinmudataArray.push(new Kinmudata(jsonDoc["date"],jsonDoc["title"],jsonDoc["value"]).changeHyphen());
      }
      console.log("json読み出し終了");
    });
  }



  @ViewChild(YosanmodalComponent)
  public readonly yosanmodal: YosanmodalComponent;



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
        break;
      case 2:
        this.router.navigate(['monthcalendar']);
        break;
      case 3:
        break;
    }
  }

}
