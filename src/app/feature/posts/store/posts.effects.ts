import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { PostsState } from "./posts.reducer";
import { loadPosts } from "./posts.actions";
import { of, switchMap } from "rxjs";

export class PostsEffects {

    posts$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loadPosts),
            switchMap(()=>{
                return of(null)
            })
        )
    )

    constructor(private actions$: Actions, private store: Store<{ posts: PostsState }>) {
    }
}