import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent implements OnInit {

  votes: number = 3;

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
