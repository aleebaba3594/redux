import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { reset } from "../redux/action/Actions";

export default function Child5() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(reset())}> reset </button>
    </div>
  );
}
