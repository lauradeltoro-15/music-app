import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MusicListPage from "./pages/MusicListPage";
import { ModalProvider } from "./contexts/ModalContext";
import Modal from "./commonComponents/Modal";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ModalProvider>
        <Modal />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/music-list" render={() => <MusicListPage />} />
        </Switch>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
