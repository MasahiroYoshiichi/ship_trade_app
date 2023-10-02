
import type { FC, ReactNode, ComponentType } from "react";

interface TitleProps {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: ReactNode;
}

const Title: FC<TitleProps> = ({ level = "h1", children, className }) => {
    const Component = level as keyof JSX.IntrinsicElements; // タグ名を型としてキャスト

    return <Component className={`text-gray-800 ${className}`}>{children}</Component>;
};

export default Title;
