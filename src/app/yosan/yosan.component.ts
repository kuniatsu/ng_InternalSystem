import {Component, OnInit, ViewChild} from '@angular/core';
import {YosanmodalComponent} from "../yosanmodal/yosanmodal.component";
import { DateModel, DatePickerOptions } from '../ng2-datepicker/ng2-datepicker.component';
import {Kinmudata} from "./yosan.kinmudata";
import {Request, Response, Http} from "@angular/http";
import {CalendarComponent} from "ap-angular2-fullcalendar";

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

  ngOnInit() {
    this.updateStatus();
  }


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


  //下　カレンダー用に追加

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  changeCalendarView(view) {
    this.myCalendar.fullCalendar('changeView', view);
  }

  calendarOptions:Object = {
    height: 500,//高さを任意で指定
    fixedWeekCount : false,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };
  //上　カレンダー用に追加


}
