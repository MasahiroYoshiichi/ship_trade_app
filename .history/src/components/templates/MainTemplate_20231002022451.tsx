import type { FC, ReactNode } from "react";

interface MainTemplateProps {
    children: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
    return (
        <div className="">
            {children}
        </div>
    );
};

export default MainTemplate;
