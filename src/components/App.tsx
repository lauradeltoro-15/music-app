import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <p>Hello world</p>
    </ThemeProvider>
  );
}

export default App;
