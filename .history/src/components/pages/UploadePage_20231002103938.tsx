// src/components/pages/UploadPage.tsx

import type { FC } from "react";
import PDFUploadForm from "components/organisms/PDFUploadForm";
import MainTemplate from "components/templates/MainTemplate";



const UploadPage: FC = () => {
    return (
        <div className="w-full">
            <MainTemplate>
                <PDFUploadForm/>
            </MainTemplate>
        </div>
    );
};

export default UploadPage;
