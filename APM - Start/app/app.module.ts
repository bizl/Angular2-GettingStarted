import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { TatusComponent }  from './ta2-head.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TatusComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
