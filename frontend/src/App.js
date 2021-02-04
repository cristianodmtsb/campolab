import RouterContainer from "./view/routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <RouterContainer />
    </Router>
  );
}

export default App;
