import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../styles/themes";
import "@testing-library/jest-dom/extend-expect";
import { ModalProvider } from "../contexts/ModalContext";
import { renderHook } from "@testing-library/react-hooks";
import React from "react";

type WrapperAttributes = {
  children: React.ReactNode;
};

export const WithTheme = (component: React.ReactNode) => (
  <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
);

export const WithModalContext = (component: React.ReactNode) => (
  <ModalProvider>{component}</ModalProvider>
);

export const HookWithModalContext = <T,>(hook: () => T) => {
  const wrapper = ({ children }: WrapperAttributes) =>
    WithModalContext(children);
  const {
    result: { current },
  } = renderHook(hook, {
    wrapper,
  });
  return current;
};

export const Hook = <T,>(hook: () => T) => {
  const {
    result: { current }, unmount,
  } = renderHook(hook);
  return {current, unmount};
};

export const mockUseState = <T,>(state: T) => {
  const mockUseState = jest.spyOn(React, "useState");
  const mockSetState = jest.fn();
  mockUseState.mockImplementation(() => [state, mockSetState]);
  return mockSetState;
};
