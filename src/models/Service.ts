import { ErrorHandler } from "./ErrorHandler";

export interface Service {
  baseUrl: string;
  errorHandler: ErrorHandler;

}

