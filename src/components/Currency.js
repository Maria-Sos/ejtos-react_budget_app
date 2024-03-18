import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
        <select
          className="form-select form-select-sm mx-lg-2 w-80 bg-success text-white p-3"
          name="Currency"
          id="Currency"
          onChange={(event) => changeLocation(event.target.value)}
        >
          <option defaultValue>Currency (£ Pound)</option>
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
        </select>
        )
};

export default Currency;