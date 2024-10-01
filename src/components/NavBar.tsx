import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
  const menu_items = [
    { path: "/", title: "Home" },
    { path: "add-image", title: "Add Image" },
  ];

  return (
    <>
      <div>
        <ul>
          {menu_items.map((el, index) => (
            <li key={index}>
              <NavLink to={el.path} end>{el.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}
