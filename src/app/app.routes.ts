import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'posts',
        loadChildren: () => import('./feature/posts/posts.module').then(m => m.PostsModule)
    },
    {
        path: 'cd',
        loadComponent: () => import('./feature/change-detect-demo/change-detect-demo.component').then(m => m.ChangeDetectDemoComponent)
    },
    {
        path: 'file',
        loadComponent:()=> import('./feature/file-upload/file-upload.component').then(c=>c.FileUploadComponent)
    }
];
