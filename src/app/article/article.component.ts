import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  votes!: number;
  link!: string;
  title!: string;

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor() {
    this.title = 'Angular';
    this.votes = 10;
    this.link = 'http://angular.dev';
  }

  ngOnInit(): void {}

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
}
