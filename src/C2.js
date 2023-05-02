import React, { useContext } from "react";
import { DataContext } from "./App";
import C3 from "./C3";

export default function C2() {
  const { message } = useContext(DataContext);
  return (
    <div>
      <h1>C2</h1>
      {message}
      <C3 />
    </div>
  );
}
