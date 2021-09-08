import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes";
import "@testing-library/jest-dom/extend-expect";
import { ModalProvider } from "../contexts/ModalContext";

export const WithTheme = (component: React.ReactNode) => (
  <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
);

export const WithModalContext = (component: React.ReactNode) => (
  <ModalProvider>{component}</ModalProvider>
);
