import * as React from "react";

interface ButtonProps {
  name: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <div className="golden-border">
      <button className={props.name} name={props.name}>
        {props.children}
      </button>
    </div>
  );
}
