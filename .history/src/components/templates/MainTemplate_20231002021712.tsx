import type { FC, ReactNode } from "react";

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
    return (
        <div className=" bg-gray-200">
            {children}
        </div>
    );
};

export default MainTemplate;
