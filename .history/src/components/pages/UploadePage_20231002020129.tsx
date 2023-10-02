// src/components/pages/UploadPage.tsx

import type { FC } from "react";
import PDFUploadForm from "../organisms/PDFUploadForm";
import MainTemplate from "../templates/MainTemplate";

const UploadPage: FC = () => {
    return (
        <MainTemplate>
            <PDFUploadForm />
        </MainTemplate>
    );
};

export default UploadPage;
