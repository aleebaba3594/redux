import React from "react";
import { useDispatch } from "react-redux";
import { plusOne } from "..//redux/action/Actions";

export default function Child2() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(plusOne())}> + 1</button>
    </div>
  );
}
