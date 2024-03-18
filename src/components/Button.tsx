import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
}

const Button = ({ type, text, onClick }: buttonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className="
            w-full  rounded-md bg-wirchual-500 py-1 text-white disabled:opacity-50  bg-indigo-500"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
