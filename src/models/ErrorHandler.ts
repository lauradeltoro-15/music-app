export interface ErrorHandler<T> {
  handle:(error: T) => void;
}
