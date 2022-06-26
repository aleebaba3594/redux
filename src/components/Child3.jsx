import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { multiplyTwo } from "../redux/action/Actions";

export default function Child3() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(multiplyTwo())}> * 2</button>
    </div>
  );
}
