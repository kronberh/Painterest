import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { store } from "./store/store";
import { LoadingSpinner } from "./components/LoadingSpinner";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} fallbackElement={<LoadingSpinner />} />
    </Provider>
  );
}

export default App;