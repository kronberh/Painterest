import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddImageForm } from "./components/AddImageForm";
import { Page } from "./components/Page";

const routes = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Page />}>
      <Route index element={<Home />} />
      <Route path="add-image" element={<AddImageForm />} />
    </Route>
  )
);

export default routes;
