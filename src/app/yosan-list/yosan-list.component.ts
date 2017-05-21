///<reference path="../../../node_modules/@angular/http/src/base_request_options.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Kinmudata} from "../yosan/yosan.kinmudata";
import {Request, Response, RequestOptions, URLSearchParams, Headers, Http} from "@angular/http";
import {Router} from "@angular/router";
import {YosanListData} from "./yosanListData";

@Component({
  selector: 'app-yosan-list',
  templateUrl: './yosan-list.component.html',
  styleUrls: ['./yosan-list.component.css']
})
export class YosanListComponent implements OnInit {

  kinmudataArray:Kinmudata[]=[];//サンプル
  yosanListData:YosanListData[]=[];
  constructor(
    private http: Http,
    public router: Router
  ) { }

  ngOnInit() {
    this.updateStatus();//json読み込み
  }



  //json読み取り
  updateStatus() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let params = new URLSearchParams();
    params.set('start', '2016');
    params.set('end', '2017');
    let options = new RequestOptions({ headers: headers, search: params});



    //get送信
    this.http.request(new Request({
      method: "Get",
      url: "./yosan.json"
    }),options).subscribe((res: Response) => {
      console.log("get送信内");
      console.dir(res);
      var jsonObj = res.json();
      for (var key in jsonObj) {
        var jsonDoc = jsonObj[key];
        // this.kinmudataArray.push(new Kinmudata(jsonDoc["start"], jsonDoc["name"], jsonDoc["value"]).changeHyphen());
        this.yosanListData.push(new YosanListData(
          jsonDoc["code"],
          jsonDoc["status"],
          jsonDoc["name"],
          jsonDoc["start"],
          jsonDoc["end"],
          jsonDoc["value"],
          jsonDoc["koutsuuhi"],
          jsonDoc["zangyou"],
          jsonDoc["value_nokori"],
          jsonDoc["koutsuuhi_nokori"],
          jsonDoc["zangyou_nokori"]
        ));


      }
    },error => {
      alert(error);
    });



  }


  serch(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let params = new URLSearchParams();
    params.set('start', 'a');
    params.set('code', 'b');
    params.set('status', 'c');
    params.set('name', 'd');
    params.set('start', 'e');
    params.set('end', 'f');
    params.set('value', 'g');
    params.set('koutsuuhi', 'h');
    params.set('zangyou', 'i');
    params.set('value_nokori', 'j');
    params.set('koutsuuhi_nokori', 'k');
    params.set('zangyou_nokori', 'l');

    let options = new RequestOptions({ headers: headers, search: params});

    this.http.get("./ajax.php", options)
      .subscribe((res: Response) => {
        console.log("success");
        console.dir(res);
      },error => {
        console.log("error");
        console.dir(error);
      });

  }


}
