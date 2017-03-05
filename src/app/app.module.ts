import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YosanComponent } from './yosan/yosan.component';
import { YosanmodalComponent } from './yosanmodal/yosanmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    YosanComponent,
    YosanmodalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
