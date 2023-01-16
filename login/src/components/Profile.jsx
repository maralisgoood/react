import React from "react";
import "../styles/profile.css";

export default function Profile(prop) {
    const { setIsLoggedIn } = prop;
    const userName = localStorage.getItem("currentUser");

    return (
        <div className="">
            <h3>welcome back, {userName} :)</h3>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
    );
}