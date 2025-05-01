import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["Melon", "Apples", "Bananas"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      {alertVisible && (
        <Alert onClick={() => setAlertVisibility(false)}>
          This is your <b>first</b> alert
        </Alert>
      )}
      <ListGroup items={items} heading="Food" onSelectItem={handleSelectItem} />
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Beware!
      </Button>
    </div>
  );
}

export default App;
