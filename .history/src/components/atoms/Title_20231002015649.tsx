// src/components/atoms/Title.tsx

import type { FC } from "react";

interface TitleProps {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

const Title: FC<TitleProps> = ({ level = "h1", children, className }) => {
    const Component = level;

    const baseStyle = "text-gray-800 text-center";

    return (
        <Component className={`${baseStyle} ${className || ""}`}>
            {children}
        </Component>
    );
};

export default Title;
