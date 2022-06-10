import React from 'react'



const Team = () => {
  
const team=[
  {
      id:1,
       img:"../images/team1.png",
       title:"Tremaine Grant, Co-CEO / Co-Founder",
       content:"Tremaine brings 10+ years of knowledge and experience in the tech space, working in the automotive, healthcare, and ecommerce industries. He has worked as a lead developer at General Motors, Meridian Healthcare, IQVIA, and Warby Parker. He has also founded and moved several apps from conception to market. With his company BULK, he has created a community of over 200k+ users, across 70+ different countries. He has been strongly invested in serial entrepreneurship and projects with impact and purpose. Experiencing and observing the challenges of fundraising as a black founder, is what prompted him to start PitchBlackX. ",
  },
 
  {
    id:2,
     img:"../images/team2.png",
     title:"Kai Evelyn Smith Daniels, Co-CEO / Co-Founder",
     content:"Kai Daniel brings 10+ years experience in Entrepreneurship and VC. She started her tenure off during her time at Florida State’s JIM Moran College. She has since studied business and venture at Wharton Business School, UC Berkley Haas, Northwestern Kellogg Executive Education, Hbcu VC, and Carnegie Mellon, where she currently studies. She has supported $150M+ in VC transactions as a Corporate VC. She is also a serial entrepreneur. She has first hand experience in the industry and has a deep understanding of the needs of both founders during fundraising and investors seeking high quality deal flow.  ",
},
]
  return (
    <>
      <div className="team">
          <div className="container-fluid">
              <div className="innerteam">
                  <h4 className='mb-5'>The Team</h4>
                   {
                     team.map((team)=>(
                      <div className="row">
                      <div className="col-lg-3 col-12"><img src={team.img}  className=" float-end img-fluid" alt="team" /></div>
                      <div className="col-lg-9 col-12 teamcon ">
                          <p>{team.title}</p>
                          <p>{team.content}</p>
                      </div>
                  </div>
                   ))
                   }
              </div>
          </div>
      </div>


    </>
  )
}

export default Team
