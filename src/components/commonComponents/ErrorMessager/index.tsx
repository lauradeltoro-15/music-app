import { StyledErrorMessager } from "./layout";
import { ErrorMessagerProps } from "./models";

const ErrorMessager = ({ error }: ErrorMessagerProps) => {
  return (
    <StyledErrorMessager>
      <h1>Awww jeez! :(</h1>
      <p>{error.message}</p>
    </StyledErrorMessager>
  );
};

export default ErrorMessager;
