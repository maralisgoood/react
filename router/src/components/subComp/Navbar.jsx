import React from "react";
import { MENUS } from "../../util/data";

export default function Navbar() {
    return (
        <nav>
            <ul>
                {MENUS.map((menu, index) => (
                    <li key={index}>
                        <a href={menu.url}>{menu.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}