import type { FC, ReactNode } from "react";  // ReactNodeをimportします

interface TitleProps {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: ReactNode;  // childrenを追加します
}

const Title: FC<TitleProps> = ({ level = "h1", children, className }) => {
    const Component = level as any;  // TypeScriptのエラーを回避するためのキャスト

    return <Component className={`text-gray-800 ${className}`}>{children}</Component>;
};

export default Title;
