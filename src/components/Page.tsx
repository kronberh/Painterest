import "./Page.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

function Page() {
  return (
    <>
      <Navbar />
      <div style={{padding: "2.5em"}}></div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </>
  );
}

export { Page }
