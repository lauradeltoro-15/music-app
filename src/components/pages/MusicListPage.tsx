import { cardListMock } from "../../mocks/cardListMock";
import CardList from "../commonComponents/CardList";

const MusciListPage = () => {
  return (
    <main>
      <CardList items={cardListMock} />
    </main>
  );
};

export default MusciListPage;
