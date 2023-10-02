import type { FC, ReactNode } from "react";

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex items-center bg-gray-200">
            {children}
        </div>
    );
};

export default MainTemplate;
