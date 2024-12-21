import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, setCount } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";


@Injectable()
export class CounterEffects {

    setCount = createEffect(() =>
        this.actions$.pipe(
            ofType(init),
            switchMap(() => {
                const count = localStorage.getItem('count');
                if (count) {
                    return of(setCount({ value: +count }))
                } else {
                    return of(setCount({ value: 0 }))
                }
            })
        )
    )

    saveCount = createEffect(() =>
        this.actions$.pipe(
            ofType(increment, decrement),
            withLatestFrom(this.store.select(selectCount)),
            tap(([action, counter]) =>
                localStorage.setItem('count', counter.toString()))
        ), {
        dispatch: false
    })

    constructor(private actions$: Actions, private store: Store<{ counter: number }>) {
    }
}