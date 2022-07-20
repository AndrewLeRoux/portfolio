import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "styled-components";

function Home() {
    return(
      <HomeDiv>
      <About>
        <AboutH2> Hi, My Name is Andrew</AboutH2>
        <br></br>
        <AboutDetails>
          <p>I'm a full stack software engineer and a full time athlete on the US national rowing team.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </AboutDetails>
      </About>
      <Skills>
        <h1> Skills</h1>
        <List>
        <li>
          <h2>Languages</h2>
          JavaScript, Java, Ruby, SQL
        </li>
        <li>
          <h2> Front-End</h2>
            ReactJS, HTML, CSS, NPM, MaterialUI, StyledComponents
        </li>
        <li>
          <h2>Back-End</h2>
            Ruby on Rails, NodeJS, PostgreSQL, AWS S3
        </li>
        </List>
      </Skills>
    </HomeDiv>
    )
}

const HomeDiv = styled.div`
  width: 100%;
  align-items: center;
  font-family: "Arial", sans-serif;
  color: #3e497a;
`

const About = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #21325e;
  color: #f0f0f0;
`

const AboutH2 = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 60px;
  color: rgb(205, 57, 57);
  height: 50px;
  @media only screen and (max-width: 650px) {
    font-size: 40px;
  }
  
`

const AboutDetails = styled.div`
  width: 40%;
  font-size: 30px;
  margin: 20px;
  color: white;
  @media only screen and (max-width: 650px) {
    margin-top: 10px;
    font-size: 20px;
    width: 80%;
  }
`

const Skills = styled.div`
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const List = styled.ol`
  list-style: none;
  
`



export default Home;
  