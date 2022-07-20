import React from "react";
import "../styles/Projects.css";
import {ProjectList} from "../components/ProjectList";
import Project from "../components/Project"


function Projects() {

    const projectList = ProjectList.map((project, id) => {
        return (
            <Project id ={id} name = {project.name} description = {project.description} image = {project.image}> </Project>
        )
    })

    return(
        <div className ="projects">
            <h1>My Projects</h1>
            <div className = "projectList">
                {projectList}
            </div>
        </div>
    )
}

export default Projects;