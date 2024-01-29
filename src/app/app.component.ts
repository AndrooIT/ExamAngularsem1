import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstPageComponent} from "./first-page/first-page.component";
import {SecondPageComponent} from "./second-page/second-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FirstPageComponent,
    SecondPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sem1AngularExamProject';
  public loginPageVisible: boolean =true;
  public name : string ='';
  public style : string='';
  CSSclass = 'frame';
  public getNameAndPlay(ev: string){
    this.name=ev;
    this.loginPageVisible=false;
  }
public getStyle(ev:string) {
  this.style=ev;
}
public goBackToForm(){
this.loginPageVisible=true;
}
}