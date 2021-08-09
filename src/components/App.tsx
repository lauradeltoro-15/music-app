import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import Card from "./commonComponents/Card";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card
        title="Card title"
        width={300}
        height={300}
        imageUrl="https://picsum.photos/200/300"
      >
        <p>Example child</p>
      </Card>
    </ThemeProvider>
  );
};

export default App;
