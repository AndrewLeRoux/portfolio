import React from "react";
import {useParams} from "react-router-dom";
import "../styles/SingleProject.css";
import { ProjectList } from "../components/ProjectList";


function SingleProject() {
    const { id } = useParams();
    const project = ProjectList[id];
    return(
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt="projectimg"/>
            <p>
                <b>Description:</b> {project.description}
                <br/>
                <b>Link: </b><a href={project.link}>{project.name}</a>
            </p>
            
        </div>
    )
}



export default SingleProject;