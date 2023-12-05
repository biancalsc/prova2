import Form from "./components/Form";
import List from "./components/List";
import { Provider } from "./contexts";

function App() {
  return (
    <Provider>
      <Form />
      <List />
    </Provider>
  );
}

export default App;
