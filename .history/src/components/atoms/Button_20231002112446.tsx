// src/components/atoms/Button.tsx

import type { FC, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition duration-300 ease-in-out"
        >
            {children}
        </button>
    );
};

export default Button;
