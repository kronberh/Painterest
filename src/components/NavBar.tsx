import "./Navbar.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

function Navbar (this: any): JSX.Element {
    const navigate = useNavigate();
    const params = Object.fromEntries(new URLSearchParams(location.search));

    const searchRef: any = useRef();
    const menu_items = [
        { path: "/", title: "Home" },
        { path: "add-image", title: "Add Image" },
        { path: "account", title: "You" },
    ];

    const handleSearch = (e: any): void => {
        if (e.key === 'Enter') {
            if (!!searchRef.current.value) {
                navigate(`/?title=${searchRef.current.value}`);
                searchRef.current.value = '';
            }
            else {
                navigate('/');
            }
            navigate(0);
        }
      };

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
                    <input type="search" ref={searchRef} placeholder={!!params.title ? params.title : "⌕"} onKeyDown={handleSearch} />
                </li>
                <li>
                    <NavLink to={menu_items[menu_items.length - 1].path} end>{menu_items[menu_items.length - 1].title}</NavLink>
                </li>
            </nav>
        </>
    );
}

export default Navbar;