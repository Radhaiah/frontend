import React from 'react'

const Home = () => {
  // Create the Team Data
  const teamDetails=[
    {
      id:1,
      teamname:"sahus",
      teamleader:'David',
      teammembers:{member1:"Kumar",member2:"Raju",member3:"Neelima"},
      
    },
    {
      id:2,
      teamname:"suhas",
      teamleader:'Venky',
      teammembers:{member1:"Edukondallu",member2:"Mahesh",member3:"Rani"},
      
    },
    {
      id:3,
      teamname:"sevak",
      teamleader:'Rakesh',
      teammembers:{member1:"Koti",member2:"Soloman",member3:"Hanna"},
      
    }
  ]
  // Creating details for project
  let demodetails=[
    {
      teamname:"PG Management",
      teamleader:'Sridheer',
      teammembers:{member1:"Lakshmi",member2:"Kumar",member3:"Rathnam"},
      
    },
    {
      teamname:"Book My Show",
      teamleader:'Mosses',
      teammembers:{member1:"Ravi",member2:"Satish",member3:"Raghu"},
      
    },
    {
      teamname:"Pizza Delivery",
      teamleader:'Harsha',
      teammembers:{member1:"Raju",member2:"Chiru",member3:"Sanjay"},
      
    }
  ]
  return (
    <>
    {/* creating Div for printing teamdetails in a card */}
    <h1 className="text-primary d-flex p-2 float-left">Team Details:</h1>
    <div className='container d-flex flex-col border border-danger p-5 mt-5 bg-primary '>
    {/* mapping the teamdetail to the div */}
     { teamDetails.map((team, index)=>(
      <div className='container border border-primary rounded-lg m-4 shadow bg-black p-2'>
      <div className="card bg-success text-white" style={{width: "18rem"}} key={index}>
    <div className="card-body">
    <h5 className="card-title">{team.teamname}</h5>
    <h6 className="card-subtitle mb-2">Leader: {team.teamleader}</h6>
    <p className="card-text">member1: {team.teammembers.member1}<br></br>
                            member2: {team.teammembers.member2}<br></br>
                            member3: {team.teammembers.member3}</p>
                            <a href="Edit" type="submit" className="btn btn-info" >Edit Team</a>
    
  </div>
</div></div>
     ))
      }
      {/* creating Div for printing projectdetails in a card */}
    </div>
    <h1 className="container text-primary d-flex p-2 float-left ">Project Details:</h1>
    <div className='container d-flex flex-col border border-danger p-5 mt-5 bg-secondary '>
    {/* mapping the projectdetail to the div */}
     { demodetails.map((team, index)=>(
      <div className='container border border-primary rounded-lg m-4 bg-light p-2'>
      <div className="card bg-dark text-white" style={{width: "18rem"}} key={index}>
    <div className="card-body">
    <h5 className="card-title">{team.teamname}</h5>
    <h6 className="card-subtitle mb-2">Leader: {team.teamleader}</h6>
    <p className="card-text">member1: {team.teammembers.member1}<br></br>
                            member2: {team.teammembers.member2}<br></br>
                            member3: {team.teammembers.member3}</p>
    <button type="submit" className="btn btn-info" >Edit Team</button>
  </div>
</div></div>
     ))
      }
      
    </div>
   
</>
  )
}
export default Home;