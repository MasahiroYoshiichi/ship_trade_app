// src/components/atoms/Button.tsx

import type { FC, ButtonHTMLAttributes } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-200 ease-in-out"
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
