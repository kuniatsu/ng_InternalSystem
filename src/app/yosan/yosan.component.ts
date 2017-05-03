import {Component, OnInit, ViewChild} from '@angular/core';
import {YosanmodalComponent} from "../yosanmodal/yosanmodal.component";
import { DateModel, DatePickerOptions } from '../ng2-datepicker/ng2-datepicker.component';
import {Kinmudata} from "./yosan.kinmudata";
import {Request, Response, Http, Headers, RequestOptions} from "@angular/http";
import {CalendarComponent} from "ap-angular2-fullcalendar";
import {Router} from '@angular/router';

@Component({
  selector: 'app-yosan',
  templateUrl: './yosan.component.html',
  styleUrls: ['./yosan.component.css']
})
export class YosanComponent implements OnInit {

  constructor(
    private http: Http,
    public router: Router
  ) {
    console.log("constractor");
    this.options = new DatePickerOptions();

    this.dateData = {
      startDate:"2017-01-01",
      endDate:"2017-12-31"
    };
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
  dateData: any;

  ngOnInit() {
    this.updateStatus();//json読み込み
  }


  //json読み取り
  updateStatus() {
    console.log("updateStatus");

    //get送信
    this.http.request(new Request({
      method: "Get",
      url: "./kintai.json"
    })).subscribe((res: Response) => {
      var jsonObj = res.json();
      for (var key in jsonObj) {
        var jsonDoc = jsonObj[key];
        this.kinmudataArray.push(new Kinmudata(jsonDoc["start"], jsonDoc["title"], jsonDoc["value"]).changeHyphen());
      }
    },error => {
      alert(error);
    });


    // //get送信
    // this.http.request(new Request({
    //   method: "Get",
    //   url: "./tslint.json"
    // })).subscribe((res: Response) => {
    //   console.log("success:"+res);
    // },error => {
    //   console.log("fail:"+error);
    // });


    // //post送信
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let option = new RequestOptions({ headers: headers });
    // this.http.request(new Request({
    //   method: "Post",
    //   url: "./tslint.json"
    // }),option).subscribe((res: Response) => {
    //   console.log("success:"+res);
    // },error => {
    //   console.log("fail:"+error);
    // });

    //post送信
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let trans_data = JSON.stringify(this.dateData);
    this.http.post("./tslint.json", trans_data, options)
        .subscribe(
          res  => {
            console.log("success:"+res.text());
            console.log(res.status);
          },
          error => {
            console.log("fail:"+error.text());
            console.log(error.status);
          }
        );
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
