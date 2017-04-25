import {Component, OnInit, ViewChild} from '@angular/core';
import {Http, Request, Response} from "@angular/http";
import {DatePickerOptions} from "../ng2-datepicker/ng2-datepicker.component";
import {DateModel} from "../ng2-datepicker-modal/ng2-datepicker.component";
import {Kinmudata} from "../yosan/yosan.kinmudata";
import {YosanmodalComponent} from "../yosanmodal/yosanmodal.component";
import {CalendarComponent} from "ap-angular2-fullcalendar";
import {Router} from '@angular/router';

@Component({
  selector: 'app-monthcalendar',
  templateUrl: './monthcalendar.component.html',
  styleUrls: ['./monthcalendar.component.css']
})
export class MonthcalendarComponent implements OnInit {


  constructor(private http: Http,public router: Router) {
    this.options = new DatePickerOptions();
    console.log("constractor");
  }

  tabFlg1=false;
  tabFlg2=true;
  tabFlg3=false;

  date: DateModel;
  date2: DateModel;
  options: DatePickerOptions;
  kinmudataArray:Kinmudata[]=[];
  calendarOptions:Object;



  ngOnInit() {
    this.updateStatus();//json読み込み
    // this.calendarOptions.events = this.kinmudataArray;

    this.calendarOptions = {
      height: 500,//高さを任意で指定
      fixedWeekCount : false,
      defaultDate: '2017-04-12',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2017-04-01'
        },
        {
          title: 'Long Event',
          start: '2017-04-07',
          end: '2017-04-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-04-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2017-04-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2017-04-11',
          end: '2017-04-13'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2017-03-28'
        }//,this.kinmudataArray[0].
      ]
    };


    console.log("kinmudataArray");
    console.dir(this.kinmudataArray);
    console.log("calendarOptions");
    console.dir(this.calendarOptions);
    // console.dir(this.calendarOptions.events);

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
        this.kinmudataArray.push(new Kinmudata(jsonDoc["date"],jsonDoc["title"],jsonDoc["value"]).changeHyphen());
      }
      // console.dir(this.kinmudataArray);
    });
  }



  @ViewChild(YosanmodalComponent)
  public readonly yosanmodal: YosanmodalComponent;



  changeTab(num:number){
    switch (num){
      case 1:
        this.router.navigate(['yosan']);
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }


  //下　カレンダー用に追加

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  changeCalendarView(view) {
    this.myCalendar.fullCalendar('changeView', view);
  }

}
