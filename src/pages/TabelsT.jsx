import React from "react";

const TablesT = () => {

const data=[
    {
        id:1,
        col1:"Seed",
        col2:"Q3 2022",
        col3:"Q3 2023",
        col4:"$3.5 M",
        col5:"Current",
        col6:"PitchBlackX 1.0 Release, Hire c-suit staff, Initial coin offering(ICO), 1000 founders onboarding, $5 M in trading volume"
    },
    {
        id:2,
        col1:"Series A",
        col2:"TBD",
        col3:"TBD",
        col4:"TBD",
        col5:"Future",
        col6:""
    },
  
]
  return (
    <>
      <table className="table table-bordered text-center  mt-5 ">
        <thead>
          <tr>
            <th  className="firstTable">Round</th>
            <th>Closing</th>
            <th>Runway</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
         {
             data.map((user)=>(
                <tr>
                <td className="competitor text-start mx-auto">{user.col1}</td>
                <td>{user.col2}</td>
                <td>{user.col3}</td>
                <td>{user.col4}</td>
                <td>{user.col5}</td>
              </tr>
             ))
         }
        </tbody>
      </table>
    </>
  );
};

export default TablesT;
