import "./Page.css";
import { Outlet } from "react-router-dom";
import { Menu } from "./Menu";


function Page(): JSX.Element {
  return (
    <>
      <Menu />
      <div style={{padding: "2.5em"}}></div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}

export { Page };