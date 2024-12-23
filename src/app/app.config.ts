import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './feature/ngrx-demo/store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './feature/ngrx-demo/store/counter.effects';
import { postsReducer } from './feature/posts/store/posts.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({
    counter: counterReducer,
    posts: postsReducer
  }), provideEffects([CounterEffects])]
};
