import { MouseEvent } from "react";

type ButtonTypes = {
  action: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ action, onClick }: ButtonTypes) => {
  const className = `inline-block rounded  text-indigo-600 px-8 py-3 text-sm font-medium border border-slate-300	 transition hover:scale-104 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500`;

  return (
    <button className={className} onClick={onClick}>
      {action}
    </button>
  );
};

export default Button;
