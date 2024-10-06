import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { store } from "./store/store";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} fallbackElement={<img src="/loading.webp" alt="loading" className="loading-main" />} />
    </Provider>
  );
}

export default App;