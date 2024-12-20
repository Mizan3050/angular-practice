1. ng add @ngrx/store will add ngrx library to the application
2. adding this library will make changes to the main.ts file in the application, it will add provideStore() to the appConfig which will be provided during the bootstrapping of the application
3. provideStore(): Provides the global Store providers and initializes the Store. These providers cannot be used at the component level.

Reducer is responsible for the initial value of the store and changing the values/state of store eventually.
