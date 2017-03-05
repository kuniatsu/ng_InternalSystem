import {Component, OnInit, ViewChild} from '@angular/core';
import {YosanmodalComponent} from "../yosanmodal/yosanmodal.component";

@Component({
  selector: 'app-yosan',
  templateUrl: './yosan.component.html',
  styleUrls: ['./yosan.component.css']
})
export class YosanComponent implements OnInit {

  constructor() { }
  @ViewChild(YosanmodalComponent)
  public readonly yosanmodal: YosanmodalComponent;

  ngOnInit() {
  }

}
