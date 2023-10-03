// src/components/pages/UploadPage.tsx

import type { FC } from "react";
import PDFUploadForm from "components/organisms/PDFUploadForm";
import MainTemplate from "components/templates/MainTemplate";



const UploadPage: FC = () => {
    return (
        <MainTemplate>
            <PDFUploadForm/>
            <PDFUploadForm/>
            <PDFUploadForm/>
            <PDFUploadForm/>
        </MainTemplate>
    );
};

export default UploadPage;
