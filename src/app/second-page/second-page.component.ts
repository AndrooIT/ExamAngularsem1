import { Component,Input,Output,EventEmitter, OnInit, ViewChild } from '@angular/core';
import {NgxSnakeModule} from 'ngx-snake';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [NgxSnakeModule],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})

export class SecondPageComponent {
@Input() name : string ='';
@Input() style : string ='';
@Input() loginPageVisible : boolean = false;
@Output() messageToParent: EventEmitter<boolean> = new EventEmitter<boolean>();
CSSclass : string='';
status: string = 'Ready';
points :number = 0;
timeOfGame :number = new Date().getTime();

sendLoginPageVisibleToParent(){
  this.loginPageVisible=true;
this.messageToParent.emit(this.loginPageVisible);
}
ngOnInit(){
  if (this.style == 'skala szarości') {
    this.CSSclass = 'frame';
  }
  if (this.style == 'surowy styl html') {
    this.CSSclass = '';
  }
  if (this.style == 'wiosenny zielony') {
    this.CSSclass = 'springGreen';
  } 
}
// @ViewChild(NgxSnakeComponent);
//snake :NgxSnakeModule = new NgxSnakeModule();

onStartClick(){
  //Moje nieudane próby 
  //console.log(JSON.stringify(this.snake));
  //snake.actionStart();
  // game.actionStart();
  this.status="Started";
  // pozostały kod wyzwalany przyciskiem "Start"
}

onStopClick(){}
onRestartClick(){}

}

