import store, { rootReducer } from "./store";

export interface InitialState<T> {
  data: T;
  isLoading: boolean;
  error: string | null;
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
