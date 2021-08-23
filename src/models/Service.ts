import { ErrorHandler } from "./ErrorHandler";

export interface Service<T> {
  baseUrl: string;
  errorHandler: ErrorHandler<T>;

}

