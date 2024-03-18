"use client";

import { useRef } from "react";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;

  onSubmit?: () => void;
}

const Form = ({ children, action, onSubmit }: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
