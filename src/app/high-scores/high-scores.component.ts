import { Component } from '@angular/core';
import { HighScoresService } from '../high-scores.service';
import { SortPipe } from '../sort.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-high-scores',
  templateUrl: './high-scores.component.html',
  styleUrls: ['./high-scores.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, SortPipe],
})
export class HighScoresComponent {
  highScores: any[] = [];
  filteredScores: any[] = [];
  sortOrder: string = 'asc';
  showOnlyAndroo: boolean = false;

  constructor(private highScoresService: HighScoresService) {}

  ngOnInit() {
    this.fetchHighScores()
   setInterval(()=> this.fetchHighScores(),3000);
  }

  fetchHighScores() {
    this.highScoresService.getHighScores().subscribe(
      (data) => {
        this.highScores = data;
        this.applyFilters();
      },
      (error) => {
        console.error('Error fetching high scores', error);
      }
    );
  }

  onSortOrderChange() {
    this.applyFilters();
  }

  onShowOnlyAndrooChange() {
    this.applyFilters();
  }

  applyFilters() {
    let filteredScores = this.highScores;
    
    if (this.showOnlyAndroo) {
      filteredScores = filteredScores.filter(score => score.name === 'Androo');
    }

    filteredScores = new SortPipe().transform(filteredScores, this.sortOrder);
    this.filteredScores = filteredScores.slice(0, 10);
  }
}
