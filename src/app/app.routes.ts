import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'posts',
        loadChildren: () => import('./feature/posts/posts.module').then(m => m.PostsModule)
    }
];
