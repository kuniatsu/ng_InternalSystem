import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-yosanmodal',
  templateUrl: './yosanmodal.component.html',
  styleUrls: ['./yosanmodal.component.css']
})
export class YosanmodalComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  public visible = false;
  private visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

}
