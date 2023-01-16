import React from "react";
import '../styles/main.css';
import Content from "./subComps/Content";
import Menu from "./subComps/Menu";

export default function Main() {
    return(
        <div className="container">
            <Menu/>
            <Content/>
        </div>
    );
}