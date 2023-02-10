import * as React from "react";
import { Button } from "../UI/Button";

export function LetterButtons() {
  return (
    <div className="letter-wrapper">
      <Button name="letter-button">a</Button>
      <Button name="letter-button">b</Button>
      <Button name="letter-button">c</Button>
    </div>
  );
}
