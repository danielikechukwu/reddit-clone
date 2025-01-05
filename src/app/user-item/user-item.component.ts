import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})

export class UserItemComponent implements OnInit {

  name = input<string>();

  constructor(){

  }

  ngOnInit(): void {
    
  }
}
