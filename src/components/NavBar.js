import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to = "/">Home</NavLink>
            <NavLink to = "/projects">Projects</NavLink>
            <NavLink to = "/experience">Experience</NavLink>
        </div>
    )
}



export default NavBar;