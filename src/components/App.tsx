import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { cardListMock } from "../mocks/cardListMock";
import { Route, Switch } from "react-router-dom";

import CardList from "./commonComponents/CardList";
import HomePage from "./pages/HomePage";
import MusicListPage from "./pages/MusicListPage";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/music-list" render={() => <MusicListPage />} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
