import { createSelector } from "@ngrx/store";

// select count is basically a feature selector
// counter is the store key mentioned in app config provided to the store
export const selectCount = (state: { counter: number }) => state.counter;
export const selectDoubleCount = createSelector(
    selectCount,
    (state) => state * 2
)