import ListGroup from "./components/ListGroup";
// import "./App.css";
import { BsCalendar2Fill } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";

function App() {
  let items = ["Anne", "Erin", "Kate", "Kelley", "Julie"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Golden Girls"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
