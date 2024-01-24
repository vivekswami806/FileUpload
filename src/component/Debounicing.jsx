import React, { useEffect, useState } from "react";
import axios from "axios";
function Debounicing() {
  const [fetchData, setfetchData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  async function getData() {
    let url = "https://dummyjson.com/posts";
    try {
      let res = await axios(url);
      let data = await res.data.posts;
      setfetchData(data);
      setFilterData(data);
      console.log(filterData,'f');
    } catch (err) {
      console.log(err);
    }
  }
  function changeHandel(e) {
    setInputValue(e.target.value);
    let x = fetchData.filter((item) => {
      return item.title.toLowerCase().includes(inputValue.toLowerCase());
    });
    setFilterData(x);
  }

  useEffect(() => {
    let id = setTimeout(() => {
      console.log("i am click", filterData);
      getData();
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  }, [inputValue]);

  return (
    <div style={{}}>
      <input
        type="text"
        onChange={(e) => {
          changeHandel(e);
        }}
      />
      {filterData.map((items, index) => {
        return (
          <div key={index}>
            <h1 style={{ border: "2px solid blue" }}>{items.title} </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Debounicing;
