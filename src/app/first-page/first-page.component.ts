import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidateStudentIdService } from '../validate-student-id.service';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'], // Corrected property name
})
export class FirstPageComponent implements OnInit {
  @Input() name: string = '';
  studentId: number = 3251;
  @Input() style: string = '';
  @Input() loginPageVisible: boolean = true;
  CSSclass = 'frame';
  userFormNameAdvice = '';
  formNameIsInValid = true;
  formIsInvalid = true;
  errorMessage: string | null = null; // Variable to store error message

  constructor(
    private _router: Router,
    private playerDataService: PlayerDataService,
    private validateStudentIdService: ValidateStudentIdService
  ) {}

  ngOnInit() {
    this.playerDataService.playerData$.subscribe((data) => {
      if (data) {
        this.name = data.name;
        this.style = data.style;
      }
    });
    this.changeStyle();
    this.validateName();
  }

  handleClick() {
    const playerData = {
      name: this.name,
      studentId: this.studentId,
      style: this.style,
    };
    this.playerDataService.setPlayerData(playerData);

    this.validateStudentIdService.getAccess(this.studentId).subscribe(
      (allowed) => { // Handle successful validation
        if (allowed) {
          this.errorMessage = null; // Clear error message
          this._router.navigate(['/secondComponent']);
        } else {
          this.errorMessage = 'Nie ma takiego id studenta. Zapisz się na studia i uzyskaj Id studenta.'; // Set error message
        }
      },
      (error) => { // Handle error from service
        this.errorMessage = 'An error occurred during validation.'; // Set error message
      }
    );
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
    this.formIsInvalid = this.formNameIsInValid;
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
