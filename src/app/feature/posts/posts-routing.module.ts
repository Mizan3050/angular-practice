import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Route[] = [
  {
    path: '',
    component: PostsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PostsRoutingModule { }
