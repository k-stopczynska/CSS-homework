import * as React from "react";
import { SpinningWheel } from "./components/SpinningWheel";
import { LetterButtons } from "./components/LetterButtons";
import { Nav } from "./components/Nav";
import "./index.css";

export default function App() {
  return (
    <React.Fragment>
      <main className="main-container">
        <LetterButtons />
        <SpinningWheel />
      </main>
      <Nav />
    </React.Fragment>
  );
}
