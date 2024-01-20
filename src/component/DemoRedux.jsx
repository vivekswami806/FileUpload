import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { SUBMIT } from "../redux/action/actionType";

function DemoRedux() {
  let dispatch = useDispatch();
  const [inputData, setinputData] = useState({});
  let gdata = useSelector((data) => {
    return data.formReducer;
  });

  useEffect(() => {
    localStorage.setItem("redux", JSON.stringify(gdata));
  }, [gdata]);
  function changeHandel(e) {
    let { value, name } = e.target;
    setinputData({ ...inputData, [name]: value });
  }
  function changeHandelFile(e) {
    let { files, name } = e.target;
    setinputData({ ...inputData, [name]: URL.createObjectURL(files[0]) });
  }
  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: SUBMIT, payload: inputData });
  }

  return (
    <div>
      <form
        id="formData"
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          name="text"
          onChange={(e) => {
            changeHandel(e);
          }}
        />
        <input
          type="text"
          placeholder="Enter Your email"
          name="email"
          onChange={(e) => {
            changeHandel(e);
          }}
        />
        <input
          type="text"
          placeholder="Enter your number"
          name="number"
          onChange={(e) => {
            changeHandel(e);
          }}
        />
        <input
          type="file"
          name="file"
          onChange={(e) => {
            changeHandelFile(e);
          }}
        />
        <button type="submit"> Submit </button>
      </form>
      <div>
        {gdata.instate.map((items) => {
          return (
            <>
              <div>
                <h1> {items.text} </h1>
                <h1> {items.email} </h1>
                <h1> {items.number} </h1>
                <img src={items.file} alt="" width={"100px"} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
// function mapStateToProps(state){
//  return state
// }
// function mapStateToDispatch(dispatch){
//  return dispatch
// }
// connect(mapStateToProps,mapStateToDispatch)
export default DemoRedux;
