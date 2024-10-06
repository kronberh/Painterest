import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddImageForm } from "./components/AddImageForm";
import { Account } from "./components/Account";
import { Page } from "./components/Page";

const routes = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<Page />}>
      <Route index element={<Home />} />
      <Route path="add-image" element={<AddImageForm />} />
      <Route path="account" element={<Account />} />
    </Route>
  )
);

export default routes;