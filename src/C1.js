import React from "react";
import C2 from "./C2";
import useFetch from "./useFetch";

export default function C1() {
  const [data] = useFetch();
  return (
    <div>
      <h1>C1</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <C2 />
    </div>
  );
}
