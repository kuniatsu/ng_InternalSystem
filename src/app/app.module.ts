import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YosanComponent } from './yosan/yosan.component';
import { YosanmodalComponent } from './yosanmodal/yosanmodal.component';
import {DatePickerModule} from "./ng2-datepicker/ng2-datepicker.module";
import {CalendarComponent} from "ap-angular2-fullcalendar";
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import { FilterPipe } from './yosan/filter.pipe';
import { MonthcalendarComponent } from './monthcalendar/monthcalendar.component';
import { YosaneditComponent } from './yosanedit/yosanedit.component';
import { YosanCheckComponent } from './yosan-check/yosan-check.component';
import { YosanListComponent } from './yosan-list/yosan-list.component';
import { MoveExpenseComponent } from './move-expense/move-expense.component';
import { HolidayComponent } from './holiday/holiday.component';
import { SystemInfoComponent } from './system-info/system-info.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HistorymenuComponent } from './historymenu/historymenu.component';


@NgModule({
  declarations: [
    AppComponent,
    YosanComponent,
    YosanmodalComponent,
    CalendarComponent,
    MainComponent,
    FilterPipe,
    MonthcalendarComponent,
    YosaneditComponent,
    YosanCheckComponent,
    YosanListComponent,
    MoveExpenseComponent,
    HolidayComponent,
    SystemInfoComponent,
    GroupEditComponent,
    HolidayListComponent,
    HistorymenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    RouterModule.forRoot([
      {
        path:'',
        component:MainComponent
      },{
        path:'yosan',
        component:YosanComponent
      },{
        path:'monthcalendar',
        component:MonthcalendarComponent,
      },{
        path:'GroupEditComponent',
        component:GroupEditComponent,
      },{
        path:'HolidayComponent',
        component:HolidayComponent,
      },{
        path:'HolidayListComponent',
        component:HolidayListComponent,
      },{
        path:'MoveExpenseComponent',
        component:MoveExpenseComponent,
      },{
        path:'SystemInfoComponent',
        component:SystemInfoComponent,
      },{
        path:'YosanCheckComponent',
        component:YosanCheckComponent,
      },{
        path:'YosanListComponent',
        component:YosanListComponent,
      },{
        path:'YosaneditComponent',
        component:YosaneditComponent,
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
