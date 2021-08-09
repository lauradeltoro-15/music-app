export interface Theme {
  colors: {
    [index: string]: string;
    primary: string;
    secondary: string;
    primaryBackground: string;
    secondaryBackground: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
  };
  fontFamily: string;
  fontWeight: {
    bold: number;
    medium: number;
    thin: number;
  };
}
