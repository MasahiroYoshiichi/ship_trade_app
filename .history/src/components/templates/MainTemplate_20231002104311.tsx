// src/components/templates/MainTemplate.tsx

import type { FC, ReactNode } from "react";

type props = {
    children: ReactNode;
}

const MainTemplate: FC<props> = ({ children }) => {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-gray-200">
            {children}
        </div>
    );
};

export default MainTemplate;
