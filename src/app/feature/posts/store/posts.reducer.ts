import { createReducer } from "@ngrx/store"
import { Post } from "../interface/posts"

export interface PostsState {
    results: Post[],
    count: number,
    loading: boolean
}


const postsInitialState: PostsState = {
    results: [],
    count: 0,
    loading: false
}

export const postsReducer = createReducer(
    postsInitialState
)