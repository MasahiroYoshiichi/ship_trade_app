// src/components/pages/UploadPage.tsx

import type { FC } from "react";
import PDFUploadForm from "components/organisms/PDFUploadForm";
import MainTemplate from "components/templates/MainTemplate";



const UploadPage: FC = () => {
    return (
        <div className="w-full w-full flex justify-center items-center bg-gray-200">
            <MainTemplate>
                <PDFUploadForm/>
            </MainTemplate>
        </div>
    );
};

export default UploadPage;
