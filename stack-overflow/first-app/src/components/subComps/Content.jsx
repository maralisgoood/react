import React from "react";
import '../../styles/main.css';
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";

export default function Content(){
    return(
        <div id="content">
            <Mainbar/>
            <Sidebar/>
        </div>
    );
}