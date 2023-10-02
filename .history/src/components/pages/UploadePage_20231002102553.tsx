// src/components/pages/UploadPage.tsx

import type { FC } from "react";
import PDFUploadForm from "components/organisms/PDFUploadForm";
import MainTemplate from "components/templates/MainTemplate";



const UploadPage: FC = () => {
    return (
        <MainTemplate>
             <div className="w-full">
                <PDFUploadForm/>
            </div>
        </MainTemplate>
    );
};

export default UploadPage;
