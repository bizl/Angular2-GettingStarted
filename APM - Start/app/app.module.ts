import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { TatusComponent }  from './tatuhead.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TatusComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
