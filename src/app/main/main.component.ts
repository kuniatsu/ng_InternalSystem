import { Component, OnInit } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  changePage(event,num:number) {
    if (num == 1) {

    } else {

    }

  }
}
