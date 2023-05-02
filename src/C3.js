import React from "react";
import useFetch from "./useFetch";

export default function C3() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/3");
  return (
    <div>
      <h1>C3</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
