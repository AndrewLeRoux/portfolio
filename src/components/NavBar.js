import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const linkStyles = {
    display: "inline-block",
    width: "130px",
    padding: "12px",
    margin: "0px 6px 6px",
    textDecoration: "none",
    color: "white",
    "borderRadius": "20px",
    "textAlign": "center",
};


function NavBar() {
    return (
        <NavBarDiv>
                <NavLink to = "/" style={linkStyles} >Home</NavLink>
                <NavLink to = "/projects" style={linkStyles} >Projects</NavLink>
                <NavLink to = "/experience" style={linkStyles} >Experience</NavLink>
        </NavBarDiv>
    )
}

const NavBarDiv = styled.div`
    width: 100%;
    height: 70px;
    background: #2f3b70;
    color: #eeeeee;
    text-decoration: none;
    font-size: 25px;
`


export default NavBar;