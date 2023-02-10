import * as React from "react";
import { Button } from "../UI/Button";

export function Nav() {
  return (
    <div className="nav-wrapper">
      <div className="gradient-wrapper">
        <p className="sum">$ 234623</p>
      </div>
      <Button name="hamburger">
        <div className="line"></div>
      </Button>
    </div>
  );
}
