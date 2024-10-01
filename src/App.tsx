import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} fallbackElement={<div>pls wait</div>} />
    </>
  );
}

export default App;
