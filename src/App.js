// import "./App.scss";
import { BrowserRouter } from "react-router-dom";

import UserRoute from "./routes/UserRoute";

function App() {
  return (
    <BrowserRouter>
      <UserRoute />
    </BrowserRouter>
  );
}

export default App;
