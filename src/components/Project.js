import React from "react";
import { useNavigate } from "react-router-dom";


function Project({ image, name, description, id}) {
    const navigate = useNavigate();

    function handleClick(){
        navigate("/project/" + id)
    }
    return (
        <div className = "projectItem" onClick={handleClick}>
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name}</h1>
            <p> {description} </p>
            
        </div>
    )
}

export default Project;