import ActivityPlannerImg from "../images/ActivityPlanner.jpg"
import AndysListImg from "../images/AndysList.jpg"
import TranaImg from "../images/Trana.jpg"



export const ProjectList = [
    {
        name: "Trana",
        image: TranaImg,
        description: "Fitness app with social media features that allow users to share images and descriptions of workouts with each other",
        link: "https://trana.herokuapp.com/",
        details: ["Used Ruby on Rails and PostgreSQL to create a database and a RESTful API backend", 
        "Employed ReactJS and the Styled-Components library to style the front end of my website", 
        "Applied Ruby on Rails Active Storage gem along with AWS S3 to add image upload capabilities to the website", 
        "Leveraged Active Record aliasing to create more complex relationships between database models"]
    },
    {
        name: "Andy's List",
        image: AndysListImg,
        description: "Online marketplace that allows individuals and resellers to market used goods",
        link: "https://andyslist.herokuapp.com/",
        details: ["Employed the Ruby Bcrypt gem to add user authentication and password protection to the website",
        "Leveraged React Router to set up navigation between different components of my application",
        "Integrated frontend and backend with Javascript fetch requests and Ruby JSON queries"
        ]
    },
    {
        name: "Activity planner",
        image: ActivityPlannerImg,
        description: "Activity planner where users can browse a list of activities and keep track of those that interest them the most",
        link: "https://weekend-activity-planner.herokuapp.com/",
        details: ["Built an API backend that uses active record to access and persist data in a SQL database", 
        "Created a separate React frontend that interacts with the database via the API", 
        "Fetched data from an existing API to create activity suggestions for users"
        ]
    }
]