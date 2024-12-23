import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.reducer";

export const postsFeatureSelector = createFeatureSelector<PostsState>('posts');
export const selectPostsList = createSelector(
    postsFeatureSelector,
    state=> state.results
)