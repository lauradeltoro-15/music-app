import { cardListMock } from "../../mocks/cardListMock";
import CardList from "../commonComponents/CardList";

const MusciListPage = () => {
  return <CardList items={cardListMock}></CardList>;
};

export default MusciListPage;
