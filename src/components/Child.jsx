import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { minusOne } from "../redux/action/Actions";

export default function Child() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(minusOne())}> - 1</button>
    </div>
  );
}
