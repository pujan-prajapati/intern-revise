import React, { useState } from "react";
import Greeting from "./components/greeting";
import { LoginPage } from "./components/login";

const App = () => {
  const [count, setCount] = useState(0);

  const name = "Pujan Prajapati";

  // const handleCount = () => {
  //   count = count + 1;
  //   console.log(count);
  // };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Greeting name={name} />

      <br />
      <br />
      <LoginPage />
    </div>
  );
};

export default App;
