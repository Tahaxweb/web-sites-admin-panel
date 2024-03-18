import classNames from "classnames";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  variant: "primary" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
}
const Container = ({ children, variant }: ContainerProps) => {
  return (
    <div
      className={classNames({
        "mx-auto max-w-xl": true,
        "mx-auto max-w-2xl": variant == "2xl",
        "mx-auto max-w-3xl": variant == "3xl",
        "mx-auto max-w-4xl": variant == "4xl",
        "mx-auto max-w-5xl": variant == "5xl",
        "mx-auto max-w-6xl": variant == "6xl",
        "mx-auto max-w-7xl": variant == "7xl",
      })}
    >
      {children}
    </div>
  );
};

export default Container;
