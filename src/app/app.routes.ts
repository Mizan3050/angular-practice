import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=> import('./feature/ngrx-demo/counter-output/counter-output.component').then(c=> c.CounterOutputComponent)
    },
    {
        path: 'posts',
        loadChildren: () => import('./feature/posts/posts.module').then(m => m.PostsModule)
    }
];
