import { StyledErrorMessager } from "./layout";
import { ErrorMessagerProps } from "./models";

export const errorMessageTitle = "Awww jeez! :(";
const ErrorMessager = ({ error }: ErrorMessagerProps) => {
  return (
    <StyledErrorMessager>
      <h1>{errorMessageTitle}</h1>
      <p>{error.message}</p>
    </StyledErrorMessager>
  );
};

export default ErrorMessager;
