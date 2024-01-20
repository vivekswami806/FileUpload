import React from "react";
import { SUBMIT } from "../action/actionType";

function Storage() {
  return localStorage.getItem("redux")
    ? JSON.parse(localStorage.getItem("redux"))
    : { instate: [] };
}

const formReducer = (state = Storage(), action) => {
  switch (action.type) {
    case SUBMIT:
      return { ...state, instate: [...state.instate, action.payload] };
    default:
      return state;
  }
};

export default formReducer;
