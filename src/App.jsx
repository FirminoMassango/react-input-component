import { useState } from "react";
import { Input } from "./components/Input";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Inputs</h1>
      <span>{"<Input />"}</span>
      <Input />
      <span>{"<Input error />"}</span>
      <Input error />
      <span>{"<Input disabled />"}</span>
      <Input disabled />
      <span>{'<Input helperText="Some interesting text" />'}</span>
      <Input helperText="Some interesting text" />
      <span>{'<Input value="Text" />'}</span>
      <Input value="Text" />
      <span>{'<Input size="sm" />'}</span>
      <Input size="sm" />
      <span>{'<Input size="md" />'}</span>
      <Input size="md" />
      <span>{"<Input fullWidth />"}</span>
      <Input fullWidth />
      <span>{'<Input multiline row="4" />'}</span>
      <Input multiline row="4" />
      <span>
        created by <a href="#">Firmino Massango</a> - devChallenges.io
      </span>
    </div>
  );
}

export default App;
