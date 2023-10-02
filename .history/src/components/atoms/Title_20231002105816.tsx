import type { FC, ReactNode } from "react";

type props = {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: ReactNode;
}

const Title: FC<props> = ({ level = "h1", children, className }) => {
    const Component = level as keyof JSX.IntrinsicElements; // JSX要素のタグ名の型にキャスト

    const baseStyle = "text-gray-800 text-center";

    return (
        <Component className={`${baseStyle} ${className ?? ""}`}>
            {children}
        </Component>
    );
};

export default Title;
