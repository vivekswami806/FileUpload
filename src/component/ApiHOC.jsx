import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiHOC({ url,divClick }) {
  let [FilterData, setFilterData] = useState([]);
  let [inputText, setInputtext] = useState("");
  async function getData() {
    try {
      // let url="https://dummyjson.com/posts?skip=10&limit=10"
      //   let url = "https://dummyjson.com/posts";

      let res = await axios(url);
      let data = await res.data.posts;
      setFilterData(data);
    } catch (err) {
      console.log(err);
    }
  }

  let x = FilterData.filter((items) =>  items.title.toLowerCase().includes(inputText.toLowerCase()));
  //setFilterData(...x);

  console.log(FilterData);
  useEffect(() => {
    getData();
  }, [inputText]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputtext(e.target.value);
        }}
      />

      {x.map((items, i) => {
        return (
          <>
            <div style={{ border: "2px solid black", display: "flex" }} onClick={divClick}>
              {items.title}{" "}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ApiHOC;
