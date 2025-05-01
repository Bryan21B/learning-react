import type { MouseEventHandler } from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "info";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function Button({ color = "primary", children, onClick }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
