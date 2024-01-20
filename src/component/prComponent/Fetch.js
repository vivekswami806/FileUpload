import React, { useEffect, useState } from "react";

function Fetch() {
  let [data1, setData] = useState([]);
   
  async function fetchData() {
    let url = "https://dummyjson.com/users";
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.users);
        
      });
  }
  console.log(data1);
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div>
      {data1.map((items) => {
        return (
          <>
            <h1>{items.id} </h1>
             <p>{ items.address.address} </p>
             <h3>{items.company.address.address} </h3>
             <h3>{items.company.address.coordinates.lng} </h3>
             <div>

             </div>
          </>
        );
      })}
    </div>
  );
}

export default Fetch;
