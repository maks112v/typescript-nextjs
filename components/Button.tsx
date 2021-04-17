import React, { FunctionComponent } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
}

const Button: FunctionComponent<ButtonProps> = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};

export default Button;
