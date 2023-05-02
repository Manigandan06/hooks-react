import React, { createContext, useState } from "react";
import C1 from "./C1";

export const DataContext = createContext(null);

export default function App() {
  const [message, setmessage] = useState("Hi guys");

  return (
    <DataContext.Provider value={{ message }}>
      <div>
        <h1>App</h1>
        <C1 />
      </div>
    </DataContext.Provider>
  );
}
