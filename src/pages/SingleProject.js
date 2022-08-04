import React from "react";
import {useParams} from "react-router-dom";
import "../styles/SingleProject.css";
import { ProjectList } from "../components/ProjectList";
import styled from "styled-components";


function SingleProject() {
    const { id } = useParams();
    const project = ProjectList[id];

    const details = project.details.map(detail => {
        return <Li>{detail}</Li>
    })

    return(
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt="projectimg"/>
            <p>
                <b>Description:</b> {project.description}
                <br/>
                <b>Link: </b><a href={project.link}>{project.name}</a>
                <br></br>
                <b>Details:</b>
                <ul>
                    {details}
                </ul>
            </p>
            
        </div>
    )
}


const Li = styled.li`
    text-align: left;
    font-size: 20px;
`


export default SingleProject;