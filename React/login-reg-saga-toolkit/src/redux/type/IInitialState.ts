export interface IInitialState<T> {
  loading: boolean;
  data: T;
  error: string | null;
}
