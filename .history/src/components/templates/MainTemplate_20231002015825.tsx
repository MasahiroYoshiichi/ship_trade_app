// src/components/templates/MainTemplate.tsx

import type { FC } from "react";

const MainTemplate: FC = ({ children }) => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-200">
            {children}
        </div>
    );
};

export default MainTemplate;
