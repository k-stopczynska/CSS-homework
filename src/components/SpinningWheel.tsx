import * as React from "react";
import { Button } from "../UI/Button";

export function SpinningWheel() {
  return (
    <div className="spin-wrapper">
      <div className="spinning-wheel">
        <div className="point horiz top">1</div>
        <div className="point middle">2</div>
        <div className="point center">3</div>
        <div className="point middle">4</div>
        <div className="point horiz">5</div>
      </div>
      <div className="spin-button-wrapper">
        <Button name="spin">spin</Button>
      </div>
    </div>
  );
}
