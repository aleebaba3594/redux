import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { divideTwo } from "../redux/action/Actions";

export default function Child4() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(divideTwo())}> / 2</button>
    </div>
  );
}
