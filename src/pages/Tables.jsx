import React from "react";

const Tables = () => {

const data=[
    {
        id:1,
        Competitor:"Party Round - 2021",
        Raised:"$7M",
        Revenue:"Pre-revenue",
        Model:"N/a"
    },
    {
        id:2,
        Competitor:"OpenSeas - 2017",
        Raised:"$427.2 M",
        Revenue:"$700 M",
        Model:"2.5% transaction fee "
    },
    {
        id:3,
        Competitor:"Rarible - 2020",
        Raised:"$16 M",
        Revenue:"$13.6 M",
        Model:"2.5% transaction fee "
    },
    {
        id:4,
        Competitor:"Robinhood - 2013",
        Raised:"$5.6 M",
        Revenue:"$13.6 M",
        Model:"PFOF"
    }
]
  return (
    <>
      <table className="table table-bordered text-center  mt-5 ">
        <thead>
          <tr>
            <th  className="firstTable">Competitor</th>
            <th>Raised</th>
            <th>Revenue</th>
            <th>Revenue Model</th>
          </tr>
        </thead>
        <tbody>
         {
             data.map((user)=>(
                <tr>
                <td className="competitor text-start ">{user.Competitor}</td>
                <td>{user.Raised}</td>
                <td>{user.Revenue}</td>
                <td>{user.Model}</td>
              </tr>
             ))
         }
        </tbody>
      </table>
    </>
  );
};

export default Tables;
