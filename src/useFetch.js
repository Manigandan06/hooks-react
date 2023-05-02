import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setdata] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, [url]);

  return [data];
}
