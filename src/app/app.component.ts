import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ArticleComponent } from './article/article.component'

interface LinkForm {
  title: FormControl<string>;
  link: FormControl<string>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserItemComponent,
    UserListComponent,
    ArticleComponent,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'reddit';
  addLinkForm!: FormGroup<LinkForm>;

  constructor() {}

  ngOnInit(): void {
    this.addLinkForm = new FormGroup<LinkForm>({
      title: new FormControl('', { nonNullable: true }),
      link: new FormControl('', { nonNullable: true }),
    });
  }

  submitAddLinkForm(): void {
    console.log(this.addLinkForm.getRawValue());
  }
}
