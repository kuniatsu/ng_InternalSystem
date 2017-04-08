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


@NgModule({
  declarations: [
    AppComponent,
    YosanComponent,
    YosanmodalComponent,
    CalendarComponent,
    MainComponent
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
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
