import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { cardListMock } from "../mocks/cardListMock";
import CardList from "./commonComponents/CardList";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CardList items={cardListMock}></CardList>
    </ThemeProvider>
  );
};

export default App;
