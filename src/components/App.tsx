import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { Route, Switch } from "react-router-dom";

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
