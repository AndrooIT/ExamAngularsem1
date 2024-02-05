import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HotkeysModule } from '@ngneat/hotkeys';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [FormsModule, 
    // HotkeysModule
  ],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css',
})
export class FirstPageComponent {
  @Input() name : string ='';
  eMail = '';
  @Input() style: string='';
  @Input() loginPageVisible: boolean= true;
  CSSclass = 'frame';
  @Output() playerName = new EventEmitter<string>();
  @Output() exportStyle = new EventEmitter<string>();


  userFormNameAdvice = '';
  userFormEmailAdvice = '';
  formNameIsInValid = true;
  formEmailIsInValid = true;
  formIsInvalid = true;

  sendNameToParent(){
    this.playerName.emit(this.name);
  }
  sendStyleToParent(){
    this.exportStyle.emit(this.style);
  }
  handleClick(){
    this.sendNameToParent();
    this.sendStyleToParent();
  }

  validateName() {
    let nameRegex = /^[A-Z][a-z]+$/;
    if (this.name.length < 3 || !nameRegex.test(this.name)) {
      this.formNameIsInValid = true;
      this.userFormNameAdvice =
        'Wpisz imię, składające się z co najmniej 3 znaków, wyłącznie liter i napisane z dużej litery';
    } else {
      this.formNameIsInValid = false;
      this.userFormNameAdvice = '';
    }
    this.formIsInvalid =
      this.formNameIsInValid == true || this.formEmailIsInValid == true;
  }

  validateEmail() {
    let emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(this.eMail)) {
      this.formEmailIsInValid = false;
      this.userFormEmailAdvice = '';
    } else {
      this.formEmailIsInValid = true;
      this.userFormEmailAdvice =
        'Wpisz poprawny email zawierający znak "@" oraz domenę.';
    }

    this.formIsInvalid =
      this.formNameIsInValid == true || this.formEmailIsInValid == true;
  }
  ngOnInit(){
    this.changeStyle();
    this.validateName();
    
   
  }
  changeStyle() {
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

 
}
