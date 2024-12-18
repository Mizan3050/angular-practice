import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomIfDirective } from '../../../shared/directives/custom-if.directive';

@Component({ 
  selector: 'app-posts',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CustomIfDirective],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  #http = inject(HttpClient)
  posts$: Observable<Array<any>> = this.#http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts')

}
