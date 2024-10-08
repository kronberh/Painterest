import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useRef } from "react";

function Navbar (): JSX.Element {
    const searchRef: any = useRef();
    const menu_items = [
        { path: "/", title: "Home" },
        { path: "add-image", title: "Add Image" },
        { path: "account", title: "You" },
    ];

    return (
        <>
            <nav>
                <li>
                    <NavLink className="image-link" to={menu_items[0].path} end>
                        <img src="/logo.png" alt="Painterest" />
                    </NavLink>
                </li>
                {menu_items.slice(0, -1).map((el, index) => (
                <li key={index}>
                    <NavLink to={el.path} end className={({ isActive }) => isActive ? "active" : ""}>{el.title}</NavLink>
                </li>
                ))}
                <li>
                    <input type="search" ref={searchRef} placeholder={"⌕" + (searchRef.current?.value ?? "")} />
                </li>
                <li>
                    <NavLink to={menu_items[menu_items.length - 1].path} end>{menu_items[menu_items.length - 1].title}</NavLink>
                </li>
            </nav>
        </>
    );
}

export { Navbar };