import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import RowingIcon from "@mui/icons-material/Rowing";

function Experience() {
    return(
        <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Princeton University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Major: Economics, Minor: Finance
          </h4>
          <ul>
            <li>
                Graduated Magna Cum Laude
            </li>
            <li>
                3.7 GPA
            </li>
            <li>
                D1 Varsity Athlete on the Men's rowing team
            </li>
          </ul>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Fremont Group
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Accounting Analyst
          </h4>

          <ul>
            <li>
            Managed over 40 accounts for ultra-high-net-worth individuals at a family office with over $5B AUM
            </li>
            <li>
            Responsibilities included booking transactions, account reconciliation, sending payments to creditors, ad hoc data collection and analysis, and training new analyst and associate hires
            </li>
          </ul>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Flatiron School
          </h3>
          <ul>
            <li>
                Immersive full stack software engineering course
            </li>
            <li>
                Learned front end skills including JavaScript, ReactJS, HTML, and CSS
            </li>
            <li>
                Learned back end skills including Ruby, Ruby on Rails, SQL, ProgreSQL
            </li>

          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<RowingIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            US senior national rowing team
          </h3>
          <ul>
            <li>
                Member of the US national team for the 2022 Senior World Championships
            </li>
            <li>
                Qualified to compete at the 2021 Senior World Championships in the 2-
            </li>
          </ul>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
    )
}

export default Experience;
