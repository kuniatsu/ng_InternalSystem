"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var yosanmodal_component_1 = require("../yosanmodal/yosanmodal.component");
var ng2_datepicker_component_1 = require('../ng2-datepicker/ng2-datepicker.component');
var yosan_kinmudata_1 = require("./yosan.kinmudata");
var http_1 = require("@angular/http");
var ap_angular2_fullcalendar_1 = require("ap-angular2-fullcalendar");
var YosanComponent = (function () {
    function YosanComponent(http) {
        this.http = http;
        this.tabFlg1 = true;
        this.tabFlg2 = false;
        this.tabFlg3 = false;
        this.filterpara = "none";
        this.nameS = "開始日付";
        this.nameE = "終了日付";
        this.kinmudataArray = [];
        this.calendarOptions = {
            height: 500,
            fixedWeekCount: false,
            defaultDate: '2017-04-12',
            editable: true,
            eventLimit: true,
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
        this.options = new ng2_datepicker_component_1.DatePickerOptions();
        console.log("constractor");
    }
    YosanComponent.prototype.ngOnInit = function () {
        this.updateStatus(); //json読み込み
        // this.calendarOptions['events'].push({
        //   'title':this.kinmudataArray[0].getTitle(),
        //   'start':this.kinmudataArray[0].getDate()
        // });
        var aaa = this.kinmudataArray;
        console.dir(aaa);
        this.calendarOptions['events'].push({
            title: 'aaa',
            start: '2016-09-28'
        });
        console.dir(this.calendarOptions['events']);
    };
    //json読み取り
    YosanComponent.prototype.updateStatus = function () {
        var _this = this;
        console.log("updateStatus()");
        this.http.request(new http_1.Request({
            method: "Get",
            url: "./kintai.json"
        })).subscribe(function (res) {
            var jsonObj = res.json();
            for (var key in jsonObj) {
                var jsonDoc = jsonObj[key];
                _this.kinmudataArray.push(new yosan_kinmudata_1.Kinmudata(jsonDoc["date"], jsonDoc["title"], jsonDoc["value"]).hyphen());
            }
            // console.dir(this.kinmudataArray);
        });
    };
    YosanComponent.prototype.datePop = function () {
    };
    YosanComponent.prototype.dispFilterPara = function () {
        console.log("filterbutton" + this.filterpara);
        if (this.filterpara == "none") {
            this.filterpara = "block";
            console.log(1);
        }
        else {
            this.filterpara = "none";
            console.log(2);
        }
    };
    YosanComponent.prototype.changeTab = function (num) {
        switch (num) {
            case 1:
                this.tabFlg1 = true;
                this.tabFlg2 = false;
                this.tabFlg3 = false;
                break;
            case 2:
                this.tabFlg1 = false;
                this.tabFlg2 = true;
                this.tabFlg3 = false;
                // var a = getElementsByClassName()
                alert(2);
                break;
            case 3:
                this.tabFlg1 = false;
                this.tabFlg2 = false;
                this.tabFlg3 = true;
                break;
        }
    };
    YosanComponent.prototype.changeCalendarView = function (view) {
        this.myCalendar.fullCalendar('changeView', view);
    };
    __decorate([
        core_1.ViewChild(yosanmodal_component_1.YosanmodalComponent)
    ], YosanComponent.prototype, "yosanmodal", void 0);
    __decorate([
        core_1.ViewChild(ap_angular2_fullcalendar_1.CalendarComponent)
    ], YosanComponent.prototype, "myCalendar", void 0);
    YosanComponent = __decorate([
        core_1.Component({
            selector: 'app-yosan',
            templateUrl: './yosan.component.html',
            styleUrls: ['./yosan.component.css']
        })
    ], YosanComponent);
    return YosanComponent;
}());
exports.YosanComponent = YosanComponent;
