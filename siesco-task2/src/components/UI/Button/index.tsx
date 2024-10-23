import { MouseEvent } from "react";

type ButtonTypes = {
  action: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ action, onClick }: ButtonTypes) => {
  return (
    <button
      className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
      onClick={onClick}
    >
      {action}
    </button>
  );
};

export default Button;
